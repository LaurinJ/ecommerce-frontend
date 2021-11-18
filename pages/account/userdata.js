import React from "react";
import Link from "next/link";
import AccountNavbar from "../../components/account/AccountNavbar";
import { getLayout } from "../../components/account/AccountLayout";

function userdata() {
  return (
    <>
      <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:justify-around w-full">
        <div className="flex flex-col h-[9.5rem] w-full md:w-[32%] p-4 text-gray-600 border hover:border-primary hover:bg-lg_blue">
          <span className="flex justify-between xl:text-lg font-semibold">
            FAKTURAČNÍ ADRESA{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </span>
          <span className="">
            Bob Kopal
            <br />
            Doubí 46
            <br />
            46345 Doubí
            <br />
            Česká republika
          </span>
        </div>
        <div className="flex flex-col h-[9.5rem] w-full md:w-[32%] p-4 text-gray-600 border hover:border-primary hover:bg-lg_blue">
          <span className="flex justify-between xl:text-lg font-semibold">
            DORUČOVACÍ ADRESA{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </span>
          <span className="">
            Bob Kopal
            <br />
            Doubí 46
            <br />
            46345 Doubí
            <br />
            Česká republika
          </span>
        </div>
      </div>
      {/* button section */}
      <div className="flex flex-col md:flex-row md:justify-end w-full my-8">
        <Link href="/account/changeaddress">
          <a className="base_btn_form_primary justify-center">ZMĚNIT ÚDAJE</a>
        </Link>
      </div>
    </>
  );
}

userdata.getLayout = getLayout;

export default userdata;
