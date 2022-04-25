import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SEND_CONTACT_MESSAGE } from "../../queries/Mutation";
import InputFieldBold from "./InputFieldBold";
import { useNotification } from "../../context/NotificationProvider";

function ContactForm() {
  const dispatch = useNotification();
  const [formValues, setFormValues] = useState({
    email: "",
    content: "",
  });
  const [err, setErr] = useState({});

  const [sendMessage] = useMutation(SEND_CONTACT_MESSAGE, {
    onCompleted: () => {
      setFormValues({ email: "", content: "" });
      dispatch({
        type: "SUCCESS",
        message: "Vaše zpráva byla odeslaná!",
        title: "Successful Request",
      });
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
      className="flex flex-col m-3 bg-white justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="m-3 w-full md:max-w-[500px] space-y-2">
        <span>Odpovíme co nejdříve to půjde.</span>
        <InputFieldBold
          required={true}
          type="email"
          name="email"
          label="Email"
          prompt="Zadejte Email"
          error={err.email}
          value={formValues.email}
          handleChange={handleChange}
        />
        <InputFieldBold
          required={true}
          type="textarea"
          name="content"
          label="Zpráva"
          prompt="Pošlete nám zprávu"
          rows="11"
          class="w-full h-full py-3 px-4 overflow-y-auto  resize-none"
          error={err.content}
          value={formValues.content}
          handleChange={handleChange}
        />
        <button
          className="base_btn_form_primary flex mx-auto items-center"
          type="submit"
        >
          ODESLAT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white ml-2"
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
