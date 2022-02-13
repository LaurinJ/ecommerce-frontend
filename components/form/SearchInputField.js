import React from "react";

export function SearchInputField(props) {
  // supported types for the input element
  const INPUTS = ["text", "email", "number", "date", "search"];

  // element and type validation
  const type = props.type.toLowerCase();
  const required = props.required || false;

  if (!INPUTS.includes(type)) {
    return null;
  }

  // přiřazení hodnoty minima do atributu příslušného typu
  const minProp = props.min || null;
  const min = ["number", "date"].includes(type) ? minProp : null;
  const minlength = ["text"].includes(type) ? minProp : null;

  return (
    //  vykreslení aktuálního elementu
    <input
      required={required}
      type={type}
      className={`base_input_form ${props.class ? props.class : ""}`}
      placeholder={props.prompt}
      minLength={minlength}
      min={min}
      name={props.name}
      value={props.value}
      onChange={props.handleChange}
      onClick={props.onClick}
    />
  );
}

export default SearchInputField;
