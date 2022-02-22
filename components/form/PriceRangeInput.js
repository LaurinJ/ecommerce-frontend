import React, { useState } from "react";

function PriceRangeInput({ setFilterParams }) {
  const [min, setMin] = useState(1000);
  const [max, setMax] = useState(7000);

  const priceGap = 1000;

  const handlePriceMin = (e) => {
    const { value } = e.target;
    if (!(max - value < priceGap)) {
      setMin(value);
    }
  };

  const handlePriceMax = (e) => {
    const { value } = e.target;
    if (!(value - min < priceGap)) {
      setMax(value);
    }
  };

  const handlePriceMinField = (e) => {
    const { value } = e.target;
    if (max - value < priceGap) {
      const _min = max - priceGap;
      setMin(_min);
      changeFilter("min_price", _min);
    } else if (value < 0) {
      setMin(0);
      changeFilter("min_price", 0);
    } else {
      setMin(value);
      changeFilter("min_price", value);
    }
  };

  const handlePriceMaxField = (e) => {
    const { value } = e.target;
    if (value - min < priceGap) {
      const _max = min + priceGap;
      setMax(_max);
      changeFilter("max_price", _max);
    } else if (value > 10000) {
      setMax(10000);
      changeFilter("max_price", 10000);
    } else {
      setMax(value);
      changeFilter("max_price", value);
    }
  };

  const changeFilter = (name, number) => {
    setFilterParams((prevState) => ({
      ...prevState,
      [name]: Number(number),
    }));
  };

  return (
    <div className="mx-4 my-4">
      <h5 className="ml-1 text-xl font-bold">Cena</h5>
      <div className="flex w-full">
        <div className="flex w-full items-center h-11">
          <input
            type="number"
            className="px-3 py-2 mr-1 border border-gray-200 h-full rounded w-20 text-center outline-none"
            value={min}
            onChange={handlePriceMinField}
          />
          <span>Kč -</span>
        </div>
        <div className="flex w-full items-center h-11">
          <input
            type="number"
            className="px-3 py-2 mr-1 border border-gray-200 h-full rounded w-20 text-center outline-none"
            value={max}
            onChange={handlePriceMaxField}
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
          onMouseLeave={() => {
            changeFilter("min_price", min);
          }}
          onChange={handlePriceMin}
        />
        <input
          type="range"
          min="0"
          max="10000"
          step="100"
          value={max}
          onMouseLeave={() => {
            changeFilter("max_price", max);
          }}
          onChange={handlePriceMax}
        />
      </div>
    </div>
  );
}

export default PriceRangeInput;
