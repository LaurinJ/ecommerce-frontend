import React from "react";
import OrderProgressBar from "../../components/OrderProgressBar";

function address() {
  return (
    <div className="mx-auto max-w-[900px]">
      <OrderProgressBar state={1} />

      {/* adress form */}
      <div className=" w-full">
        <form>
          <div className="p-4 shadow-md">
            <h3 className="my-7 leading-5 font-bold lg:text-2xl">
              Doručení na adresu
            </h3>
            <div>
              <div className="w-full">
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
                <div className="form_input my-4">
                  <div className="mb-2 text-base font-bold text-gray-700 xl:text-xl">
                    <label htmlFor="name">Jméno</label>
                  </div>
                  <div>
                    <input id="name" type="text" className="base_input_form" />
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
                </div>
                {/* input */}
                <div className="form_input my-4">
                  <div className="mb-2 text-base font-bold text-gray-700 xl:text-xl">
                    <label htmlFor="last_name">Přijmení</label>
                  </div>
                  <div>
                    <input
                      id="last_name"
                      type="text"
                      className="base_input_form"
                    />
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
                </div>
              </div>

              {/* post code and village */}
              <div className="flex flex-wrap justify-between">
                {/* input */}
                <div className="form_input sm:w-1/3 my-4">
                  <div className="mb-2 text-base font-bold text-gray-700 xl:text-xl">
                    <label htmlFor="post_code">PSČ</label>
                  </div>
                  <div>
                    <input
                      id="post_code"
                      type="number"
                      className="base_input_form"
                    />
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
                </div>
                {/* input */}
                <div className="form_input sm:w-[65%] my-4">
                  <div className="mb-2 text-base font-bold text-gray-700 xl:text-xl">
                    <label htmlFor="village">Obec</label>
                  </div>
                  <div>
                    <input
                      id="village"
                      type="text"
                      className="base_input_form"
                    />
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
                </div>
              </div>

              {/* street and descriptive number */}
              <div className="flex flex-wrap justify-between">
                {/* input */}
                <div className="form_input sm:w-[65%] my-4">
                  <div className="mb-2 text-base font-bold text-gray-700 xl:text-xl">
                    <label htmlFor="street">Ulice</label>
                  </div>
                  <div>
                    <input
                      id="street"
                      type="text"
                      className="base_input_form"
                    />
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
                </div>
                {/* input */}
                <div className="form_input sm:w-1/3 my-4">
                  <div className="mb-2 text-base font-bold text-gray-700 xl:text-xl">
                    <label htmlFor="s_number">Č. p.</label>
                  </div>
                  <div>
                    <input
                      id="s_number"
                      type="number"
                      className="base_input_form"
                    />
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
                </div>
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
            <div>
              <div className="text-base font-bold text-gray-700 xl:text-xl">
                <label htmlFor="phone_number_label">Telefonní číslo</label>
              </div>
              <div className="flex">
                {/* input */}
                <div className="form_input min-w-[9%] w-[10%] mt-2 mb-1">
                  <div>
                    <input
                      id="phone_number_label"
                      type="number"
                      className="base_input_form"
                      disabled
                      placeholder="+420"
                    />
                  </div>
                </div>
                {/* input */}
                <div className="form_input w-[90%] mt-2 mb-1">
                  <div>
                    <input
                      id="phone_number"
                      type="number"
                      className="base_input_form"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:text-base xl:text-lg text-red-600">
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
            </div>
          </div>
          <div>button</div>
        </form>
      </div>
    </div>
  );
}

export default address;
