import React from "react";
import Rating from "./Rating";
import ReviewForm from "./form/ReviewForm";
import { dateStringFormatter } from "../helpers/dateFormater";

function ReviewView({ id }) {
  return (
    <div className="flex flex-wrap py-2">
      {/* comments list */}
      <div className="w-full sm:w-2/4 p-2">
        {/* single comment */}
        <div>
          <span className="pr-1 font-medium">Karel</span>|
          <span className="pl-1">{dateStringFormatter(1645153000000)}</span>
          <div className="py-1">
            <Rating count={3} />
          </div>
          <p className="text-sm">
            You define your project’s breakpoints in the theme.screens section
            of your tailwind.config.js file. The keys become your responsive
            modifiers (like md:text-center), and the values are the min-width
            where that breakpoint should start.
          </p>
        </div>
        <hr className="mt-2" />
      </div>
      {/* form */}
      <div className="w-full sm:w-2/4 p-2">
        <ReviewForm />
      </div>
    </div>
  );
}

export default ReviewView;
