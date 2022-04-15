import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import {
  CREATE_PAYPAL_PAYMENT,
  CREATE_STRIPE_PAYMENT,
} from "../../queries/Mutation";
import Loader from "../../components/Loader";

function PayForIt() {
  const router = useRouter();
  const { order, payment } = router.query;

  const Mutation =
    payment === "PayPal" ? CREATE_PAYPAL_PAYMENT : CREATE_STRIPE_PAYMENT;

  const [createPayment, { loading }] = useMutation(Mutation, {
    notifyOnNetworkStatusChange: true,
    onCompleted: (data) => {
      if (payment === "PayPal") {
        router.push(data.createPayPalPayment.url);
      }
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
          <h2 className="text-center text-2xl font-medium">
            Objednávka č. {order} byla přijata.
          </h2>
          <button
            className="base_btn_form_primary max-w-[200px]"
            onClick={handleClick}
          >
            Zaplatit
          </button>
        </div>
      </div>
    </>
  );
}

export default PayForIt;
