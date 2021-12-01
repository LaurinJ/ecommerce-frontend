import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import CartContext from "../../context/CartContext";

function cart() {
  const { cart, totalPrice } = useContext(CartContext);
  const product = { price: 123, old_price: 555 };
  return (
    <div className="mx-auto max-w-[1280px] px-2">
      <div className="p-4 shadow-xl">
        <h3 className="my-7 text-2xl font-bold leading-5 lg:text-[1.625rem]">
          Máte vybrané tyto produkty:
        </h3>
        <hr className="my-8 text-gray-300" />
        {/* container products */}
        <div>
          {/* single basket product */}
          {cart.length ? (
            cart.map((product, i) => {
              return (
                <div>
                  <div className="flex flex-wrap justify-between">
                    {/* image section */}
                    <div className="w-20 sm:w-[7.5rem] sm:h-[5.6rem] mr-5 mb-5 h-auto">
                      <Image
                        src={`${process.env.IMG_LINK}${product.img}`}
                        width={140}
                        height={185}
                        layout="responsive"
                      />
                    </div>
                    {/* description section */}
                    <div className="cartitem_product_info mb-5">
                      <h4 className="mb-2 sm:text-lg font-semibold">
                        {product.title}
                      </h4>
                      <div className="my-4 text-sm sm:text-base text-gray-600">
                        <span>{product.description}</span>
                      </div>
                    </div>
                    {/* amount section */}
                    <div className="sm:order-4 lg:order-3 sm:ml-40 lg:ml-5">
                      <div className="h-14 p-[10px] inline-block border border-gray-300 rounded-md text-2xl leading-6">
                        <button className="w-6">-</button>
                        <input
                          className="w-12 text-center"
                          value={product.count}
                          onChange={() => {
                            console.log("change amount");
                          }}
                        />
                        <button className="w-6">+</button>
                      </div>
                    </div>
                    {/* price section */}
                    <div className="sm:order-3 lg:order-4 flex text-[0.625rem] sm:text-xs font-medium text-gray-800 text-right">
                      <div className="lg:w-[6.25rem]">
                        Cena/Ks{" "}
                        <div className="flex flex-col my-[10px]">
                          <div className="text-sm text-red-500">
                            <del>
                              {product.price < product.old_price
                                ? product.old_price + " Kč"
                                : ""}
                            </del>
                          </div>
                          <div>
                            <span className="sm:text-lg font-bold">
                              {product.price} Kč
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="ml-5 lg:w-[6.25rem]">
                        Celkem{" "}
                        <div className="flex flex-col my-[10px]">
                          <div>
                            <span className="sm:text-lg font-bold">
                              {product.price * product.count} Kč
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* information section */}
                  <div className="sm:ml-40 lg:ml-36 my-4 flex text-green-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-7"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      />
                    </svg>
                    Během 3 pracovních dní
                  </div>
                  {/* delete product section */}
                  <div className="sm:ml-40 lg:ml-36">
                    <button className="flex font-normal lg:text-lg text-blue-600">
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      Odstranit
                    </button>
                  </div>
                  <hr className="mt-8 pb-8 text-gray-300" />
                </div>
              );
            })
          ) : (
            <h2 className="text-xl text-center">Tvůj košík je prázdný</h2>
          )}
        </div>
        {/* summary section */}
        {cart.length ? (
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
                <div>0 Kč</div>
              </div>
              <hr className="my-2 text-gray-300" />
            </div>
            <div className="mb-3">
              <div className="flex justify-between">
                <div className="mb-3 font-bold">Celkem</div>
                <div className="mt-2 text-3xl font-black">
                  {totalPrice} Kč
                  <div className="text-right pt-2 text-sm font-normal">
                    včetně DPH
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {/* button section */}
      <div className="flex flex-col md:flex-row md:justify-end w-full my-8">
        <Link href="/products">
          <a className="base_btn_form md:mr-4 mb-4 md:mb-0 justify-center">
            ZPĚT K NÁKUPU
          </a>
        </Link>
        {cart.length ? (
          <Link href="/checkout/address">
            <a className="base_btn_form_primary justify-center">
              OBJEDNAT NYNÍ
            </a>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default cart;
