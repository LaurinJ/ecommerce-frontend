import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../apollo-client";
import ProductCard from "../../components/ProductCard";
import FilterProducts from "../../components/FilterProducts";
import MobileFilterProducts from "../../components/MobileFilterProducts";
import Pagination from "../../components/Pagination";
import { GET_FILTER_PRODUCTS } from "../../queries/Query";

function Products() {
  const router = useRouter();
  const title = router.query.q || "";
  const page = router.query.page ? Number(router.query.page) : 1;
  const { data, loading, error } = useQuery(GET_FILTER_PRODUCTS, {
    variables: { skip: page, params: { title: title } },
  });
  // console.log(data.getCountPages.pages);
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

  return (
    <div className="bg-blue-50">
      <div className="flex mx-auto max-w-[1430px] lg:px-[30px]">
        <div className="pr-[30px] w-[300px] hidden lg:block">
          <FilterProducts />
        </div>
        <div className="flex flex-col lg:w-calc px-[30px] lg:px-0">
          {!title ? (
            ""
          ) : data.getFilterProducts.products.length ? (
            <h2 className="mt-2 text-xl font-bold">
              Vaše hledání „{title}“ odhalilo následující:
            </h2>
          ) : (
            <h2 className="mt-2 text-xl font-bold">
              Vaše hledání „{title}“ nepřineslo žádné výsledky.
            </h2>
          )}

          <div className="flex my-3 justify-between sm:mx-5">
            <MobileFilterProducts />
            <div className="ml-auto">
              <select className="pl-5 pr-5 md:pr-10 h-full lg:h-10 leading-10 bg-white border-2">
                <option value="">Default sorting</option>
                <option value="">Price low-high</option>
                <option value="">Price high-low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 mb-7">
            {data.getFilterProducts.products.map((product, i) => {
              return <ProductCard product={product} key={i} />;
            })}
          </div>
          {/* paginator */}
          {data.getFilterProducts.pages > 1 ? (
            <Pagination page={page} pages={data.getFilterProducts.pages} />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const page = query.page ? Number(query.page) : 1;
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_FILTER_PRODUCTS,
    variables: {
      skip: page,
      params: { title: query.q },
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Products;
