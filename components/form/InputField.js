import React from "react";

export function InputField(props) {
  // supported types for the input element
  const INPUTS = ["text", "email", "password", "number", "date"];

  // element and type validation
  const type = props.type.toLowerCase();
  const isTextarea = type === "textarea";
  const required = props.required || false;

  if (!isTextarea && !INPUTS.includes(type)) {
    return null;
  }

  // přiřazení hodnoty minima do atributu příslušného typu
  const minProp = props.min || null;
  const min = ["number", "date"].includes(type) ? minProp : null;
  const minlength = ["text", "textarea"].includes(type) ? minProp : null;

  return (
    <div className="form_input">
      <div className="mb-2 text-base font-semibold text-gray-700 xl:text-lg">
        <label>{props.label}</label>
      </div>
      <div>
        {/* vykreslení aktuálního elementu */}
        {isTextarea ? (
          <textarea
            required={required}
            className="base_input_form"
            placeholder={props.prompt}
            rows={props.rows}
            minLength={minlength}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
          />
        ) : (
          <input
            required={required}
            type={type}
            className={`base_input_form ${
              props.error ? "border-red-600 " : ""
            }`}
            placeholder={props.prompt}
            minLength={minlength}
            min={min}
            name={props.name}
            value={props.value}
            onChange={props.handleChange}
          />
        )}
      </div>
      {props.error && (
        <div className=" flex items-center mt-1 lg:text-base xl:text-lg text-red-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2 mt-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          {props.error}
        </div>
      )}
    </div>
  );
}

export default InputField;
