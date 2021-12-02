import React, { useEffect } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { LOGOUT_MUTATION } from "../../queries/Mutation";
import { getCookie, logout as logouData } from "../../actions/auth";

function logout() {
  const [logout, { data, loading, error }] = useMutation(LOGOUT_MUTATION);

  useEffect(() => {
    if (data) {
      Router.push(`/`);
    }
  }, [data]);

  const logouthandler = () => {
    const token = getCookie("refreshToken");
    logout({
      variables: {
        token: { refreshToken: token },
      },
    });
    logouData();
  };

  return (
    <button onClick={logouthandler}>
      <a>Odhlasit</a>
    </button>
  );
}

export default logout;
