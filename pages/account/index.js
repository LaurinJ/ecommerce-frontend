import React from "react";
import Link from "next/link";
import { useQuery } from "@apollo/client";
import { getLayout } from "../../components/account/AccountLayout";
import OrdersTable from "../../components/table/OrdersTable";
import { orders } from "../../data/orders";
import { GET_USER_ORDERS } from "../../queries/Query";

function index() {
  const { data, loading } = useQuery(GET_USER_ORDERS);

  return (
    <div className="">
      <h3 className="mb-2 font-medium text-xl">Vaše objednávky</h3>
      <OrdersTable orders={data?.getUserOrders.orders || []} />
    </div>
  );
}

index.getLayout = getLayout;

export default index;
