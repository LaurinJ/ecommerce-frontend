import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import InputField from "../../components/form/InputField";
import { REGISTER_MUTATION } from "../../queries/Mutation";
import { authenticate } from "../../actions/auth";
import { useNotification } from "../../context/NotificationProvider";

function register() {
  const dispatch = useNotification();
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  });
  const [err, setErr] = useState({});
  const [register, { data, loading, error }] = useMutation(REGISTER_MUTATION);

  useEffect(() => {
    if (data) {
      authenticate(data.createUser, () => {
        dispatch({
          type: "SUCCESS",
          message: "Registrace byla úspěšná",
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
      console.log(errors);
      setErr(errors);
      if (Object.keys(errors).length === 0) {
        await register({
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
    if (!values.name) {
      errors.name = "Toto pole je povinné";
    } else if (values.name.length < 4) {
      errors.name = "Jméno musí mít alespoň 4 znaky";
    }
    if (!values.email) {
      errors.email = "Toto pole je povinné";
    } else if (!regex.test(values.email)) {
      errors.email = "Email je ve špatném formátu";
    }
    if (!values.password) {
      errors.password = "Toto pole je povinné";
    }
    if (!values.confirm_password) {
      errors.confirm_password = "Toto pole je povinné";
    } else if (values.confirm_password !== values.password) {
      errors.password = "Hesla se neshodují";
      errors.confirm_password = "Hesla se neshodují";
    }
    return errors;
  };

  const printErr = (error) => {
    return error.graphQLErrors[0].extensions.errors.map((err, i) => {
      return (
        <span key={i} className="block">
          {err}
        </span>
      );
    });
  };

  return (
    <div className="mx-auto max-w-[450px] p-4">
      <form className="p-8 shadow-xl lg:text-lg" onSubmit={handleSubmit}>
        <h2 className="mb-4 lg:text-3xl font-semibold text-gray-600">
          Vytvořit účet
        </h2>
        <div className="text-red-600">{error && printErr(error)}</div>
        {/* name input */}
        <InputField
          required={true}
          type="text"
          name="name"
          label="Jméno"
          prompt="Zadejte jméno"
          min={4}
          error={err.name}
          value={formValues.name}
          handleChange={handleChange}
        />
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
            REGISTROVAT
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
          Už máte účet?{" "}
          <Link href="/account/login">
            <a className="text-primary">Přihlásit se</a>
          </Link>
        </span>
      </form>
    </div>
  );
}

export default register;
