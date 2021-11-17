import React from "react";

function OrderProgressBar({ state }) {
  return (
    <div className="progressbar mx-auto max-w-xs sm:max-w-xl py-16">
      <div className="flex justify-between relative">
        <div className="flex flex-col items-center h-full">
          <div
            className={`flex justify-center items-center w-6 h-6 sm:w-11 sm:h-11 border-2 rounded-full font-bold ${
              state >= 1
                ? state != 1
                  ? "bg-green-600 text-white border-0"
                  : "bg-primary text-white border-0"
                : "bg-white"
            }`}
          >
            {state <= 1 ? (
              1
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <div
            className={`pt-2 text-center font-bold ${
              state >= 1 ? (state != 1 ? "text-green-600" : "text-primary") : ""
            }`}
          >
            ADRESA
          </div>
        </div>
        <div className="flex flex-col items-center h-full">
          <div
            className={`flex justify-center items-center w-6 h-6 sm:w-11 sm:h-11 border-2 rounded-full font-bold ${
              state >= 2
                ? state != 2
                  ? "bg-green-600 text-white border-0"
                  : "bg-primary text-white border-0"
                : "bg-white"
            }`}
          >
            {state <= 2 ? (
              2
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <div
            className={`pt-2 text-center font-bold ${
              state >= 2 ? (state != 2 ? "text-green-600" : "text-primary") : ""
            }`}
          >
            PLATBA
          </div>
        </div>
        <div className="flex flex-col  items-center h-full">
          <div
            className={`flex justify-center items-center w-6 h-6 sm:w-11 sm:h-11 border-2 rounded-full font-bold ${
              state >= 3
                ? state != 3
                  ? "bg-green-600 text-white border-0"
                  : "bg-primary text-white border-0"
                : "bg-white"
            }`}
          >
            {state <= 3 ? (
              3
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
          </div>
          <div
            className={`pt-2 text-center font-bold ${
              state >= 3 ? (state != 3 ? "text-green-600" : "text-primary") : ""
            }`}
          >
            SCHRNUTÍ <br /> OBJEDNÁVKY
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderProgressBar;
