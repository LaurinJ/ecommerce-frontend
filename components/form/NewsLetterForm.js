import React from "react";
import NewsLetterInput from "./NewsLetterInput";

function NewsLetterForm() {
  return (
    <div className="">
      <h4 className="mt-6 lg:mt-0 text-lg uppercase font-medium">
        PŘIHLAŠTE SE K ODBĚRU
      </h4>
      <span className="block my-2">
        Vložte Vás email a už Vám neunikne žádná super nabídka.
      </span>
      <form className="flex">
        <NewsLetterInput
          required={true}
          type="email"
          name="email"
          label="Email"
          prompt="Zadejte Email"
          // error={err.email}
          //   error={"Email je povinne"}
          // value={formValues.email}
          // handleChange={handleChange}
        />
        <button type="submit" className="base_btn_form_primary max-h-12">
          Odeslat
        </button>
      </form>
    </div>
  );
}

export default NewsLetterForm;
