import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { getLayout } from "../../components/account/AccountLayout";
import OrdersTable from "../../components/table/OrdersTable";
import FavoriteProductCard from "../../components/FavoriteProductCard";
import { orders } from "../../data/orders";
import { GET_FAVORITE_PRODUCTS } from "../../queries/Query";

function index() {
  const { data, loading } = useQuery(GET_FAVORITE_PRODUCTS);

  return (
    <div className="">
      <h3 className="mb-4 font-medium text-xl">Vaše oblíbené produkty</h3>
      {/* <OrdersTable orders={data?.getUserOrders.orders || []} /> */}
      {/* container products */}
      <div>
        {/* single product */}
        {data?.getFavoriteProducts.products.length ? (
          data.getFavoriteProducts.products.map((product, i) => {
            return <FavoriteProductCard key={i} product={product} i={i} />;
          })
        ) : (
          <h2 className="text-xl text-center">Tvůj košík je prázdný</h2>
        )}
      </div>
    </div>
  );
}

index.getLayout = getLayout;

export default index;
