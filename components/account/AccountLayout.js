import React from "react";
import AccountNavbar from "../../components/account/AccountNavbar";

function AccountLayout({ children }) {
  return (
    <div className="mx-auto max-w-[1430px] sm:px-5">
      <div className="p-8">
        <h2 className="text-2xl font-bold">Můj účet</h2>
        <div className="flex flex-wrap justify-between space-y-4">
          <AccountNavbar />
          <div className="bg-gray-100 w-full lg:w-3/4">{children}</div>
        </div>
      </div>
    </div>
  );
}

export const getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>;
};

export default AccountLayout;
