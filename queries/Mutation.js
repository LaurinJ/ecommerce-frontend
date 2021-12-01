import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($user: userLoginData) {
    login(user: $user) {
      accessToken
      refreshToken
    }
  }
`;
