import React from "react";
import OrderProgressBar from "../../components/OrderProgressBar";
import PaymentForm from "../../components/form/PaymentForm";

function payment() {
  return (
    <div className="mx-auto max-w-[900px]">
      <OrderProgressBar state={2} />

      {/* payment and delivery form */}
      <PaymentForm />
    </div>
  );
}

export default payment;
