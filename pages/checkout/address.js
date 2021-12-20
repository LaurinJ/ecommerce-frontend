import React, { useState, useEffect } from "react";
import Link from "next/link";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { PERSON_ADDRESS_MUTATION } from "../../queries/Mutation";
import OrderProgressBar from "../../components/OrderProgressBar";
import InputFieldBold from "../../components/form/InputFieldBold";
import InputField33 from "../../components/form/InputField33";
import InputField65 from "../../components/form/InputField65";
import InputFieldPhone from "../../components/form/InputFieldPhone";
import InputCheck from "../../components/form/InputCheck";
import {
  setLocalStorage,
  getLocalStorage,
  setCookie,
} from "../../actions/auth";

function address() {
  const [formValues, setFormValues] = useState({
    deliver: "",
    email: "",
    first_name: "",
    last_name: "",
    postCode: 0,
    village: "",
    street: "",
    numberDescriptive: 0,
    phone: 0,
  });
  const [err, setErr] = useState({});
  const [address, { data, loading, error }] = useMutation(
    PERSON_ADDRESS_MUTATION,
    {
      onCompleted: (data) => {
        console.log("ok");
        console.log(data.personAdress.token);
        setCookie("person_token", data.personAdress.token);
        Router.push(`/checkout/payment`);
      },
    }
  );

  useEffect(() => {
    const address = getLocalStorage("address");
    address ? setFormValues(address) : null;
  }, []);

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
        setLocalStorage("address", formValues);

        await address({
          variables: {
            person: {
              email: formValues.email,
              first_name: formValues.first_name,
              last_name: formValues.last_name,
              phone: Number(formValues.phone),
            },
            address: {
              village: formValues.village,
              street: formValues.street,
              postCode: Number(formValues.postCode),
              numberDescriptive: Number(formValues.numberDescriptive),
            },
          },
        });
      }
    } catch (error) {
      console.log(error);
      setErr(error.graphQLErrors[0].extensions.errors);
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-zA-Z]+$/;
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Toto pole je povinné";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Email je ve špatném formátu";
    }
    if (!values.first_name) {
      errors.first_name = "Toto pole je povinné";
    } else if (!regex.test(values.first_name)) {
      errors.first_name = "Jméno je ve špatném formátu";
    }
    if (!values.last_name) {
      errors.last_name = "Toto pole je povinné";
    } else if (!regex.test(values.last_name)) {
      errors.last_name = "Přijmení je ve špatném formátu";
    }
    if (!values.postCode) {
      errors.postCode = "Toto pole je povinné";
    }
    if (!values.village) {
      errors.village = "Toto pole je povinné";
    }
    if (!values.street) {
      errors.street = "Toto pole je povinné";
    }
    if (!values.numberDescriptive) {
      errors.numberDescriptive = "Toto pole je povinné";
    }
    if (!values.phone) {
      errors.phone = "Toto pole je povinné";
    }
    return errors;
  };

  return (
    <div className="mx-auto max-w-[900px]">
      <OrderProgressBar state={1} />

      {/* adress form */}
      <div className="w-full">
        <form onSubmit={handleSubmit}>
          <div className="p-4 shadow-md">
            <h3 className="my-7 leading-5 font-bold lg:text-2xl">
              Doručení na adresu
            </h3>
            <div>
              <div className="w-full mb-4">
                {/* delivery method */}
                <div className="flex flex-wrap w-full justify-between">
                  <InputCheck
                    type="radio"
                    name="deliver"
                    label="Doručení na adresu - PPL"
                    value="ppl"
                    checked={true}
                    handleChange={handleChange}
                  />
                  <InputCheck
                    type="radio"
                    name="deliver"
                    label="Doručení na adresu - DHL"
                    value="dhl"
                    handleChange={handleChange}
                  />
                </div>
              </div>

              {/* first and last name */}
              <div className="flex flex-wrap justify-between">
                {/* input */}
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
                {/* input firstname */}
                <InputFieldBold
                  required={true}
                  type="text"
                  name="first_name"
                  label="Jméno"
                  prompt="Zadejte Jméno"
                  error={err.first_name}
                  value={formValues.first_name}
                  handleChange={handleChange}
                />
                {/* input lastname */}
                <InputFieldBold
                  required={true}
                  type="text"
                  name="last_name"
                  label="Přijmení"
                  prompt="Zadejte přijmení"
                  error={err.last_name}
                  value={formValues.last_name}
                  handleChange={handleChange}
                />
              </div>

              {/* post code and village */}
              <div className="flex flex-wrap justify-between">
                {/* input psc */}
                <InputField33
                  required={true}
                  type="number"
                  name="postCode"
                  label="PSČ"
                  prompt="Zadejte PSČ"
                  error={err.postCode}
                  value={formValues.postCode}
                  handleChange={handleChange}
                />
                {/* input obec */}
                <InputField65
                  required={true}
                  type="text"
                  name="village"
                  label="Obec"
                  prompt="Zadejte obec"
                  error={err.village}
                  value={formValues.village}
                  handleChange={handleChange}
                />
              </div>

              {/* street and descriptive number */}
              <div className="flex flex-wrap justify-between">
                {/* input street */}
                <InputField65
                  required={true}
                  type="text"
                  name="street"
                  label="Ulice"
                  prompt="Zadejte ulici"
                  error={err.street}
                  value={formValues.street}
                  handleChange={handleChange}
                />
                {/* input c. p. */}
                <InputField33
                  required={true}
                  type="number"
                  name="numberDescriptive"
                  label="Č. p."
                  prompt="Zadejte Č. p."
                  error={err.numberDescriptive}
                  value={formValues.numberDescriptive}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <h3 className="my-7 leading-5 font-bold lg:text-2xl">
              Fakturační adresa
            </h3>
            <div className="mb-4">
              <label htmlFor="deli_address" className="relative flex">
                <input
                  type="checkbox"
                  id="deli_address"
                  className="appearance-none h-6 w-6 border-2 border-gray-600 rounded-md mr-2"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 absolute left-[2px] top-[2px] text-opacity-0 text-primary check-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Fakturační a doručovací adresa jsou shodné
              </label>
            </div>
            {/* phone number */}
            <InputFieldPhone
              required={true}
              name="phone"
              label="Telefonní číslo"
              prompt="Zadejte telefonní číslo"
              error={err.phone}
              value={formValues.phone}
              handleChange={handleChange}
            />
          </div>
          {/* button section */}
          <div className="flex flex-col md:flex-row md:justify-end w-full my-8">
            <Link href="/checkout/cart">
              <a className="base_btn_form md:mr-4 mb-4 md:mb-0 justify-center">
                ZPĚT
              </a>
            </Link>
            <button className="base_btn_form_primary justify-center">
              POKRAČOVAT K PLATBĚ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default address;
