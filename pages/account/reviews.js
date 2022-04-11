import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useLazyQuery } from "@apollo/client";
import { getLayout } from "../../components/account/AccountLayout";
import Rating from "../../components/Rating";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import { GET_USER_REVIEWS } from "../../queries/Query";
import { dateStringFormatter } from "../../helpers/dateFormater";

function Reviews() {
  const router = useRouter();
  const page = router?.query.page ? Number(router.query.page) : 1;

  const [getUserReviews, { data, loading }] = useLazyQuery(GET_USER_REVIEWS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      skip: page,
    },
  });

  useEffect(() => {
    getUserReviews();
  }, [router]);

  return (
    <div className="flex flex-col w-full">
      <h3 className="mb-4 font-medium text-xl">Vaše recenze</h3>
      {/* container reviews */}
      <div className="relative min-h-[200px] mb-6">
        {loading && <Loader />}
        {/* single review */}
        {data?.getUserReviews.reviews.length ? (
          data.getUserReviews.reviews.map((review, i) => {
            return (
              <div>
                <span className="pr-1 font-medium">{review.product.title}</span>
                |
                <span className="pl-1">
                  {dateStringFormatter(review.createdAt)}
                </span>
                <div className="py-1">
                  {review.rating > 0 && <Rating count={review.rating} />}
                </div>
                <p className="text-sm">{review.content}</p>
                <hr className="my-2" />
              </div>
            );
          })
        ) : !loading && data ? (
          <h2 className="text-lg text-center">Nemáš žádné recenze!</h2>
        ) : (
          ""
        )}
      </div>
      {/* paginator */}
      {data?.getUserReviews.pages > 1 && (
        <Pagination page={page} pages={data.getUserReviews.pages} />
      )}
    </div>
  );
}

Reviews.getLayout = getLayout;

export default Reviews;
