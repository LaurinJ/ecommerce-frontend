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
      message
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

export const GOOGLE_LOGIN = gql`
  mutation Mutation($token: String) {
    googleLogin(token: $token) {
      accessToken
      refreshToken
      user {
        name
        email
      }
    }
  }
`;

export const CHANGE_PASSWORD = gql`
  mutation Mutation($passwords: ChangePasswordData) {
    changePassword(passwords: $passwords) {
      message
    }
  }
`;

export const RESET_PASSWORD = gql`
  mutation Mutation($passwords: ResetPasswordData, $email: String) {
    resetPassword(passwords: $passwords, email: $email) {
      message
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
      message
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
  mutation Mutation($token: OrderTokenData, $order: OrderData) {
    finishOrder(token: $token, order: $order) {
      orderNumber
    }
  }
`;
export const CREATE_PAYMENT = gql`
  mutation CreateStripePayment($orderNumber: String) {
    createStripePayment(orderNumber: $orderNumber) {
      url
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

export const CREATE_REVIEW = gql`
  mutation CreateReview($review: ReviewData) {
    createReview(review: $review) {
      user {
        name
      }
      content
      rating
      createdAt
    }
  }
`;

export const SUBSCRIBE_TO_NEWS = gql`
  mutation Mutation($email: String!) {
    subscribeToNews(email: $email) {
      message
    }
  }
`;
