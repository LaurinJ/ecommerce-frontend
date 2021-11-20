import React from "react";

function OrdersTable({ orders }) {
  return (
    <table className="w-full  bg-lg_blue">
      <thead className="bg-blue-200">
        <tr className="text-center ">
          <th className=" py-2">Číslo objednávky</th>
          <th className=" py-2">Stav</th>
          <th className=" py-2">Datum</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => {
          return (
            <tr className="text-center hover:bg-blue-100">
              <td className=" py-2">{order.order}</td>
              <td className=" py-2">{order.state}</td>
              <td className=" py-2">{order.date}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default OrdersTable;
