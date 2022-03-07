import React from "react";
import Router from "next/router";
import GoogleLogin from "react-google-login";
import { useMutation } from "@apollo/client";
import { useNotification } from "../../context/NotificationProvider";
import { GOOGLE_LOGIN } from "../../queries/Mutation";
import { authenticate } from "../../actions/auth";

function LoginGoogle() {
  const dispatch = useNotification();
  const [googleLogin, { data }] = useMutation(GOOGLE_LOGIN, {
    onCompleted: (data) => {
      authenticate(data.googleLogin, () => {
        dispatch({
          type: "SUCCESS",
          message: "Přihlášení bylo úspěšné",
          title: "Successful Request",
        });
        Router.push(`/account`);
      });
    },
  });

  const responseGoogle = (response) => {
    const tokenId = response.tokenId;
    googleLogin({ variables: { token: tokenId } });
  };

  return (
    <GoogleLogin
      clientId={process.env.GOOGLE_CLIENT_ID}
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      render={(renderProps) => (
        <div
          className="w-14 h-14 flex items-center justify-center"
          onClick={renderProps.onClick}
        >
          <img
            className="hover:w-14 hover:h-14 cursor-pointer"
            src="https://img.icons8.com/color-glass/48/000000/google-logo.png"
          />
        </div>
      )}
    />
  );
}

export default LoginGoogle;
