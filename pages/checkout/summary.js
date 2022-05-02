import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import CartContext from "../../context/CartContext";
import OrderProgressBar from "../../components/OrderProgressBar";
import CartCheckoutProduct from "../../components/CartCheckoutProduct";
import Modal from "../../components/Modal";
import { FINISH_ORDER } from "../../queries/Mutation";
import { getLocalStorage, removeLocalStorage } from "../../actions/auth";
import AddressFormModal from "../../components/form/AddressFormModal";
import PaymentFormModal from "../../components/form/PaymentFormModal";
import { useNotification } from "../../context/NotificationProvider";

function summary() {
  const { cart, totalPrice, delivery, payment, removeAll } =
    useContext(CartContext);
  const dispatch = useNotification();
  const [addressModal, setAddressModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    first_name: "",
    last_name: "",
    postCode: 0,
    village: "",
    street: "",
    numberDescriptive: 0,
    phone: 0,
  });

  const [finishOrder] = useMutation(FINISH_ORDER, {
    onCompleted: (data) => {
      // del all token, address and cart
      removeAll();
      removeLocalStorage("order_token");
      removeLocalStorage("address");

      Router.push({
        pathname: "/checkout/pay-for-it",
        query: {
          order: data.finishOrder.orderNumber,
          payment: data.finishOrder.payment_method.name,
        },
      });
    },
  });

  useEffect(() => {
    const address = getLocalStorage("address");
    address ? setFormValues(address) : Router.push("/checkout/address");
  }, [addressModal]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const token = getLocalStorage("order_token");
      !token ? Router.push("/checkout/address") : null;
      await finishOrder({
        variables: {
          order: {
            items: cart,
            total_price: totalPrice + delivery.price,
          },
          token: { token: token },
        },
      });
    } catch (error) {
      console.log(error);
      // setErr(error.graphQLErrors[0].extensions.errors);
    }
  };

  return (
    <>
      <div className="absolute top-3/4 w-full z-30">
        <Modal showModal={addressModal} setShowModal={setAddressModal}>
          <AddressFormModal setShowModal={setAddressModal} />
        </Modal>
      </div>
      <div className="absolute top-2/4 w-full z-30">
        <Modal showModal={paymentModal} setShowModal={setPaymentModal}>
          <PaymentFormModal setShowModal={setPaymentModal} />
        </Modal>
      </div>
      <div className="mx-auto max-w-[900px]">
        <OrderProgressBar state={3} />

        {/* adress form */}
        <div className=" w-full">
          {/* form */}
          <div>
            <div className="p-4 shadow-md">
              <h4 className="my-7 leading-5 font-bold lg:text-xl">
                Zkontrolujte a odešlete objednávku
              </h4>
              <h5 className="my-7 leading-5 font-bold lg:text-lg">
                Fakturační údaje
              </h5>
              <div className="flex flex-col md:flex-row space-y-3 md:space-y-0  md:justify-between w-full">
                <a
                  href="#"
                  className="flex flex-col h-[9.5rem] w-full md:w-[32%] p-4 text-gray-600 border hover:border-primary hover:bg-lg_blue cursor-pointer"
                  onClick={() => {
                    setAddressModal(!addressModal);
                  }}
                >
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
                  <span>
                    {formValues.first_name} {formValues.last_name}
                    <br />
                    {formValues.street} {formValues.numberDescriptive}
                    <br />
                    {formValues.postCode} {formValues.village}
                    <br />
                    Česká republika
                  </span>
                </a>
                <a
                  href="#"
                  className=" flex flex-col h-[9.5rem] w-full md:w-[32%] p-4 text-gray-600 border hover:border-primary hover:bg-lg_blue"
                  onClick={() => {
                    setAddressModal(!addressModal);
                  }}
                >
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
                  <span>
                    {formValues.first_name} {formValues.last_name}
                    <br />
                    {formValues.street} {formValues.numberDescriptive}
                    <br />
                    {formValues.postCode} {formValues.village}
                    <br />
                    Česká republika
                  </span>
                </a>
                <a
                  href="#"
                  className="flex flex-col h-[9.5rem] w-full md:w-[32%] p-4 text-gray-600 border hover:border-primary hover:bg-lg_blue"
                  onClick={() => {
                    setPaymentModal(!paymentModal);
                  }}
                >
                  <span className="flex justify-between xl:text-lg font-semibold">
                    ZPŮSOB PLATBY{" "}
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
                  <span>{payment.name}</span>
                  <span className="flex justify-between xl:text-lg font-semibold mt-4">
                    ZPŮSOB DOPRAVY{" "}
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
                  <span>{delivery.name}</span>
                </a>
              </div>
            </div>

            {/* cart section */}
            <div className="p-4 mt-5 shadow-xl">
              <h3 className="my-7 text-2xl font-bold leading-5 lg:text-[1.625rem]">
                Máte vybrané tyto produkty:
              </h3>
              <hr className="my-8 text-gray-300" />
              {/* container products */}
              <div>
                {/* single product */}
                {cart.length ? (
                  cart.map((product, i) => {
                    return (
                      <CartCheckoutProduct key={i} product={product} i={i} />
                    );
                  })
                ) : (
                  <h2 className="text-xl text-center">Tvůj košík je prázdný</h2>
                )}
              </div>
              {/* summary section */}
              <div className="lg:text-lg text-gray-600">
                <div className="mb-3">
                  <div className="flex justify-between">
                    <div className="mb-3">Mezisoučet</div>
                    <div>{totalPrice} Kč</div>
                  </div>
                  <hr className="my-2 text-gray-300" />
                </div>
                <div className="mb-3">
                  <div className="flex justify-between">
                    <div className="mb-3">Přepravní náklady</div>
                    <div>{delivery.price} Kč</div>
                  </div>
                  <hr className="my-2 text-gray-300" />
                </div>
                <div className="mb-3">
                  <div className="flex justify-between">
                    <div className="mb-3 font-bold">Celkem</div>
                    <div className="mt-2 text-3xl font-black">
                      {totalPrice + delivery.price} Kč
                      <div className="text-right pt-2 text-sm font-normal">
                        včetně DPH
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* button section */}
            <div className="flex flex-col md:flex-row md:justify-end w-full my-8">
              <Link href="/checkout/payment">
                <a className="base_btn_form md:mr-4 mb-4 md:mb-0 justify-center">
                  ZPĚT K PLATBĚ
                </a>
              </Link>
              <button
                className="base_btn_form_primary justify-center"
                onClick={handleSubmit}
              >
                ODESLAT OBJEDNÁVKU
              </button>
            </div>
            {/* end form */}
          </div>
        </div>
      </div>
    </>
  );
}

export default summary;
