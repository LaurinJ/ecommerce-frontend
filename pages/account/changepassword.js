import React from "react";
import Link from "next/link";
import { getLayout } from "../../components/account/AccountLayout";

function changepassword() {
  return (
    <div className="mx-auto max-w-[450px] p-4">
      <div className="p-8  lg:text-lg">
        <h2 className="mb-4 lg:text-3xl font-semibold text-gray-600">
          Změna hesla
        </h2>
        {/* email input */}
        <div className="form_input w-full my-4">
          <div className="mb-2 text-base font-semibold text-gray-700 xl:text-lg">
            <label htmlFor="old_password">Staré heslo</label>
          </div>
          <div>
            <input
              id="old_password"
              type="password"
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
        {/* password input */}
        <div className="form_input w-full my-4">
          <div className="mb-2 text-base font-semibold text-gray-700 xl:text-lg">
            <label htmlFor="password">Heslo</label>
          </div>
          <div>
            <input id="password" type="password" className="base_input_form" />
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
        <div className="form_input w-full my-4">
          <div className="mb-2 text-base font-semibold text-gray-700 xl:text-lg">
            <label htmlFor="confirm_password">Potvrzení hesla</label>
          </div>
          <div>
            <input
              id="confirm_password"
              type="password"
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
        {/* button login */}
        <div className="w-full my-2">
          <Link href="/checkout/payment">
            <a className="base_btn_form_primary w-full justify-center">
              ZMĚNIT HESLO
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

changepassword.getLayout = getLayout;

export default changepassword;
