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
    getDeliverMethod {
      _id
      name
      image
      price
    }
  }
`;
