import React, { useState } from "react";
import Link from "next/link";
import InputField from "../../components/form/InputField";

function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setError({ ...error, [name]: true });
    } else {
      setError({ ...error, [name]: false });
    }
    console.log(error);
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="mx-auto max-w-[450px] p-4">
      <form className="p-8 shadow-xl lg:text-lg">
        <h2 className="mb-4 lg:text-3xl font-semibold text-gray-600">
          Přihlášení do účtu
        </h2>
        {/* email input */}
        <InputField
          required={true}
          type="email"
          name="email"
          label="Email"
          prompt="Zadejte email"
          error={error.email}
          value={email}
          handleChange={handleChange}
        />
        {/* <div className="form_input">
          <div className="mb-2 text-base font-semibold text-gray-700 xl:text-lg">
            <label htmlFor="email">E-mail</label>
          </div>
          <div>
            <input id="email" type="email" className="base_input_form" />
          </div>
          <div className="flex items-center mt-1 lg:text-base xl:text-lg text-red-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
            Toto pole je povinné
          </div>
        </div> */}
        {/* password input */}
        <InputField
          required={true}
          type="password"
          name="password"
          label="Heslo"
          prompt="Zadejte heslo"
          error={error.password}
          value={password}
          handleChange={handleChange}
        />
        {/* button login */}
        <div className="w-full my-2">
          <Link href="/checkout/payment">
            <a className="base_btn_form_primary w-full justify-center">
              PŘIHLÁSIT
            </a>
          </Link>
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
