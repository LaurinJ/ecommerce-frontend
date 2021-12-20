import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { useQuery, useMutation } from "@apollo/client";
import OrderProgressBar from "../../components/OrderProgressBar";
import CartCheckoutProduct from "../../components/CartCheckoutProduct";
import { GET_ORDER } from "../../queries/Query";
import { getCookie } from "../../actions/auth";

function summary() {
  // const { delivery, paymentId } = useContext(CartContext);
  const orderToken = getCookie("order_token");
  const { data, loading } = useQuery(GET_ORDER, {
    variables: { token: { token: orderToken } },
  });
  const product = { price: 123, old_price: 555 };
  if (data) {
    const order = { ...data.getOrder };
    console.log(order);
  }
  if (loading) {
    return <span>loading.....</span>;
  }
  return (
    <div className="mx-auto max-w-[900px]">
      <OrderProgressBar state={3} />

      {/* adress form */}
      <div className=" w-full">
        <form>
          <div className="p-4 shadow-md">
            <h4 className="my-7 leading-5 font-bold lg:text-xl">
              Zkontrolujte a odešlete objednávku
            </h4>
            <h5 className="my-7 leading-5 font-bold lg:text-lg">
              Fakturační údaje
            </h5>
            <div className="flex flex-col md:flex-row space-y-3 md:space-y-0  md:justify-between w-full">
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
                  {order.person.person_detail.first_name}{" "}
                  {order.person.person_detail.last_name}
                  <br />
                  {order.person.address.street}{" "}
                  {order.person.address.numberDescriptive}
                  <br />
                  {order.person.address.postCode} {order.person.address.village}
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
                  {order.person.person_detail.first_name}{" "}
                  {order.person.person_detail.last_name}
                  <br />
                  {order.person.address.street}{" "}
                  {order.person.address.numberDescriptive}
                  <br />
                  {order.person.address.postCode} {order.person.address.village}
                  <br />
                  Česká republika
                </span>
              </div>
              <div className="flex flex-col h-[9.5rem] w-full md:w-[32%] p-4 text-gray-600 border hover:border-primary hover:bg-lg_blue">
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
                <span className="">{order.order.payment_method.name}</span>
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
                <span className="">
                  {order.order.deliver_method.name} -{" "}
                  {order.order.deliver_method.price} Kč
                </span>
              </div>
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
              {/* single basket product */}
              {order.order.items.length ? (
                order.order.items.map((product, i) => {
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
                  <div>{order.order.total_price} Kč</div>
                </div>
                <hr className="my-2 text-gray-300" />
              </div>
              <div className="mb-3">
                <div className="flex justify-between">
                  <div className="mb-3">Přepravní náklady</div>
                  <div>{order.order.deliver_method.price} Kč</div>
                </div>
                <hr className="my-2 text-gray-300" />
              </div>
              <div className="mb-3">
                <div className="flex justify-between">
                  <div className="mb-3 font-bold">Celkem</div>
                  <div className="mt-2 text-3xl font-black">
                    {order.order.total_price + order.order.deliver_method.price}{" "}
                    Kč
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
            <Link href="/checkout/address">
              <a className="base_btn_form md:mr-4 mb-4 md:mb-0 justify-center">
                ZPĚT K PLATBĚ
              </a>
            </Link>
            <Link href="/checkout/payment">
              <a className="base_btn_form_primary justify-center">
                ODESLAT OBJEDNÁVKU
              </a>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default summary;
