import React, { useContext } from "react";
import CartContext from "../context/CartContext";

function Button() {
  const { addItem } = useContext(CartContext);

  const product = {
    _id: 1,
    title: "item",
    price: 100,
    old_price: 150,
    short_description: "this is product one",
    img: "cc93ad3ca8339ecaefa57e.png",
  };

  return (
    <button
      data-testid="add-button"
      className="block h-[35px] px-[10px] leading-[28px] text-sm font-bold text-white items-center justify-center cursor-pointer bg-red-700 border-2 border-transparent rounded-sm hover:bg-red-600"
      onClick={() => {
        addItem(product, 1);
      }}
    >
      Přidat do košíku
    </button>
  );
}

export default Button;
