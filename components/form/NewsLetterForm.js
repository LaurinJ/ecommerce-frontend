import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import NewsLetterInput from "./NewsLetterInput";
import { emailValidator } from "../../validators/emailValidator";
import { SUBSCRIBE_TO_NEWS } from "../../queries/Mutation";
import { useNotification } from "../../context/NotificationProvider";

function NewsLetterForm() {
  const dispatch = useNotification();
  const [email, setEmail] = useState("");
  const [err, setErr] = useState("");
  const [subscribeToNews] = useMutation(SUBSCRIBE_TO_NEWS, {
    onCompleted: (data) => {
      setEmail("");
      setErr("");
      dispatch({
        type: "SUCCESS",
        message: data.subscribeToNews.message,
        title: "Successful Request",
      });
    },
  });

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const error = emailValidator(email);
      if (!error) {
        // send email
        await subscribeToNews({ variables: { email: email } });
      } else {
        setErr(error);
      }
    } catch (error) {
      console.log(error);
      setErr(error.message);
    }
  };

  return (
    <div className="">
      <h4 className="mt-6 lg:mt-0 text-lg uppercase font-medium">
        PŘIHLAŠTE SE K ODBĚRU
      </h4>
      <span className="block my-2">
        Vložte Vás email a už Vám neunikne žádná super nabídka.
      </span>
      <form className="flex" onSubmit={handleSubmit}>
        <NewsLetterInput
          required={true}
          type="email"
          name="email"
          label="Email"
          prompt="Zadejte Email"
          error={err}
          value={email}
          handleChange={handleChange}
        />
        <button type="submit" className="base_btn_form_primary max-h-12">
          Odeslat
        </button>
      </form>
    </div>
  );
}

export default NewsLetterForm;
