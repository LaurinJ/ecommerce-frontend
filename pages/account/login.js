import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import InputField from "../../components/form/InputField";
import { LOGIN_MUTATION } from "../../queries/Mutation";
import { authenticate } from "../../actions/auth";
import { useNotification } from "../../context/NotificationProvider";

function login() {
  const dispatch = useNotification();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [err, setErr] = useState({});
  const [login, { data, loading, error }] = useMutation(LOGIN_MUTATION);

  useEffect(() => {
    if (data) {
      authenticate(data.login, () => {
        dispatch({
          type: "SUCCESS",
          message: "Přihlášení bylo úspěšné",
          title: "Successful Request",
        });
        Router.push(`/account`);
      });
    }
  }, [data]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errors = validate(formValues);
      setErr(errors);
      if (Object.keys(errors).length === 0) {
        await login({
          variables: { user: { ...formValues } },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Toto pole je povinné";
    } else if (!regex.test(values.email)) {
      errors.email = "Email je ve špatném formátu";
    }
    if (!values.password) {
      errors.password = "Toto pole je povinné";
    }
    return errors;
  };

  return (
    <div className="mx-auto max-w-[450px] p-4">
      <form className="p-8 shadow-xl lg:text-lg" onSubmit={handleSubmit}>
        <h2 className="mb-4 lg:text-3xl font-semibold text-gray-600">
          Přihlášení do účtu
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
          value={formValues.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <InputField
          required={true}
          type="password"
          name="password"
          label="Heslo"
          prompt="Zadejte heslo"
          error={err.password}
          value={formValues.password}
          handleChange={handleChange}
        />
        {/* button login */}
        <div className="w-full my-2">
          <button className="base_btn_form_primary w-full justify-center">
            PŘIHLÁSIT
          </button>
        </div>
        <div className="relative">
          <hr className="mt-6 mb-4 border-gray-300" />
          <span className="absolute top-[-14px] left-36 bg-white px-2 ">
            Nebo
          </span>
        </div>
        {/* google and facebook */}
        <div className="flex justify-center space-x-3">
          <div className="w-14 h-14 flex items-center justify-center">
            <img
              className="hover:w-14 hover:h-14 cursor-pointer"
              src="https://img.icons8.com/color-glass/48/000000/google-logo.png"
            />
          </div>
          <div className="w-14 h-14 flex items-center justify-center">
            <img
              className="hover:w-14 hover:h-14 cursor-pointer"
              src="https://img.icons8.com/color/48/000000/facebook.png"
            />
          </div>
        </div>
        <hr className="my-4 border-gray-300" />
        <span className="w-full block text-base text-center">
          Ještě nemáte účet?{" "}
          <Link href="/account/register">
            <a className="text-primary">Registrovat se</a>
          </Link>
        </span>
      </form>
    </div>
  );
}

export default login;
