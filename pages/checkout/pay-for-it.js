import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

function PayForIt() {
  return (
    <div className="w-full mx-auto max-w-[1430px] h-screen lg:px-[30px] relative">
      <PayPalScriptProvider
        options={{
          "client-id":
            "AYSHLLdAx4T9y1QJASwW0oeXVcPC9A-de2UK0-k3tOgs_52270WVWe34w6rGBRaPal7aA38tPRvfKcJY",
        }}
      >
        <div className="w-full flex flex-shrink justify-center h-screen items-center bg-red-400 ">
          <PayPalButtons />
        </div>
      </PayPalScriptProvider>
    </div>
  );
}

export default PayForIt;
