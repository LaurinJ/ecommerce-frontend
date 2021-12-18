import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Login($user: userLoginData!) {
    login(user: $user) {
      accessToken
      refreshToken
      user {
        name
        email
      }
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation logout($token: RefreshToken!) {
    logout(token: $token) {
      status
    }
  }
`;

export const REGISTER_MUTATION = gql`
  mutation Mutation($user: userRegisterData!) {
    createUser(user: $user) {
      accessToken
      refreshToken
      user {
        name
        email
      }
    }
  }
`;

export const PERSON_ADDRESS_MUTATION = gql`
  mutation Mutation($address: AddressData, $person: PersonData) {
    personAdress(address: $address, person: $person) {
      token
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation Mutation($token: PersonTokenData!, $order: OrderData) {
    createOrder(token: $token, order: $order) {
      status
    }
  }
`;
