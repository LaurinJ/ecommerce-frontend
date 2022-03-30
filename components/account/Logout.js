import React, { useEffect } from "react";
import Router from "next/router";
import { useMutation } from "@apollo/client";
import { LOGOUT_MUTATION } from "../../queries/Mutation";
import { getCookie, logout as logouData } from "../../actions/auth";
import { useNotification } from "../../context/NotificationProvider";

function Logout(props) {
  const dispatch = useNotification();
  const [logout, { data, loading, error }] = useMutation(LOGOUT_MUTATION, {
    onCompleted: () => {
      dispatch({
        type: "SUCCESS",
        message: "Byl jsi úspěšně odhlášen",
        title: "Successful Request",
      });
      Router.push(`/`);
    },
  });

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
    <span
      className={`${props.class ? props.class : ""} cursor-pointer`}
      onClick={() => {
        logouthandler();
      }}
    >
      Odhlasit
    </span>
  );
}

export default Logout;
