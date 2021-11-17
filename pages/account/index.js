import React from "react";
import Link from "next/link";
import AccountNavbar from "../../components/account/AccountNavbar";

function index() {
  return (
    <div className="mx-auto max-w-[1430px] sm:px-5">
      <div className="p-8">
        <h2 className="text-2xl font-bold">Můj účet</h2>
        <div className="flex flex-wrap justify-between">
          <AccountNavbar />
          <div className="bg-red-600 w-3/4">obsah</div>
        </div>
      </div>
    </div>
  );
}

export default index;
