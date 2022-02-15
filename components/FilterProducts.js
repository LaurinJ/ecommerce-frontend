import React, { useState } from "react";
import PriceRangeInput from "./form/PriceRangeInput";

function FilterProducts() {
  return (
    <div className=" bg-gray-100">
      <div className="shadow-2xl">
        <aside className="w-full lg:pt-1 -mt-9 lg:mt-0">
          {/* <h3 className="py-3 px-5 bg-blue-500 text-white font-bold">Filtr</h3> */}
          {/* <div className="mx-4 my-4"> */}
          <PriceRangeInput />
          {/* </div> */}
          <hr />
          <div className="mx-4 my-4">
            <h5 className="ml-1 text-xl font-bold">Cena</h5>
            <div className="flex justify-center pt-4 items-center">
              <div
                x-data="range()"
                x-init="mintrigger(); maxtrigger()"
                className="relative max-w-lg w-full"
              >
                <div>
                  <input
                    type="range"
                    step="100"
                    // x-bind:min="min"
                    // x-bind:max="max"
                    // x-on:input="mintrigger"
                    x-model="minprice"
                    className="
                        absolute
                        pointer-events-none
                        appearance-none
                        z-20
                        h-2
                        w-full
                        opacity-0
                        cursor-pointer
                      "
                  />

                  <input
                    type="range"
                    step="100"
                    // x-bind:min="min"
                    // x-bind:max="max"
                    // x-on:input="maxtrigger"
                    x-model="maxprice"
                    className="
                        absolute
                        pointer-events-none
                        appearance-none
                        z-20
                        h-2
                        w-full
                        opacity-0
                        cursor-pointer
                      "
                  />

                  <div className="relative z-10 h-2">
                    <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

                    <div
                      className="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
                      // x-bind:style="'right:'+maxthumb+'%; left:'+minthumb+'%'"
                    ></div>

                    <div
                      className="
                          absolute
                          z-30
                          w-6
                          h-6
                          top-0
                          left-0
                          bg-green-300
                          rounded-full
                          -mt-2
                          -ml-1
                        "
                      // x-bind:style="'left: '+minthumb+'%'"
                    ></div>

                    <div
                      className="
                          absolute
                          z-30
                          w-6
                          h-6
                          top-0
                          right-0
                          bg-green-300
                          rounded-full
                          -mt-2
                          -mr-3
                        "
                      // x-bind:style="'right: '+maxthumb+'%'"
                    ></div>
                  </div>
                </div>

                <div className="flex justify-between items-center py-5">
                  <div>
                    <input
                      type="text"
                      maxLength="5"
                      // x-on:input="mintrigger"
                      x-model="minprice"
                      className="px-3 py-2 border border-gray-200 rounded w-20 text-center"
                    />
                  </div>
                  Kč -
                  <div>
                    <input
                      type="text"
                      maxLength="5"
                      // x-on:input="maxtrigger"
                      x-model="maxprice"
                      className="px-3 py-2 border border-gray-200 rounded w-20 text-center"
                    />
                  </div>
                  Kč
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default FilterProducts;
