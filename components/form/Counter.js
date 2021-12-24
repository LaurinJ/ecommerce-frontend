import React from "react";

function Counter({ count, countHandle }) {
  const changeHandle = (e) => {
    let value = e.target.value;
    countHandle(value);
  };

  const decrement = (e) => {
    countHandle(count - 1);
  };
  const increment = (e) => {
    countHandle(count + 1);
  };

  return (
    <div className="h-14 p-[10px] inline-block border border-gray-300 rounded-md text-2xl leading-6">
      <button className="w-6" onClick={decrement}>
        -
      </button>
      <input
        className="w-12 text-center"
        type="number"
        value={count}
        onChange={changeHandle}
      />
      <button className="w-6" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default Counter;
