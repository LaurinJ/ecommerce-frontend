import React from "react";
import Link from "next/link";
import OrderProgressBar from "../../components/OrderProgressBar";
import InputFieldBold from "../../components/form/InputFieldBold";
import InputField33 from "../../components/form/InputField33";
import InputField65 from "../../components/form/InputField65";
import InputFieldPhone from "../../components/form/InputFieldPhone";

function address() {
  return (
    <div className="mx-auto max-w-[900px]">
      <OrderProgressBar state={1} />

      {/* adress form */}
      <div className="w-full">
        <form>
          <div className="p-4 shadow-md">
            <h3 className="my-7 leading-5 font-bold lg:text-2xl">
              Doručení na adresu
            </h3>
            <div>
              <div className="w-full mb-4">
                {/* delivery method */}
                <div className="flex flex-wrap w-full justify-between">
                  <label className="flex justify-between items-center radio px-10 py-1 mb-3 sm:mb-0 leading-9 border border-primary bg-lg_blue xl:text-[22px]">
                    <input type="radio" value="ppl" name="deliver" />
                    Doručení na adresu - PPL
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span></span>
                  </label>
                  <label className="flex justify-between items-center radio px-10 py-1 leading-9 border border-primary  xl:text-[22px]">
                    <input type="radio" value="dhl" name="deliver" />
                    Doručení na adresu - DHL
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span></span>
                  </label>
                </div>
              </div>

              {/* first and last name */}
              <div className="flex flex-wrap justify-between">
                {/* input */}
                <InputFieldBold
                  required={true}
                  type="text"
                  name="name"
                  label="Jméno"
                  prompt="Zadejte Jméno"
                  // error={err.email}
                  // value={formValues.email}
                  // handleChange={handleChange}
                />
                {/* input lastname */}
                <InputFieldBold
                  required={true}
                  type="text"
                  name="lastname"
                  label="Přijmení"
                  prompt="Zadejte přijmení"
                  // error={err.email}
                  // value={formValues.email}
                  // handleChange={handleChange}
                />
              </div>

              {/* post code and village */}
              <div className="flex flex-wrap justify-between">
                {/* input psc */}
                <InputField33
                  required={true}
                  type="number"
                  name="post_code"
                  label="PSČ"
                  prompt="Zadejte PSČ"
                  // error={err.email}
                  // value={formValues.email}
                  // handleChange={handleChange}
                />
                {/* input obec */}
                <InputField65
                  required={true}
                  type="text"
                  name="village"
                  label="Obec"
                  prompt="Zadejte obec"
                  // error={err.email}
                  // value={formValues.email}
                  // handleChange={handleChange}
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
                  // error={err.email}
                  // value={formValues.email}
                  // handleChange={handleChange}
                />
                {/* input c. p. */}
                <InputField33
                  required={true}
                  type="number"
                  name="s_number"
                  label="Č. p."
                  prompt="Zadejte Č. p."
                  // error={err.email}
                  // value={formValues.email}
                  // handleChange={handleChange}
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
              // error={err.email}
              // value={formValues.email}
              // handleChange={handleChange}
            />
          </div>
          {/* button section */}
          <div className="flex flex-col md:flex-row md:justify-end w-full my-8">
            <a className="base_btn_form md:mr-4 mb-4 md:mb-0 justify-center">
              ZPĚT
            </a>
            <Link href="/checkout/payment">
              <a className="base_btn_form_primary justify-center">
                POKRAČOVAT K PLATBĚ
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default address;
