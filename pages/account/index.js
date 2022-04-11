import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { getLayout } from "../../components/account/AccountLayout";
import OrdersTable from "../../components/table/OrdersTable";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import { GET_USER_ORDERS } from "../../queries/Query";

function index() {
  const router = useRouter();
  const page = router?.query.page ? Number(router.query.page) : 1;

  const [getUserOrders, { data, loading }] = useLazyQuery(GET_USER_ORDERS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      skip: page,
    },
  });

  useEffect(() => {
    getUserOrders();
  }, [router]);

  return (
    <div className="flex flex-col w-full">
      <h3 className="mb-2 font-medium text-xl">Vaše objednávky</h3>
      <div className="relative min-h-[200px] mb-6">
        {loading && <Loader />}
        {data?.getUserOrders.orders.length ? (
          <OrdersTable orders={data?.getUserOrders.orders || []} />
        ) : !loading && data ? (
          <span className="block text-lg text-center">
            Zatím nebyly vytvořeny zádné objednávky.
          </span>
        ) : (
          ""
        )}
      </div>
      {/* paginator */}
      {data?.getUserOrders.pages > 1 && (
        <Pagination page={page} pages={data.getUserOrders.pages} />
      )}
    </div>
  );
}

index.getLayout = getLayout;

export default index;
