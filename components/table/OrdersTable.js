import React from "react";
import Link from "next/link";
import { dateStringFormatter } from "../../helpers/dateFormater";

function OrdersTable({ orders }) {
  return (
    <div className="border-collapse border-gray-200 border">
      {orders ? (
        <table className="w-full">
          <thead className="bg-blue-200">
            <tr>
              <th className="text-lg py-3">Číslo objednávky</th>
              <th className="text-lg py-3">Cena</th>
              <th className="text-lg py-3">Stav</th>
              <th className="text-lg py-3">Datum</th>
              <th className="text-lg py-3"></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr className="text-center hover:bg-blue-100" key={i}>
                <td className="text-center pl-3  py-3">{order.orderNumber}</td>
                <td className="text-center px-2 py-3">
                  {order.total_price} Kč
                </td>
                <td className="text-center px-2 py-3">{order.state}</td>
                <td className="text-center px-2 py-3">
                  {dateStringFormatter(order.createdAt)}
                </td>
                <td className="text-center px-10 py-3">
                  <Link href={`/order/${order.orderNumber}`}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 cursor-pointer"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <i className="fa fa-search fa-5x py-10 text-gray-200 block text-center items-center"></i>
      )}
    </div>
  );
}

export default OrdersTable;
