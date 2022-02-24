import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import InputFieldBold from "./InputFieldBold";
import { CREATE_REVIEW } from "../../queries/Mutation";

function ReviewForm({ product_id }) {
  const [review, setReview] = useState("");
  const [err, setErr] = useState("");
  const [stars, setStars] = useState(0);
  const [sendReview] = useMutation(CREATE_REVIEW, {
    onCompleted: () => {
      // setReview("");
      setStars(0);
      setErr("");
    },
  });

  const handleChange = (e) => {
    const { value } = e.target;
    setReview(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (review.length !== 0) {
        console.log("sent");
        await sendReview({
          variables: {
            review: { product: product_id, content: review, rating: stars },
          },
        });
      } else {
        setErr("Toto pole je povinné");
      }
    } catch (error) {
      console.log(error);
      //   setErr(error.graphQLErrors[0].extensions.errors);
    }
  };

  return (
    <form
      className="flex flex-col m-3 bg-white justify-center items-center"
      onSubmit={handleSubmit}
    >
      <div className="m-3 w-full md:max-w-[500px] space-y-2">
        <InputFieldBold
          //   required={true}
          type="textarea"
          name="content"
          label="Napsat recenzi"
          prompt="Napsat recenzi"
          rows="11"
          class="w-full h-full py-3 px-4 overflow-y-auto  resize-none"
          error={err}
          value={review}
          handleChange={handleChange}
        />

        <div className="flex items-center space-x-2">
          <span>Hodnoceni:</span>
          <ul className="flex items-end text-yellow-400 h-6">
            {[1, 2, 3, 4, 5].map((n) => {
              return n <= stars ? (
                <li
                  key={n}
                  onClick={() => {
                    setStars(n);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 cursor-pointer hover:h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </li>
              ) : (
                <li
                  key={n}
                  onClick={() => {
                    setStars(n);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 cursor-pointer hover:h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </li>
              );
            })}
          </ul>
        </div>

        <button
          className="base_btn_form_primary flex mx-auto items-center"
          type="submit"
        >
          ODESLAT
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 text-white ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 5l7 7-7 7M5 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </form>
  );
}

export default ReviewForm;
