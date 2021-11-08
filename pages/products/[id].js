import React from "react";
import Image from "next/image";
import Rating from "../../components/Rating";

function singleProduct({ id }) {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-[1430px] px-5">
        <div className="px-[15px] w-2/4  float-right">
          <div className="pl-10 pt-10 pr-10 space-y-2 bg-white">
            <h1 className="text-3xl">
              Grand Theft Auto V Premium Online Edition, GTA 5
            </h1>

            <div className="flex pb-7 text-gray-500 border-b border-gray-300 text-sm">
              <div className="flex items-center space-x-2">
                <Rating count={4} />
                <span>{Math.floor(Math.random() * 1000)}x</span>
              </div>
              <span className="ml-8 pl-8 border-l border-black">
                SKU: 99-1000130448
              </span>
            </div>
          </div>
        </div>
        <div className="px-[15px]  w-2/4 float-left relative">
          <div className="flex flex-col w-full">
            <div className="">
              <Image
                width="660"
                height="500"
                src="https://dormeocz.azureedge.net/media/catalog/product/cache/22/image/645x484/040ec09b1e35df139433887a97daa66f/a/d/adaptivego_pillow_and_duvet_and_a_reusable_bag_set-mint_03.jpg"
              />
            </div>
            <div className="w-full">
              <ul className="flex space-x-2 h-24 overflow-hidden">
                <li>
                  <Image
                    layout="fixed"
                    width="150"
                    height="90"
                    src="https://cdn.aktivcommunication.cz/images/products/box/423x533x1/7182.jpg"
                  />
                </li>
                <li>
                  <Image
                    layout="fixed"
                    width="150"
                    height="90"
                    src="https://cdn.aktivcommunication.cz/images/products/box/423x533x1/7182.jpg"
                  />
                </li>
                <li>
                  <Image
                    layout="fixed"
                    width="150"
                    height="90"
                    src="https://cdn.aktivcommunication.cz/images/products/box/423x533x1/7182.jpg"
                  />
                </li>
                <li>
                  <Image
                    layout="fixed"
                    width="150"
                    height="90"
                    src="https://cdn.aktivcommunication.cz/images/products/box/423x533x1/7182.jpg"
                  />
                </li>
                <li>
                  <Image
                    layout="fixed"
                    width="150"
                    height="90"
                    src="https://cdn.aktivcommunication.cz/images/products/box/423x533x1/7182.jpg"
                  />
                </li>
                <li>
                  <Image
                    layout="fixed"
                    width="150"
                    height="90"
                    src="https://cdn.aktivcommunication.cz/images/products/box/423x533x1/7182.jpg"
                  />
                </li>
                <li>
                  <Image
                    layout="fixed"
                    width="150"
                    height="90"
                    src="https://cdn.aktivcommunication.cz/images/products/box/423x533x1/7182.jpg"
                  />
                </li>
                <li>
                  <Image
                    layout="fixed"
                    width="150"
                    height="90"
                    src="https://cdn.aktivcommunication.cz/images/products/box/423x533x1/7182.jpg"
                  />
                </li>
                <li>
                  <Image
                    layout="fixed"
                    width="150"
                    height="90"
                    src="https://cdn.aktivcommunication.cz/images/products/box/423x533x1/7182.jpg"
                  />
                </li>
                <li>
                  <Image
                    layout="fixed"
                    width="150"
                    height="90"
                    src="https://cdn.aktivcommunication.cz/images/products/box/423x533x1/7182.jpg"
                  />
                </li>
                <li>
                  <Image
                    layout="fixed"
                    width="150"
                    height="90"
                    src="https://cdn.aktivcommunication.cz/images/products/box/423x533x1/7182.jpg"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-[15px] h-80 w-2/4 float-right">
          <div className="px-10 bg-white">
            <div className="py-7 border-b border-gray-300">
              Super měkká, prémiové kvality s reagující termoregulační
              technologií. Když je vám horko, ochladí vás a když je vám zima –
              obejme vás v teplém pohodlí. Lehká, extra teplá a extrémně
              prodyšná přikrývka. Klasický polštář je ideální pro všechny
              spánkové polohy. 3 barvy: Šedá, smetanová a mentolová. Sady:
              přikrývka 140x200 cm, polštář 50x70 cm a přikrývka 200x200 cm, 2x
              polštář 50x70 cm.
            </div>
            {/* <div>variant</div> */}
            <div className="py-7 border-b border-gray-300">amount + price</div>
            <div className="flex flex-col py-7 justify-center items-center">
              <span className="text-[13px] pb-5">
                PRODUKT SKLADEM. PŘEDPOKLÁDANÉ DORUČENÍ: 3 DNÍ
              </span>
              <button className="max-w-[360px] w-[350px] min-w-i h-auto py-[15px] px-5 text-2xl leading-[1.4rem] font-bold bg-blue-800 text-white">
                PŘIDAT DO KOŠÍKU
              </button>
            </div>
          </div>
        </div>
        <div className="float-none clear-both"></div>
      </div>
    </div>
  );
}

export default singleProduct;
