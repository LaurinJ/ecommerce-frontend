import React, { useState, useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "../../apollo-client";
import Rating from "../../components/Rating";
import ImagesView from "../../components/ImagesView";
import Counter from "../../components/form/Counter";
import CartContext from "../../context/CartContext";

const QUERY = gql`
  query GetProduct($slug: String!) {
    getProduct(slug: $slug) {
      title
      description
      short_description
      code
      price
      old_price
      images
      imgurl
      rating
      rating_sum
    }
  }
`;

function singleProduct() {
  const [count, setCount] = useState(1);
  const router = useRouter();
  const { data, loading, error } = useQuery(QUERY, {
    variables: { slug: router.query.slug },
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
      <div className="md:bg-gray-100 pb-10 mb-28">
        <div className="mx-auto max-w-[1430px] sm:px-5">
          <div className="sm:px-[15px] w-full md:w-2/4  float-right">
            <div className="p-4 pb-0 sm:pl-10 sm:pt-10 sm:pr-10 space-y-2 bg-white">
              <h1 className="text-3xl">{product.title}</h1>

              <div className="flex pb-7 text-gray-500 lg:border-b border-gray-300 text-sm">
                <div className="flex items-center space-x-2">
                  <Rating count={product.rating} />
                  <span>{product.rating_sum}x</span>
                </div>
                <span className="ml-8 pl-8 hidden lg:block border-l border-black">
                  SKU: {product.code}
                </span>
              </div>
            </div>
          </div>
          <div className="sm:px-[15px] w-full md:w-2/4 float-left relative">
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
                  className="max-w-[360px] sm:w-[350px] min-w-i h-auto py-[15px] px-5 text-2xl leading-[1.4rem] font-bold bg-blue-800 text-white"
                  onClick={() => {
                    addCart(count);
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
        <div className="pt-5">{product.description}</div>
      </div>
    </>
  );
}

export default singleProduct;

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: QUERY,
    variables: { slug: query.slug },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
