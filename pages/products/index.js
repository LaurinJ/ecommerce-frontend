import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { initializeApollo } from "../../apollo-client";
import ProductCard from "../../components/ProductCard";
import FilterProducts from "../../components/FilterProducts";
import MobileFilterProducts from "../../components/MobileFilterProducts";
import Pagination from "../../components/Pagination";
import SortProducts from "../../components/SortProducts";
import Loader from "../../components/Loader";
import { GET_FILTER_PRODUCTS } from "../../queries/Query";

function Products() {
  const router = useRouter();
  const title = router?.query.q || "";
  const price = router?.query
    ? {
        min_price: Number(router.query.min_price),
        max_price: Number(router.query.max_price),
      }
    : {};
  const page = router?.query.page ? Number(router.query.page) : 1;
  const [getProductsFunc, { data, loading, error }] = useLazyQuery(
    GET_FILTER_PRODUCTS,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        skip: page,
        params: {
          title: title,
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
    <div className="bg-blue-50">
      <div className="flex mx-auto max-w-[1430px] lg:px-[30px] relative">
        {loading && <Loader />}
        <div className="pr-[30px] w-[300px] hidden lg:block">
          <FilterProducts />
        </div>
        <div className="flex flex-col lg:w-calc px-[30px] lg:px-0">
          {!title ? (
            ""
          ) : data && data.getFilterProducts.products.length ? (
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
              <SortProducts />
            </div>
          </div>
          {/* products list */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 mb-7">
            {data &&
              data.getFilterProducts.products.map((product, i) => {
                return <ProductCard product={product} key={i} />;
              })}
          </div>
          {/* paginator */}
          {data && data.getFilterProducts.pages > 1 ? (
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
