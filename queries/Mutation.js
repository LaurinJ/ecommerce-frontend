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

export const PAYMENT_DELIVERY_MUTATION = gql`
  mutation PaymentDelivery(
    $token: OrderTokenData!
    $delivery: DeliveryData
    $payment: PaymentData
  ) {
    paymentDelivery(token: $token, delivery: $delivery, payment: $payment) {
      status
    }
  }
`;

export const CREATE_ORDER = gql`
  mutation Mutation(
    $token: OrderTokenData
    $address: AddressData
    $person: PersonData
  ) {
    createOrUpdateOrder(token: $token, address: $address, person: $person) {
      token
    }
  }
`;

export const FINISH_ORDER = gql`
  mutation Mutation($order: OrderData, $token: OrderTokenData) {
    finishOrder(order: $order, token: $token) {
      status
      message
    }
  }
`;

export const SEND_MESSAGE = gql`
  mutation Mutation($message: MessageData!) {
    sendMessage(message: $message) {
      to
    }
  }
`;

export const SEND_CONTACT_MESSAGE = gql`
  mutation SendContactMessage($message: ContactData) {
    sendContactMessage(message: $message) {
      email
      _id
      content
      read
      createdAt
    }
  }
`;
