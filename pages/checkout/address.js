import React from "react";
import Router from "next/router";
import AddressForm from "../../components/form/AddressForm";
import OrderProgressBar from "../../components/OrderProgressBar";

function address() {
  return (
    <div className="mx-auto max-w-[900px]">
      <OrderProgressBar state={1} />

      {/* adress form */}
      <AddressForm />
    </div>
  );
}

export default address;
