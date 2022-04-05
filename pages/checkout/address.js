import React, { useEffect, useContext } from "react";
import Router from "next/router";
import AddressForm from "../../components/form/AddressForm";
import OrderProgressBar from "../../components/OrderProgressBar";
import CartContext from "../../context/CartContext";

function address() {
  const { cart } = useContext(CartContext);

  useEffect(() => {
    if (cart.length === 0) {
      Router.push("/checkout/cart");
    }
  }, []);

  return (
    <div className="mx-auto max-w-[900px]">
      <OrderProgressBar state={1} />

      {/* adress form */}
      <AddressForm />
    </div>
  );
}

export default address;
