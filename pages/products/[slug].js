import React, { useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery, useMutation } from "@apollo/client";
import { initializeApollo } from "../../apollo-client";
import Rating from "../../components/Rating";
import ImagesView from "../../components/ImagesView";
import Counter from "../../components/form/Counter";
import CartContext from "../../context/CartContext";
import { useNotification } from "../../context/NotificationProvider";
import { GET_PRODUCT } from "../../queries/Query";
import { ADD_TO_FAVORITES } from "../../queries/Mutation";
import ReviewView from "../../components/ReviewView";
import { isAuth } from "../../actions/auth";

function singleProduct() {
  const dispatch = useNotification();
  const [count, setCount] = useState(1);
  const [view, setView] = useState("detail");
  const router = useRouter();
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { slug: router.query.slug },
  });

  const [addToFavorite] = useMutation(ADD_TO_FAVORITES, {
    onCompleted: (data) => {
      dispatch({
        type: "SUCCESS",
        message: data.addToFavorites.message,
        title: "Successful Request",
      });
    },
  });

  const { addItem } = useContext(CartContext);

  if (loading) {
    return (
      <h2>
        <a
          href="#loading"
          aria-hidden="true"
          className="aal_anchor"
          id="loading"
        >
          <svg
            aria-hidden="true"
            className="aal_svg"
            height="16"
            version="1.1"
            viewBox="0 0 16 16"
            width="16"
          >
            <path
              fillRule="evenodd"
              d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"
            ></path>
          </svg>
        </a>
        Loading...
      </h2>
    );
  }

  if (error) {
    console.error(error);
    return null;
  }

  const product = data.getProduct;

  const countHandle = (count) => {
    count <= 0 ? setCount(1) : setCount(count);
  };

  const addCart = (count) => {
    addItem(product, count);
  };

  let discount = 0;
  if (product.price < product.old_price) {
    discount = (
      (product.old_price - product.price) /
      (product.old_price / 100)
    ).toFixed(0);
  }

  return (
    <>
      <div className="md:bg-gray-100 pb-10  sm:mb-10">
        <div className="mx-auto max-w-[1430px] sm:px-5">
          <div className="px-5 sm:px-[15px] w-full md:w-2/4 float-right">
            <div className="p-4 pb-0 sm:pl-10 sm:pt-10 sm:pr-10 space-y-2 bg-white">
              <h1 className="text-3xl">{product.title}</h1>
              <div className="flex pb-7 h-12 text-gray-500 lg:border-b border-gray-300 text-sm">
                <div className="flex items-center space-x-2">
                  <Rating count={product.rating} />
                  <span>{product.rating_sum}x</span>
                </div>
                <span className="ml-8 pl-8 md:ml-4 md:pl-4 lg:ml-8 lg:pl-8 hidden sm:block border-l border-black">
                  SKU: {product.code}
                </span>
                <div
                  title="Přidat do oblíbených"
                  className="mx-auto"
                  onClick={() => {
                    if (!isAuth()) router.push("/account/login");
                    addToFavorite({
                      variables: { addToFavoritesId: product._id },
                    });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-full hover:text-red-600 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="px-5 sm:px-[15px] w-full md:w-2/4 float-left relative">
            <ImagesView imgurl={product.imgurl} images={product.images} />
            {product.price < product.old_price ? (
              <div className=" w-12 h-12 flex items-center justify-center absolute top-3 right-7 bg-yellow-400 text-base font-bold rounded-full">
                -{discount}%
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="sm:px-[15px] w-full md:w-2/4 float-right">
            <div className="px-10 bg-white">
              <div className="py-7 border-b border-gray-300">
                {product.short_description}
              </div>
              {/* <div>variant</div> */}
              <div className="flex justify-between items-center py-7 border-b border-gray-300">
                <Counter count={count} countHandle={countHandle} />
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
                <button
                  className="max-w-[360px] sm:w-[350px]  py-[15px] px-5 text-xl sm:text-2xl leading-[1.4rem] font-bold bg-blue-800 text-white"
                  onClick={() => {
                    addCart(count);
                    dispatch({
                      type: "SUCCESS",
                      message: "Produkt byl úspěšně přidán",
                      title: "Successful Request",
                    });
                  }}
                >
                  PŘIDAT DO KOŠÍKU
                </button>
              </div>
            </div>
          </div>
          <div className="float-none clear-both"></div>
        </div>
      </div>
      {/* detail comment */}
      <div className="mx-auto max-w-[1430px] px-5 mb-10">
        <ul className="flex">
          <li className="pr-[30px] pb-[30px]">
            <span
              onClick={() => {
                setView("detail");
              }}
              className={`relative -bottom-px pb-[30px] text-gray-600 font-medium hover:text-black cursor-pointer ${
                view === "detail" ? "border-b border-black text-black" : ""
              }`}
            >
              DETAILY O PRODUKTU
            </span>
          </li>
          <li className="px-[30px] pb-[30px]">
            <span
              onClick={() => {
                setView("comment");
              }}
              className={`relative -bottom-px pb-[30px] text-gray-600 font-medium hover:text-black cursor-pointer ${
                view === "comment" ? "border-b border-black text-black" : ""
              }`}
            >
              RECENZE
            </span>
          </li>
        </ul>
        <hr className="text-gray-300" />
        {view === "detail" ? (
          <div
            className="pt-5"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
        ) : (
          <ReviewView product_id={product._id} />
        )}
      </div>
    </>
  );
}

export default singleProduct;

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_PRODUCT,
    variables: { slug: query.slug },
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
