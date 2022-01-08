import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
  query GetProducts($query: String, $skip: Int, $limit: Int) {
    getProducts(query: $query, skip: $skip, limit: $limit) {
      _id
      title
      price
      old_price
      slug
      short_description
      imgurl
      rating
      rating_sum
    }
    getCountPages(query: $query) {
      pages
    }
  }
`;

export const PAYMENT_DELIVERY_METHODS = gql`
  query GetPaymentDeliveryMethod {
    getPaymentMethod {
      _id
      name
      image
    }
    getDeliveryMethod {
      _id
      name
      image
      price
    }
  }
`;

export const GET_ORDER = gql`
  query Query($token: OrderTokenData) {
    getOrder(token: $token) {
      person {
        address {
          numberDescriptive
          postCode
          street
          village
        }
        person_detail {
          phone
          last_name
          first_name
          email
        }
      }
      order {
        deliver_method {
          price
          name
        }
        payment_method {
          name
        }
        total_price
        items {
          short_description
          title
          price
          old_price
          count
          img
        }
      }
    }
  }
`;

export const SEARCH = gql`
  query GetFilterProducts($params: FilterData) {
    getFilterProducts(params: $params) {
      title
      slug
    }
  }
`;

export const GET_FILTER_PRODUCTS = gql`
  query GetFilterProducts(
    $params: FilterData
    $query: String
    $skip: Int
    $limit: Int
  ) {
    getFilterProducts(params: $params, skip: $skip, limit: $limit) {
      _id
      title
      slug
      short_description
      price
      old_price
      rating_sum
      rating
      imgurl
    }
    getCountPages(query: $query) {
      pages
    }
  }
`;

export const GET_MESSAGES = gql`
  query GetMessages($getMessagesId: String) {
    getMessages(id: $getMessagesId) {
      from
      to
      content
      createdAt
    }
  }
`;

export const GET_ADMIN_TOKEN = gql`
  query GetAdminToken {
    getAdminToken {
      token
    }
  }
`;
