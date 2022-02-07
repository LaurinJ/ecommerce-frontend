import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEND_CONTACT_MESSAGE } from "../../queries/Mutation";
import InputFieldBold from "./InputFieldBold";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    content: "",
  });
  const [err, setErr] = useState({});
  const [sendMessage] = useMutation(SEND_CONTACT_MESSAGE, {
    onCompleted: () => {
      setFormValues({ email: "", content: "" });
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormValues({ ...formValues, [name]: value });
    setErr({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formValues.content.length !== 0) {
        await sendMessage({
          variables: {
            message: formValues,
          },
        });
      }
    } catch (error) {
      console.log(error);
      setErr(error.graphQLErrors[0].extensions.errors);
    }
  };

  return (
    <form
      className="flex flex-col m-3 rounded-md shadow-md bg-white justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="m-3 space-y-2">
        <span>Odpovíme co nejdříve to půjde.</span>
        <InputFieldBold
          // required={true}
          type="email"
          name="email"
          label="Email"
          prompt="Zadejte Email"
          error={err.email}
          value={formValues.email}
          handleChange={handleChange}
        />
        <input
          type="email"
          className="w-full py-3 px-4 border rounded-md outline-none"
          placeholder="Email"
          name="email"
          value={formValues?.email}
          onChange={handleChange}
        />
        <textarea
          className="w-full py-3 px-4 border rounded-md overflow-y-auto outline-none resize-none"
          placeholder="Pošlete nám zprávu"
          aria-autocomplete="off"
          aria-required="true"
          rows="14"
          name="content"
          value={formValues?.content}
          maxLength={10000}
          onChange={handleChange}
        ></textarea>
        <button
          className="px-4 py-1 mx-auto space-x-1 flex justify-center items-center bg-red-400 hover:bg-red-300 rounded-sm"
          type="submit"
        >
          <span>Odeslat</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
