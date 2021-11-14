import React from "react";

function OrderProgressBar({ state }) {
  return (
    <div className="progressbar mx-auto max-w-xs sm:max-w-xl py-16">
      <div className="flex justify-between relative">
        <div className="flex flex-col items-center h-full">
          <div
            className={`flex justify-center items-center w-6 h-6 sm:w-11 sm:h-11 border-2 rounded-full font-bold ${
              state == 1 ? "bg-primary text-white border-0" : "bg-white"
            }`}
          >
            1
          </div>
          <div
            className={`pt-2 text-center font-bold ${
              state == 1 ? "text-primary" : ""
            }`}
          >
            ADRESA
          </div>
        </div>
        <div className="flex flex-col items-center h-full">
          <div
            className={`flex justify-center items-center w-6 h-6 sm:w-11 sm:h-11 border-2 rounded-full font-bold ${
              state == 2 ? "bg-primary text-white border-0" : "bg-white"
            }`}
          >
            2
          </div>
          <div
            className={`pt-2 text-center font-bold ${
              state == 2 ? "text-primary" : ""
            }`}
          >
            PLATBA
          </div>
        </div>
        <div className="flex flex-col  items-center h-full">
          <div
            className={`flex justify-center items-center w-6 h-6 sm:w-11 sm:h-11 border-2 rounded-full font-bold ${
              state == 3 ? "bg-primary text-white border-0" : "bg-white"
            }`}
          >
            3
          </div>
          <div
            className={`pt-2 text-center font-bold ${
              state == 3 ? "text-primary" : ""
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
