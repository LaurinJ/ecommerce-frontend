import React, { useState, useEffect } from "react";
import { useLazyQuery } from "@apollo/client";
import Chat from "./Chat";
import ContactForm from "./form/ContactForm";
import { GET_ADMIN_TOKEN } from "../queries/Query";
import { ADMIN_ONLINE_SUBSCRIPTION } from "../queries/Subscription";

function ChatWrapper() {
  const [open, setOpen] = useState(false);
  const [getAdmin, { data, subscribeToMore }] = useLazyQuery(GET_ADMIN_TOKEN);

  useEffect(() => {
    getAdmin();
    if (subscribeToMore) {
      const updateAdmin = subscribeToMore({
        document: ADMIN_ONLINE_SUBSCRIPTION,
        updateQuery: (prev, { subscriptionData }) => {
          if (!subscriptionData.data) return prev;
          if (subscriptionData.data.adminOnline === null) {
            return Object.assign({}, prev, {
              getAdminToken: null,
            });
          }
          const newToken = subscriptionData.data.adminOnline.token;
          return Object.assign({}, prev, {
            getAdminToken: [newToken],
          });
        },
      });
      return () => updateAdmin;
    }
  }, []);

  return (
    <div className={`fixed bottom-24 lg:bottom-4 right-2 z-30`}>
      <div
        className={`${
          open ? "" : "hidden"
        } w-[350px] h-[600px] mb-3 flex flex-col bg-white shadow-2xl rounded-2xl`}
      >
        <div className=" bg-gray-800 rounded-t-2xl">
          <h2 className="text-white text-xl font-semibold py-3 pl-7">
            BigBuy.cz
          </h2>
        </div>
        {/* <Chat open={open} /> */}
        {data && data.getAdminToken !== null ? (
          <Chat open={open} adminToken={data.getAdminToken.token} />
        ) : (
          <ContactForm />
        )}
      </div>
      <button className="w-16 h-16 ml-auto flex items-center justify-center bg-black rounded-full">
        {!open ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-white hover:h-14 hover:w-14 cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white hover:h-12 hover:w-12 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
    </div>
  );
}

export default ChatWrapper;
