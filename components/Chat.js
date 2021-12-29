import React, { useState } from "react";

function Chat() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
        <div className="flex flex-col h-full justify-between overflow-hidden mx-4 my-3">
          {/* chats */}
          <div className="flex flex-col space-y-3 overflow-auto n_scroll">
            {/* left comment */}
            <div className="flex flex-col mr-auto max-w-[220px]">
              <span className="py-3 px-3 bg-gray-200 rounded-xl">
                Pokud máte otázky, pošlete nám prosím zprávu přímo. Rádi vám
                pomůžeme.
              </span>
              <div className="mr-auto mb-3 mt-2 text-xs text-gray-400">
                9:15
              </div>
            </div>
            {/* right comment */}
            <div className="flex flex-col ml-auto max-w-[220px]">
              <span className="py-3 px-3 bg-blue-200 rounded-xl">
                Rozmyslel(a) jsem si to
              </span>
              <div className="ml-auto mb-3 mt-2 text-xs text-gray-400">
                9:15
              </div>
            </div>
            <div className="flex flex-col mr-auto max-w-[220px] ">
              <span className="py-3 px-3 bg-gray-200 rounded-xl">
                Pokud máte otázky, pošlete nám prosím zprávu přímo. Rádi vám
                pomůžeme.
              </span>
              <div className="mr-auto mb-3 mt-2 text-xs text-gray-400">
                9:15
              </div>
            </div>
            <div className="flex flex-col ml-auto max-w-[220px]">
              <span className="py-3 px-3 bg-blue-200 rounded-xl">
                Rozmyslel(a) jsem si to sdgsg sg sdg sdgs dgsdg sdgsdgsdg sg s
              </span>
              <div className="ml-auto mb-3 mt-2 text-xs text-gray-400">
                9:15
              </div>
            </div>
            <div className="flex flex-col mr-auto max-w-[220px] ">
              <span className="py-3 px-3 bg-gray-200 rounded-xl">
                Pokud máte otázky, pošlete nám prosím zprávu přímo. Rádi vám
                pomůžeme.
              </span>
              <div className="mr-auto mb-3 mt-2 text-xs text-gray-400">
                9:15
              </div>
            </div>
            <div className="flex flex-col ml-auto max-w-[220px]">
              <span className="py-3 px-3 bg-blue-200 rounded-xl">
                Rozmyslel(a) jsem si to sdgsg sg sdg sdgs dgsdg sdgsdgsdg sg s
              </span>
              <div className="ml-auto mb-3 mt-2 text-xs text-gray-400">
                9:15
              </div>
            </div>
          </div>
          {/* form */}
          <div className="mt-3">
            <form
              className="flex border border-gray-300 rounded-3xl"
              onSubmit={handleSubmit}
            >
              <textarea
                className="py-3 px-4 flex-grow rounded-l-3xl overflow-hidden outline-none resize-none"
                placeholder="Pošlete nám zprávu"
                aria-autocomplete="off"
                aria-required="true"
                rows="1"
                maxLength={10000}
              ></textarea>
              <button
                className="px-4 flex justify-center items-center"
                type="submit"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
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

export default Chat;
