import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import { initializeApollo } from "../../apollo-client";
import { CHECK_RESET_TOKEN } from "../../queries/Query";
import ResetPasswordForm from "../../components/form/ResetPasswordForm";

function resetpassword() {
  const router = useRouter();
  const { data } = useQuery(CHECK_RESET_TOKEN, {
    variables: { token: router.query.token || "" },
  });
  console.log(data && data.checkResetPasswordToken);

  return (
    <div className="mx-auto max-w-[410px] m-4 relative">
      {/* <ForgotPasswordForm /> */}
      {data && data.checkResetPasswordToken.status ? (
        <ResetPasswordForm email={data.checkResetPasswordToken.email} />
      ) : (
        <p>Link je neplatny</p>
      )}
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: CHECK_RESET_TOKEN,
    variables: {
      token: query.token || "",
    },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

export default resetpassword;
