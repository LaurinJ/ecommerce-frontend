import React from "react";
import Link from "next/link";
import { dateStringFormatter } from "../../helpers/dateFormater";
import { downloadInvoice } from "../../helpers/invoice";

function OrdersTable({ orders }) {
  return (
    <div className="border-collapse border-gray-200 border">
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
              <td className="text-center px-2 py-3">{order.total_price} Kč</td>
              <td className="text-center px-2 py-3">{order.state}</td>
              <td className="text-center px-2 py-3">
                {dateStringFormatter(order.createdAt)}
              </td>
              <td title="Stáhnout fakturu" className="pl-2 py-3">
                {order.is_paid && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    onClick={() => {
                      downloadInvoice(order.orderNumber);
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersTable;
