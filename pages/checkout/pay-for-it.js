import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { CREATE_PAYMENT } from "../../queries/Mutation";
import Loader from "../../components/Loader";

function PayForIt() {
  const router = useRouter();
  const { order } = router.query;

  const [createPayment, { data, loading }] = useMutation(CREATE_PAYMENT, {
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      router.push(data.createStripePayment.url);
    },
  });

  const handleClick = async () => {
    try {
      await createPayment({ variables: { orderNumber: order } });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // setTimeout(handleClick, 5000);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <div className="w-full h-screen mx-auto max-w-[1430px] lg:px-[30px] relative">
        <div className="flex flex-col py-4 items-center space-y-3">
          <span className="text-center text-2xl font-medium">
            Objednávka č. {order} byla přijata.
          </span>
          <button
            className="base_btn_form_primary max-w-[200px]"
            onClick={handleClick}
          >
            Zaplatit
          </button>
        </div>
      </div>
    </>
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
