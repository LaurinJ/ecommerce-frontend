import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useQuery, useMutation } from "@apollo/client";
import CartContext from "../../context/CartContext";
import InputCheck from "../form/InputCheck";
import { PAYMENT_DELIVERY_METHODS } from "../../queries/Query";
import { PAYMENT_DELIVERY_MUTATION } from "../../queries/Mutation";
import { getCookie } from "../../actions/auth";

function PaymentForm({ setShowModal }) {
  const { delivery, addDelivery, payment, addPayment } =
    useContext(CartContext);
  const { data } = useQuery(PAYMENT_DELIVERY_METHODS);
  const [payment_delivery] = useMutation(PAYMENT_DELIVERY_MUTATION, {
    onCompleted: () => {
      setShowModal(false);
    },
  });
  const [err, setErr] = useState("");

  const handleChange = (e, _name, price) => {
    const { name, value } = e.target;
    if (name === "payment") {
      addPayment(value, _name);
    }
    if (name === "delivery") {
      addDelivery(value, _name, Number(price));
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const token = getCookie("order_token");
      if (payment.id && delivery.id) {
        await payment_delivery({
          variables: {
            payment: {
              _id: payment.id,
            },
            delivery: {
              _id: delivery.id,
            },
            token: {
              token: token,
            },
          },
        });
      }
    } catch (error) {
      console.log(error);
      setErr(error.message);
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <div className="p-4 shadow-md">
          <span>{err}</span>
          <h3 className="my-7 leading-5 font-bold lg:text-2xl">
            Zvolte způsob platby:
          </h3>
          <div className="w-full">
            {/* payment method */}
            <div className="flex flex-col w-full space-y-6">
              {data
                ? data.getPaymentMethod.map((paymentM) => {
                    return (
                      <InputCheck
                        key={paymentM._id}
                        type="radio"
                        name="payment"
                        label={paymentM.name}
                        value={paymentM._id}
                        img={paymentM.image}
                        checked={paymentM._id === payment.id}
                        handleChange={handleChange}
                      />
                    );
                  })
                : "loading"}
            </div>
          </div>
          <h3 className="my-7 leading-5 font-bold lg:text-2xl">
            Zvolte způsob dopravy:
          </h3>
          <div className="w-full">
            {/* delivery method */}
            <div className="flex flex-col w-full space-y-6">
              {data
                ? data.getDeliveryMethod.map((deliveryM) => {
                    return (
                      <InputCheck
                        key={deliveryM._id}
                        type="radio"
                        name="delivery"
                        label={`${deliveryM.name} - ${deliveryM.price} Kč`}
                        price={deliveryM.price}
                        value={deliveryM._id}
                        img={deliveryM.image}
                        checked={deliveryM._id === delivery.id}
                        handleChange={handleChange}
                      />
                    );
                  })
                : "loading"}
            </div>
          </div>
        </div>
        {/* button section */}
        <div className="flex flex-col md:flex-row md:justify-end w-full my-8 pr-3">
          <button
            className="base_btn_form md:mr-4 mb-4 md:mb-0 justify-center"
            onClick={(e) => {
              e.preventDefault();
              setShowModal(false);
            }}
          >
            ZAVŘÍT
          </button>
          <button
            type="submit"
            className="base_btn_form_primary justify-center"
          >
            ULOŽIT
          </button>
        </div>
      </form>
    </div>
  );
}

export default PaymentForm;
