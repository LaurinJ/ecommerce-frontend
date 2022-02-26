import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Rating from "./Rating";
import ReviewForm from "./form/ReviewForm";
import { dateStringFormatter } from "../helpers/dateFormater";
import { GET_REVIEWS } from "../queries/Query";

function ReviewView({ product_id }) {
  const [skip, setSkip] = useState(1);
  const { data, loading, fetchMore } = useQuery(GET_REVIEWS, {
    variables: { productId: product_id },
  });

  return (
    <div className="flex flex-wrap py-2">
      {/* comments list */}
      <div className="w-full sm:w-2/4 p-2">
        {/* single comment */}
        {data && data.getReviews.reviews.length !== 0 ? (
          data.getReviews.reviews.map((review) => {
            return (
              <div>
                <span className="pr-1 font-medium">{review.user.name}</span>|
                <span className="pl-1">
                  {dateStringFormatter(review.createdAt)}
                </span>
                <div className="py-1">
                  {review.rating > 0 ? <Rating count={review.rating} /> : ""}
                </div>
                <p className="text-sm">{review.content}</p>
                <hr className="mt-2" />
              </div>
            );
          })
        ) : (
          <div>
            <span className="text-gray-600">Žádné recenze</span>
          </div>
        )}
        {data && data.getReviews.pages > 1 && data.getReviews.pages > skip && (
          <button
            onClick={() => {
              fetchMore({ variables: { skip: skip + 1 } });
              setSkip(skip + 1);
            }}
            className="base_btn_form_primary my-2 block mx-auto "
          >
            Další recenze
          </button>
          // <button className="w-full p-1 text-center base">Dalsi</button>
        )}
      </div>
      {/* form */}
      <div className="w-full sm:w-2/4 p-2">
        <ReviewForm product_id={product_id} />
      </div>
    </div>
  );
}

export default ReviewView;
