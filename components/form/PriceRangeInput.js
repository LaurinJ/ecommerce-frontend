import React, { useState } from "react";

function PriceRangeInput() {
  const [min, setMin] = useState(1000);
  const [max, setMax] = useState(7000);

  return (
    <div className="mx-4 my-4">
      <h5 className="ml-1 text-xl font-bold">Cena</h5>
      <div className="flex w-full">
        <div className="flex w-full items-center h-11">
          <input
            type="number"
            className="px-3 py-2 mr-1 border border-gray-200 h-full rounded w-20 text-center outline-none"
            value={min}
            onChange={(e) => {
              setMin(e.target.value);
            }}
          />
          <span>Kč -</span>
        </div>
        <div className="flex w-full items-center h-11">
          <input
            type="number"
            className="px-3 py-2 mr-1 border border-gray-200 h-full rounded w-20 text-center outline-none"
            value={max}
            onChange={(e) => {
              setMax(e.target.value);
            }}
          />
          <span>Kč</span>
        </div>
      </div>
      {/* slider */}
      <div className="mt-4 relative h-2 rounded bg-gray-500">
        <div
          className={`absolute left-1/4  h-2 rounded bg-primary`}
          style={{
            left: `${(min / 10000) * 100}%`,
            right: `${100 - (max / 10000) * 100}%`,
          }}
        ></div>
      </div>
      {/* range inputs */}
      <div className="range-input">
        <input
          type="range"
          min="0"
          max="10000"
          step="100"
          value={min}
          onChange={(e) => {
            setMin(e.target.value);
          }}
        />
        <input
          type="range"
          min="0"
          max="10000"
          step="100"
          value={max}
          onChange={(e) => {
            console.log(e.target.value);
            setMax(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default PriceRangeInput;
