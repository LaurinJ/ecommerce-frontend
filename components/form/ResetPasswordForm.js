import React, { useState } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import InputField from "../../components/form/InputField";
import { RESET_PASSWORD } from "../../queries/Mutation";
import { useNotification } from "../../context/NotificationProvider";
import Loader from "../Loader";
import { passwordValidator } from "../../validators/passwordValidator";

function ResetPasswordForm({ email }) {
  const dispatch = useNotification();
  const [formValues, setFormValues] = useState({
    password: "",
    confirm_password: "",
  });
  const [err, setErr] = useState({});
  const [resetPassword, { loading, error }] = useMutation(RESET_PASSWORD, {
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      setFormValues({});
      dispatch({
        type: "SUCCESS",
        message: data.resetPassword.message,
        title: "Successful Request",
      });
      Router.push(`/account/login`);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errors = passwordValidator(formValues);
      setErr(errors);
      if (Object.keys(errors).length === 0) {
        await resetPassword({
          variables: {
            passwords: {
              password: formValues.password,
              confirm_password: formValues.confirm_password,
            },
            email: email,
          },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto max-w-[410px] m-4 relative">
      {loading && <Loader />}
      <form className="p-8 shadow-xl lg:text-lg" onSubmit={handleSubmit}>
        <h2 className="mb-4 lg:text-3xl font-semibold text-gray-600">
          Změna hesla
        </h2>
        {/* error response */}
        <span className="text-red-600">{error && error.message}</span>
        {/*new password input */}
        <InputField
          required={true}
          type="password"
          name="password"
          label="Nové heslo"
          prompt="Zadejte nové heslo"
          error={err.password}
          value={formValues.password}
          handleChange={handleChange}
        />
        {/* confirm password input */}
        <InputField
          required={true}
          type="password"
          name="confirm_password"
          label="Potvrzení hesla"
          prompt="Potvrzení hesla"
          error={err.confirm_password}
          value={formValues.confirm_password}
          handleChange={handleChange}
        />
        {/* button login */}
        <div className="w-full my-2">
          <button className="base_btn_form_primary w-full justify-center">
            Změnit heslo
          </button>
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordForm;
