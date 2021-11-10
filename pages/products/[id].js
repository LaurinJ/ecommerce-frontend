import React from "react";
import Image from "next/image";
import Rating from "../../components/Rating";

function singleProduct({ id }) {
  const product = { price: 999, old_price: 1299 };
  return (
    <>
      <div className="md:bg-gray-100 pb-10 mb-28">
        <div className="mx-auto max-w-[1430px] sm:px-5">
          <div className="sm:px-[15px] w-full md:w-2/4  float-right">
            <div className="p-4 pb-0 sm:pl-10 sm:pt-10 sm:pr-10 space-y-2 bg-white">
              <h1 className="text-3xl">
                Grand Theft Auto V Premium Online Edition, GTA 5
              </h1>

              <div className="flex pb-7 text-gray-500 lg:border-b border-gray-300 text-sm">
                <div className="flex items-center space-x-2">
                  <Rating count={4} />
                  <span>{Math.floor(Math.random() * 1000)}x</span>
                </div>
                <span className="ml-8 pl-8 hidden lg:block border-l border-black">
                  SKU: 99-1000130448
                </span>
              </div>
            </div>
          </div>
          <div className="sm:px-[15px] w-full md:w-2/4 float-left relative">
            <div className="flex flex-col w-full">
              <div className="w-full block">
                <Image
                  width="6600"
                  height="5000"
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
          <div className="sm:px-[15px] w-full md:w-2/4 float-right">
            <div className="px-10 bg-white">
              <div className="py-7 border-b border-gray-300">
                Super měkká, prémiové kvality s reagující termoregulační
                technologií. Když je vám horko, ochladí vás a když je vám zima –
                obejme vás v teplém pohodlí. Lehká, extra teplá a extrémně
                prodyšná přikrývka. Klasický polštář je ideální pro všechny
                spánkové polohy. 3 barvy: Šedá, smetanová a mentolová. Sady:
                přikrývka 140x200 cm, polštář 50x70 cm a přikrývka 200x200 cm,
                2x polštář 50x70 cm.
              </div>
              {/* <div>variant</div> */}
              <div className="flex justify-between items-center py-7 border-b border-gray-300">
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
                <div className="flex flex-col my-[10px]">
                  <div className="min-h-[21px] text-xl text-gray-500">
                    <del>
                      {product.price < product.old_price
                        ? product.old_price + " Kč"
                        : ""}
                    </del>
                  </div>
                  <div>
                    <span className="text-2xl font-semibold">
                      {product.price} Kč
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col py-7 justify-center items-center">
                <span className="text-[13px] pb-5">
                  PRODUKT SKLADEM. PŘEDPOKLÁDANÉ DORUČENÍ: 3 DNÍ
                </span>
                <button className="max-w-[360px] sm:w-[350px] min-w-i h-auto py-[15px] px-5 text-2xl leading-[1.4rem] font-bold bg-blue-800 text-white">
                  PŘIDAT DO KOŠÍKU
                </button>
              </div>
            </div>
          </div>
          <div className="float-none clear-both"></div>
        </div>
      </div>
      {/* detail comment */}
      <div className="mx-auto max-w-[1430px] px-5">
        <ul className="flex">
          <li className="pr-[30px] pb-[30px]">
            <a className="relative -bottom-px pb-[30px] text-gray-600 font-medium hover:text-black cursor-pointer border-b">
              DETAILY O PRODUKTU
            </a>
          </li>
          <li className="px-[30px] pb-[30px]">
            <a className="relative -bottom-px pb-[30px] text-gray-600 font-medium hover:text-black cursor-pointer">
              RECENZE
            </a>
          </li>
        </ul>
        <hr className="text-gray-300" />
        <div className="pt-5">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. Fusce nibh. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum. Ut enim ad minima veniam, quis nostrum exercitationem ullam
          corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
          consequatur? Quisque tincidunt scelerisque libero. Suspendisse
          sagittis ultrices augue. Nunc tincidunt ante vitae massa. Etiam
          egestas wisi a erat. Maecenas libero. Cum sociis natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Vestibulum erat
          nulla, ullamcorper nec, rutrum non, nonummy ac, erat. Curabitur
          sagittis hendrerit ante. Etiam sapien elit, consequat eget, tristique
          non, venenatis quis, ante. Fusce aliquam vestibulum ipsum. Nullam
          dapibus fermentum ipsum. Nulla non arcu lacinia neque faucibus
          fringilla. Integer pellentesque quam vel velit. Curabitur bibendum
          justo non orci. Quisque porta. Temporibus autem quibusdam et aut
          officiis debitis aut rerum necessitatibus saepe eveniet ut et
          voluptates repudiandae sint et molestiae non recusandae. Phasellus
          enim erat, vestibulum vel, aliquam a, posuere eu, velit. Nulla non
          lectus sed nisl molestie malesuada. Aenean id metus id velit
          ullamcorper pulvinar. Donec iaculis gravida nulla. Nam quis nulla.
          Phasellus rhoncus. Phasellus faucibus molestie nisl. Proin in tellus
          sit amet nibh dignissim sagittis. Maecenas aliquet accumsan leo. Duis
          condimentum augue id magna semper rutrum. Sed ut perspiciatis unde
          omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
          veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nunc
          dapibus tortor vel mi dapibus sollicitudin. Curabitur sagittis
          hendrerit ante. Fusce dui leo, imperdiet in, aliquam sit amet, feugiat
          eu, orci. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Mauris dolor
          felis, sagittis at, luctus sed, aliquam non, tellus. Donec quis nibh
          at felis congue commodo. Aliquam in lorem sit amet leo accumsan
          lacinia. In rutrum. Maecenas fermentum, sem in pharetra pellentesque,
          velit turpis volutpat ante, in pharetra metus odio a lectus. Nunc
          auctor. Cum sociis natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Donec vitae arcu. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Vestibulum fermentum tortor id mi. Nullam at arcu a est sollicitudin
          euismod. Aenean vel massa quis mauris vehicula lacinia. Aenean
          placerat. Praesent dapibus. Itaque earum rerum hic tenetur a sapiente
          delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut
          perferendis doloribus asperiores repellat. Nulla non arcu lacinia
          neque faucibus fringilla. Mauris dolor felis, sagittis at, luctus sed,
          aliquam non, tellus. Nullam faucibus mi quis velit. Mauris dolor
          felis, sagittis at, luctus sed, aliquam non, tellus. Quis autem vel
          eum iure reprehenderit qui in ea voluptate velit esse quam nihil
          molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
          nulla pariatur? Phasellus enim erat, vestibulum vel, aliquam a,
          posuere eu, velit. Aliquam id dolor. Integer vulputate sem a nibh
          rutrum consequat. Duis ante orci, molestie vitae vehicula venenatis,
          tincidunt ac pede. Mauris dolor felis, sagittis at, luctus sed,
          aliquam non, tellus. Nulla non lectus sed nisl molestie malesuada.
          Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus.
          Integer malesuada. Mauris suscipit, ligula sit amet pharetra semper,
          nibh ante cursus purus, vel sagittis velit mauris vel metus. Nulla
          est. Aliquam erat volutpat. Aliquam erat volutpat. Cum sociis natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          Aliquam in lorem sit amet leo accumsan lacinia. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum. Aliquam erat volutpat. Suspendisse nisl.
          Nulla non arcu lacinia neque faucibus fringilla. Nullam at arcu a est
          sollicitudin euismod. Sed ut perspiciatis unde omnis iste natus error
          sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
          eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
          vitae dicta sunt explicabo. Praesent vitae arcu tempor neque lacinia
          pretium. In laoreet, magna id viverra tincidunt, sem odio bibendum
          justo, vel imperdiet sapien wisi sed libero. Fusce consectetuer risus
          a nunc. Mauris metus. Aliquam id dolor.
        </div>
      </div>
    </>
  );
}

export default singleProduct;
