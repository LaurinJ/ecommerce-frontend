import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
  query GetProducts($skip: Int) {
    getProducts(skip: $skip) {
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
    getCountPages {
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
