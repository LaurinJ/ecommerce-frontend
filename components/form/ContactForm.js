import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEND_MESSAGE } from "../../queries/Mutation";

function ContactForm() {
  const [formValues, setFormValues] = useState({
    email: "",
    message: "",
  });
  const [sendMessage] = useMutation(SEND_MESSAGE, {
    onCompleted: () => {
      setFormValues({ email: "", message: "" });
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (message.length !== 0) {
    //   sendMessage({
    //     variables: {
    //       message: { content: message, to: "admin", from: user },
    //     },
    //   });
    // }
  };

  return (
    <form
      className="flex flex-col m-3 rounded-md shadow-md bg-white justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="m-3 space-y-2">
        <span>Odpovíme co nejdříve to půjde.</span>
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
          name="message"
          value={formValues?.message}
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
