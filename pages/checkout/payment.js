import React from "react";
import Link from "next/link";
import OrderProgressBar from "../../components/OrderProgressBar";
import InputCheck from "../../components/form/InputCheck";
import { box, paypal } from "../../icons/icons";

function payment() {
  return (
    <div className="mx-auto max-w-[900px]">
      <OrderProgressBar state={2} />

      {/* adress form */}
      <div className=" w-full">
        <form>
          <div className="p-4 shadow-md">
            <h3 className="my-7 leading-5 font-bold lg:text-2xl">
              Zvolte způsob platby:
            </h3>
            <div className="w-full">
              {/* delivery method */}
              <div className="flex flex-col w-full space-y-6">
                <InputCheck
                  type="radio"
                  name="deliver"
                  label="Doručení na adresu - PPL"
                  value="ppl"
                  img="https://cdn.iconscout.com/icon/free/png-256/paypal-52-675725.png"
                  checked={true}
                  // handleChange={handleChange}
                />
                <label className="flex justify-between items-center radio w-full px-10 py-1 mb-3 sm:mb-0 leading-9 border border-primary bg-lg_blue xl:text-[22px]">
                  <input type="radio" value="ppl" name="deliver" />
                  Dobírka
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
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span></span>
                </label>
                <label className="flex justify-between items-center radio w-full px-10 py-1 leading-9 border border-primary  xl:text-[22px]">
                  <input type="radio" value="dhl" name="deliver" />
                  Platební karta
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                  <span></span>
                </label>
              </div>
            </div>
          </div>
          {/* button section */}
          <div className="flex flex-col md:flex-row md:justify-end w-full my-8">
            <Link href="/checkout/address">
              <a className="base_btn_form md:mr-4 mb-4 md:mb-0 justify-center">
                ZPĚT K ADRESE
              </a>
            </Link>
            <Link href="/checkout/summary">
              <a className="base_btn_form_primary justify-center">
                POKRAČOVAT NA SHRNUTÍ OBJEDNÁVKY
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default payment;
