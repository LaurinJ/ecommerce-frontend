import React, { useContext } from "react";
import AppContext from "../context/AppContext";

function FilterProducts() {
  const context = useContext(AppContext);
  return (
    <div
      class={`xl:w-1/4 lg:w-1/3 px-3 relative ${
        context.filter ? "z-10 top-12 lg:top-0" : "hidden"
      }`}
    >
      <div class="filter_box1 absolute bg-gray-100">
        <div className="mr-2 pt-2" onClick={() => context.setFilter(!context.filter)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-auto text-red-600 lg:hidden"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <aside class="w-full lg:pt-1 -mt-9 lg:mt-0">
          {/* <h3 class="py-3 px-5 bg-blue-500 text-white font-bold">Filtr</h3> */}
          <div class="mx-4 my-4">
            <h5 class="ml-1 font-bold text-xl">Typ</h5>
            <ul class="py-2">
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Akce</span>
                </label>
                <span class="text-gray-500">23</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Herní novinky</span>
                </label>
                <span>64</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Předběžný přístup</span>
                </label>
                <span>13</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Předpacená karta</span>
                </label>
                <span>235</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Předobjednávky</span>
                </label>
                <span>24</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Herní balíčky</span>
                </label>
                <span>134</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Skladem</span>
                </label>
                <span>5183</span>
              </li>
            </ul>
          </div>
          <hr />
          <div class="mx-4 my-4">
            <h5 class="ml-1 text-xl font-bold">Žánr</h5>
            <ul class="py-2">
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Adventury</span>
                </label>
                <span>231</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Akční</span>
                </label>
                <span>64</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Arkádové</span>
                </label>
                <span>85</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Bojové</span>
                </label>
                <span>654</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Dobrodružné</span>
                </label>
                <span>75</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">FPS</span>
                </label>
                <span>11</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Karetní</span>
                </label>
                <span>354</span>
              </li>
              <li class="flex py-1 px-1 hover:bg-green-600">
                <label class="flex-grow cursor-pointer">
                  <input type="checkbox" />
                  <span class="pl-1">Logické</span>
                </label>
                <span class="">21</span>
              </li>
            </ul>
          </div>
          <hr />
          <div class="mx-4 my-4">
            <h5 class="ml-1 text-xl font-bold">Cena</h5>
            <div class="flex justify-center pt-4 items-center">
              <div
                x-data="range()"
                x-init="mintrigger(); maxtrigger()"
                class="relative max-w-lg w-full"
              >
                <div>
                  <input
                    type="range"
                    step="100"
                    // x-bind:min="min"
                    // x-bind:max="max"
                    // x-on:input="mintrigger"
                    x-model="minprice"
                    class="
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
                    class="
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

                  <div class="relative z-10 h-2">
                    <div class="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>

                    <div
                      class="absolute z-20 top-0 bottom-0 rounded-md bg-green-300"
                      // x-bind:style="'right:'+maxthumb+'%; left:'+minthumb+'%'"
                    ></div>

                    <div
                      class="
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
                      class="
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

                <div class="flex justify-between items-center py-5">
                  <div>
                    <input
                      type="text"
                      maxlength="5"
                      // x-on:input="mintrigger"
                      x-model="minprice"
                      class="px-3 py-2 border border-gray-200 rounded w-20 text-center"
                    />
                  </div>
                  Kč -
                  <div>
                    <input
                      type="text"
                      maxlength="5"
                      // x-on:input="maxtrigger"
                      x-model="maxprice"
                      class="px-3 py-2 border border-gray-200 rounded w-20 text-center"
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