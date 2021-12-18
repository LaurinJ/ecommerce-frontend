import React, { useEffect, useState, useContext } from "react";
import Link from "next/link";
import { useQuery, useMutation } from "@apollo/client";
import OrderProgressBar from "../../components/OrderProgressBar";
import InputCheck from "../../components/form/InputCheck";
import CartContext from "../../context/CartContext";
import { CREATE_ORDER, PAYMENT_DELIVERY_METHODS } from "../../queries/Query";
import { getCookie, getLocalStorage } from "../../actions/auth";

function payment() {
  const { cart, totalPrice, itemCount, deliveryPrice, addDelivery } =
    useContext(CartContext);
  const { data, loading, error } = useQuery(PAYMENT_DELIVERY_METHODS);
  // const [order, { data, loading, error }] = useMutation(
  //   CREATE_ORDER
  // );
  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState("");

  const handleChange = (e, price) => {
    const { name, value } = e.target;
    if (name === "payment") {
      setPayment(value);
    }
    if (name === "delivery") {
      addDelivery(Number(price));
      setDelivery(value);
    }
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log("pay - ", payment, ", del - ", delivery);
      const token = getCookie("person_token");
      console.log(token);
      console.log(cart);
      console.log(totalPrice, itemCount, deliveryPrice);
      if (payment & delivery) {
        // await order({
        //   variables: {
        //     order: {
        //       email: formValues.email,
        //       first_name: formValues.first_name,
        //       last_name: formValues.last_name,
        //       phone: Number(formValues.phone),
        //     },
        //     token: {
        //       village: formValues.village,
        //       street: formValues.street,
        //       postCode: Number(formValues.postCode),
        //       numberDescriptive: Number(formValues.numberDescriptive),
        //     },
        //   },
        // });
      }
    } catch (error) {
      console.log(error);
      setErr(error.graphQLErrors[0].extensions.errors);
    }
  };

  return (
    <div className="mx-auto max-w-[900px]">
      <OrderProgressBar state={2} />

      {/* payment and delivery form */}
      <div className=" w-full">
        <form>
          <div className="p-4 shadow-md">
            <h3 className="my-7 leading-5 font-bold lg:text-2xl">
              Zvolte způsob platby:
            </h3>
            <div className="w-full">
              {/* payment method */}
              <div className="flex flex-col w-full space-y-6">
                {data
                  ? data.getPaymentMethod.map((payment) => {
                      return (
                        <InputCheck
                          key={payment._id}
                          type="radio"
                          name="payment"
                          label={payment.name}
                          value={payment._id}
                          img={payment.image}
                          handleChange={handleChange}
                        />
                      );
                    })
                  : "loading"}

                {/* <label className="flex justify-between items-center radio w-full px-10 py-1 leading-9 border border-primary  xl:text-[22px]">
                  <input type="radio" value="dhl" name="payment" />
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
                </label> */}
              </div>
            </div>
            <h3 className="my-7 leading-5 font-bold lg:text-2xl">
              Zvolte způsob dopravy:
            </h3>
            <div className="w-full">
              {/* delivery method */}
              <div className="flex flex-col w-full space-y-6">
                {data
                  ? data.getDeliverMethod.map((delivery) => {
                      return (
                        <InputCheck
                          key={delivery._id}
                          type="radio"
                          name="delivery"
                          label={`${delivery.name} - ${delivery.price} Kč`}
                          price={delivery.price}
                          value={delivery._id}
                          img={delivery.image}
                          handleChange={handleChange}
                        />
                      );
                    })
                  : "loading"}
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

            <button
              className="base_btn_form_primary justify-center"
              onClick={handleSubmit}
            >
              POKRAČOVAT NA SHRNUTÍ OBJEDNÁVKY
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default payment;
