import React, { useState, useEffect, useContext } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ORDER } from "../../queries/Mutation";
import InputFieldBold from "../form/InputFieldBold";
import InputField33 from "../form/InputField33";
import InputField65 from "../form/InputField65";
import InputFieldPhone from "../form/InputFieldPhone";
import InputCheck from "../form/InputCheck";
import {
  setLocalStorage,
  getLocalStorage,
  setCookie,
  getCookie,
} from "../../actions/auth";
import { addressValid } from "../../validators/addressValidator";

function AddressFormModal({ setShowModal }) {
  const [token, setToken] = useState("");
  const [formValues, setFormValues] = useState({
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
  const [order, { data, loading, error }] = useMutation(CREATE_ORDER, {
    onCompleted: (data) => {
      setLocalStorage("order_token", data.createOrUpdateOrder.token);
      setShowModal(false);
    },
  });

  useEffect(() => {
    const address = getLocalStorage("address");
    address ? setFormValues(address) : null;
    const token = getLocalStorage("order_token");
    token ? setToken(token) : null;
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const errors = addressValid(formValues);
      setErr(errors);
      if (Object.keys(errors).length === 0) {
        setLocalStorage("address", formValues);

        await order({
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
            token: { token: token },
          },
        });
      }
    } catch (error) {
      console.log(error);
      setErr(error.graphQLErrors[0].extensions.errors);
    }
  };

  return (
    <div className=" max-w-[500px]">
      <form onSubmit={handleSubmit}>
        <div className="p-4 shadow-md">
          <h3 className="my-7 leading-5 font-bold lg:text-2xl">
            Doru??en?? na adresu
          </h3>
          <div>
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
                label="Jm??no"
                prompt="Zadejte Jm??no"
                error={err.first_name}
                value={formValues.first_name}
                handleChange={handleChange}
              />
              {/* input lastname */}
              <InputFieldBold
                required={true}
                type="text"
                name="last_name"
                label="P??ijmen??"
                prompt="Zadejte p??ijmen??"
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
                label="PS??"
                prompt="Zadejte PS??"
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
                label="??. p."
                prompt="Zadejte ??. p."
                error={err.numberDescriptive}
                value={formValues.numberDescriptive}
                handleChange={handleChange}
              />
            </div>
          </div>
          <h3 className="my-7 leading-5 font-bold lg:text-2xl">
            Faktura??n?? adresa
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
              Faktura??n?? a doru??ovac?? adresa jsou shodn??
            </label>
          </div>
          {/* phone number */}
          <InputFieldPhone
            required={true}
            name="phone"
            label="Telefonn?? ????slo"
            prompt="Zadejte telefonn?? ????slo"
            error={err.phone}
            value={formValues.phone}
            handleChange={handleChange}
          />
        </div>
        {/* button section */}
        <div className="flex flex-col md:flex-row md:justify-between w-full py-3 md:pr-3">
          <button
            className="base_btn_form mx-4 mb-4 md:mb-0 justify-center"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(false);
            }}
          >
            ZAV????T
          </button>
          <button
            type="submit"
            className="base_btn_form_primary mx-4 justify-center"
          >
            ULO??IT
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddressFormModal;
