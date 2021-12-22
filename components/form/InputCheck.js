import React from "react";
import Image from "next/image";

function InputCheck(props) {
  // podporované typy pro element input
  const INPUTS = ["checkbox", "radio"];

  // validace typu
  const type = props.type.toLowerCase();
  const checked = props.checked || "";

  if (!INPUTS.includes(type)) {
    return null;
  }

  return (
    <label className="flex justify-between items-center w-full radio px-10 py-1 mb-3 sm:mb-0 leading-9 border border-primary bg-lg_blue xl:text-[22px] cursor-pointer">
      <input
        type={props.type}
        className="form-check-input"
        name={props.name}
        value={props.value}
        defaultChecked={checked}
        onClick={(e) => {
          props.handleChange(e, props.label, props.price);
        }}
      />
      {props.label}
      {props.svg ? (
        props.svg
      ) : (
        <img
          className="h-9 w-16"
          src={`${process.env.IMG_LINK}${props.img}`}
          alt={props.name}
        />
      )}
      <span></span>
    </label>
  );
}

export default InputCheck;
