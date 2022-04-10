import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { getLayout } from "../../components/account/AccountLayout";
import FavoriteProductCard from "../../components/FavoriteProductCard";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import { GET_FAVORITE_PRODUCTS } from "../../queries/Query";

function FavoriteProduct() {
  const router = useRouter();
  const page = router?.query.page ? Number(router.query.page) : 1;

  const { data, loading } = useQuery(GET_FAVORITE_PRODUCTS);

  return (
    <div className="">
      <h3 className="mb-4 font-medium text-xl">Vaše oblíbené produkty</h3>
      {/* container products */}
      <div className="relative min-h-[200px]">
        {loading && <Loader />}
        {/* single product */}
        {data?.getFavoriteProducts.products.length ? (
          data.getFavoriteProducts.products.map((product, i) => {
            return <FavoriteProductCard key={i} product={product} />;
          })
        ) : !loading && data ? (
          <h2 className="text-lg text-center">
            Nemáš žádné oblíbené produkty!
          </h2>
        ) : (
          ""
        )}
      </div>
      {/* paginator */}
      {data?.getFavoriteProducts.pages > 1 && (
        <Pagination page={page} pages={data.getFavoriteProducts.pages} />
      )}
    </div>
  );
}

FavoriteProduct.getLayout = getLayout;

export default FavoriteProduct;
