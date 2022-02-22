import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { initializeApollo } from "../apollo-client";
import ProductCard from "../components/ProductCard";
import FilterProducts from "../components/FilterProducts";
import MobileFilterProducts from "../components/MobileFilterProducts";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import { GET_PRODUCTS_BY_CATEGORY } from "../queries/Query";

function Products() {
  const router = useRouter();
  const title = router.query.q || "";
  const price = router.query
    ? {
        min_price: Number(router.query.min_price),
        max_price: Number(router.query.max_price),
      }
    : {};
  const page = router.query.page ? Number(router.query.page) : 1;
  const [getProductsFunc, { data, loading, error }] = useLazyQuery(
    GET_PRODUCTS_BY_CATEGORY,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        skip: page,
        params: {
          category: router.query.slug || "",
          ...price,
        },
      },
    }
  );

  useEffect(() => {
    getProductsFunc();
  }, [router]);

  if (error) {
    console.error(error);
    return null;
  }

  return (
    <div className="flex mx-auto max-w-[1430px] lg:px-[30px] relative">
      {loading && <Loader />}
      <div className="pr-[30px] w-[300px] hidden lg:block">
        <FilterProducts />
      </div>
      <div className="flex flex-col lg:w-calc px-[30px] lg:px-0">
        {!title ? (
          ""
        ) : data.getProductsByCategory.products.length ? (
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
        {/* products list */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 mb-7">
          {data &&
            data.getProductsByCategory.products.map((product, i) => {
              return <ProductCard product={product} key={i} />;
            })}
        </div>
        {/* paginator */}
        {data && data.getProductsByCategory.pages > 1 ? (
          <Pagination page={page} pages={data.getProductsByCategory.pages} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const page = query.page ? Number(query.page) : 1;
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_PRODUCTS_BY_CATEGORY,
    variables: {
      skip: page,
      params: { category: query.slug },
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default Products;
