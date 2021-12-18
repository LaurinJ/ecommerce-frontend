import React, { useContext } from "react";
import Link from "next/link";
import CartContext from "../../context/CartContext";
import CartCheckoutProduct from "../../components/CartCheckoutProduct";

function cart() {
  const { cart, totalPrice, deliveryPrice } = useContext(CartContext);
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
              return <CartCheckoutProduct key={i} product={product} i={i} />;
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
                <div>{deliveryPrice} Kč</div>
              </div>
              <hr className="my-2 text-gray-300" />
            </div>
            <div className="mb-3">
              <div className="flex justify-between">
                <div className="mb-3 font-bold">Celkem</div>
                <div className="mt-2 text-3xl font-black">
                  {totalPrice + deliveryPrice} Kč
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
