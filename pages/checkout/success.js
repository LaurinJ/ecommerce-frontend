import React from "react";
import Link from "next/link";

function success() {
  return (
    <div className="w-full h-screen mx-auto max-w-[1430px] lg:px-[30px] relative">
      <div className="flex flex-col py-4 items-center space-y-3">
        <h2 className="text-center text-2xl font-medium">
          Děkujeme za vaši objednávku
        </h2>
        <span className="block text-center">
          O průběhu stavu Vaší objednávky i konečném odeslání zásilky budete
          informováni e-mailem.
        </span>
        <Link href="/">
          <a className="base_btn_form_primary block">Zpět do obchodu</a>
        </Link>
      </div>
    </div>
  );
  return <div>success</div>;
}

export default success;
