import React from "react";
import { useRouter } from "next/router";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayForIt() {
  const router = useRouter();
  const { order } = router.query;

  return (
    <div className="-full mx-auto max-w-[1430px] lg:px-[30px] relative">
      <div className="flex flex-col py-4 items-center space-y-3">
        <span className="text-center text-2xl font-medium">
          Objednávka č. {order} byla přijata.
        </span>
        <button
          className="base_btn_form_primary max-w-[200px]"
          onClick={() => {
            console.log(order);
          }}
        >
          Zaplatit
        </button>
      </div>
    </div>
    // <div className="w-full mx-auto max-w-[1430px] h-screen lg:px-[30px] relative">
    //   <PayPalScriptProvider
    //     options={{
    //       "client-id":
    //         "AYSHLLdAx4T9y1QJASwW0oeXVcPC9A-de2UK0-k3tOgs_52270WVWe34w6rGBRaPal7aA38tPRvfKcJY",
    //     }}
    //   >
    //     <div className="w-full flex flex-shrink justify-center h-screen items-center bg-red-400 ">
    //       <PayPalButtons s />
    //     </div>
    //   </PayPalScriptProvider>
    // </div>
  );
}

export default PayForIt;
