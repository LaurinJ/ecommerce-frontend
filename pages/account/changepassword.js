import React from "react";
import Link from "next/link";
import { getLayout } from "../../components/account/AccountLayout";
import ChangePasswordForm from "../../components/form/ChangePasswordForm";

function changepassword() {
  return <ChangePasswordForm />;
}

changepassword.getLayout = getLayout;

export default changepassword;
