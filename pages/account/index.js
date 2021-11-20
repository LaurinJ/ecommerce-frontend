import React from "react";
import Link from "next/link";
import { getLayout } from "../../components/account/AccountLayout";
import OrdersTable from "../../components/account/OrdersTable";
import { orders } from "../../data/orders";

function index() {
  return <OrdersTable orders={orders} />;
}

index.getLayout = getLayout;

export default index;
