import { gql } from "@apollo/client";

export const MESSAGES_SUBSCRIPTION = gql`
  subscription Subscription {
    shareMessage {
      from
      to
      content
      createdAt
    }
  }
`;

export const ADMIN_ONLINE_SUBSCRIPTION = gql`
  subscription AdminOnline {
    adminOnline {
      token
    }
  }
`;
