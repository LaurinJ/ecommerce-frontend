import React, { useState } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import InputField from "../../components/form/InputField";
import { FORGOT_PASSWORD_EMAIL } from "../../queries/Mutation";
import { authenticate } from "../../actions/auth";
import { useNotification } from "../../context/NotificationProvider";
import Loader from "../Loader";

function ForgotPasswordForm() {
  const dispatch = useNotification();
  const [email, setEmail] = useState("");
  const [err, setErr] = useState({});
  const [forgotPassword, { data, loading, error }] = useMutation(
    FORGOT_PASSWORD_EMAIL,
    {
      notifyOnNetworkStatusChange: true,
      onCompleted: (data) => {
        setEmail("");
        setErr({});
        dispatch({
          type: "SUCCESS",
          message: "Email na změnu hesla byl odeslán",
          title: "Successful Request",
        });
      },
    }
  );

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errors = validate(email);
      setErr(errors);
      if (Object.keys(errors).length === 0) {
        await forgotPassword({
          variables: { email: email },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validate = (email) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email) {
      errors.email = "Toto pole je povinné";
    } else if (!regex.test(email)) {
      errors.email = "Email je ve špatném formátu";
    }
    return errors;
  };

  return (
    <>
      {loading && <Loader />}
      <form className="p-8 shadow-xl lg:text-lg" onSubmit={handleSubmit}>
        <h2 className="mb-4 lg:text-3xl font-semibold text-gray-600">
          Zapomenuté heslo
        </h2>
        {/* error response */}
        <span className="text-red-600">{error && error.message}</span>
        {/* email input */}
        <InputField
          required={true}
          type="email"
          name="email"
          label="Email"
          prompt="Zadejte email"
          error={err.email}
          value={email}
          handleChange={handleChange}
        />
        {/* button forgot password */}
        <div className="w-full my-2">
          <button className="base_btn_form_primary w-full justify-center">
            Odeslat email
          </button>
        </div>
      </form>
    </>
  );
}

export default ForgotPasswordForm;
