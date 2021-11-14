import React from "react";
import OrderProgressBar from "../../components/OrderProgressBar";

function address() {
  return (
    <div className="mx-auto max-w-[900px]">
      <OrderProgressBar state={1} />

      {/* adress form */}
      <div className=" w-full h-96">
        <form>
          <div className="p-4 shadow-md">
            <h3 className="my-7 leading-5 font-bold lg:text-2xl">
              Doručení na adresu
            </h3>
            <div>
              <div className="w-full">
                {/* delivery method */}
                <div className="flex flex-wrap w-full justify-between">
                  <label className="flex justify-between items-center radio px-10 py-1 mb-3 sm:mb-0 leading-9 border border-primary bg-lg_blue xl:text-[22px]">
                    <input type="radio" value="ppl" name="deliver" />
                    Doručení na adresu - PPL
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
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span></span>
                  </label>
                  <label className="flex justify-between items-center radio px-10 py-1 leading-9 border border-primary  xl:text-[22px]">
                    <input type="radio" value="dhl" name="deliver" />
                    Doručení na adresu - DHL
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
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                    <span></span>
                  </label>
                </div>
              </div>
              <div>
                <div className="flex flex-wrap">
                  <div className="form_input">
                    <div>label</div>
                    <div>input</div>
                    <div>validation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>button</div>
        </form>
      </div>
    </div>
  );
}

export default address;
