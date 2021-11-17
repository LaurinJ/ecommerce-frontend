import React from "react";
import Link from "next/link";
import Image from "next/image";
import OrderProgressBar from "../../components/OrderProgressBar";

function summary() {
  const product = { price: 123, old_price: 555 };
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
                  Bob Kopal
                  <br />
                  Doubí 46
                  <br />
                  46345 Doubí
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
                  Bob Kopal
                  <br />
                  Doubí 46
                  <br />
                  46345 Doubí
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
                <span className="">Dobírka</span>
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
              <div>
                <div className="flex flex-wrap justify-between">
                  {/* image section */}
                  <div className="w-20 sm:w-[7.5rem] sm:h-[5.6rem] mr-5 mb-5 h-auto">
                    <Image
                      src="https://i.cdn.nrholding.net/50414342/235/240"
                      width={140}
                      height={185}
                      layout="responsive"
                    />
                  </div>
                  {/* description section */}
                  <div className="cartitem_product_info mb-5">
                    <h4 className="mb-2 sm:text-lg font-semibold">
                      PARKSIDE® Aku rázový utahovák na kola auta PASSK 20-Li A1
                    </h4>
                    <div className="my-4 text-sm sm:text-base text-gray-600">
                      <span>
                        Rychleschnoucí a odvádějící vlhkost | příjemně měkké a
                        hřejivé | extra teplé
                      </span>
                    </div>
                  </div>
                  {/* amount section */}
                  <div className="sm:order-4 lg:order-3 sm:ml-40 lg:ml-5">
                    <div className="h-14 p-[10px] inline-block border border-gray-300 rounded-md text-2xl leading-6">
                      <button className="w-6">-</button>
                      <input
                        className="w-12 text-center"
                        value={1}
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
                            {product.price} Kč
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
              {/* single basket product */}
              <div>
                <div className="flex flex-wrap justify-between">
                  {/* image section */}
                  <div className="w-20 sm:w-[7.5rem] sm:h-[5.6rem] mr-5 mb-5 h-auto">
                    <Image
                      src="https://i.cdn.nrholding.net/50414342/235/240"
                      width={140}
                      height={185}
                      layout="responsive"
                    />
                  </div>
                  {/* description section */}
                  <div className="cartitem_product_info mb-5">
                    <h4 className="mb-2 sm:text-lg font-semibold">
                      PARKSIDE® Aku rázový utahovák na kola auta PASSK 20-Li A1
                    </h4>
                    <div className="my-4 text-sm sm:text-base text-gray-600">
                      <span>
                        Rychleschnoucí a odvádějící vlhkost | příjemně měkké a
                        hřejivé | extra teplé
                      </span>
                    </div>
                  </div>
                  {/* amount section */}
                  <div className="sm:order-4 lg:order-3 sm:ml-36 lg:ml-5">
                    <div className="h-14 p-[10px] inline-block border border-gray-300 rounded-md text-2xl leading-6">
                      <button className="w-6">-</button>
                      <input
                        className="w-12 text-center"
                        value={1}
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
                            {product.price} Kč
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* information section */}
                <div className="sm:ml-36 lg:ml-28 my-4 flex text-green-600">
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
                <div className="sm:ml-36 lg:ml-28">
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
            </div>
            {/* summary section */}
            <div className="lg:text-lg text-gray-600">
              <div className="mb-3">
                <div className="flex justify-between">
                  <div className="mb-3">Mezisoučet</div>
                  <div>1885 Kč</div>
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
                    1885 Kč
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
