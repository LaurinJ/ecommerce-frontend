import { gql } from "@apollo/client";

export const GET_PRODUCT = gql`
  query GetProduct($slug: String!) {
    getProduct(slug: $slug) {
      _id
      title
      description
      short_description
      code
      price
      old_price
      images
      imgurl
      rating
      rating_sum
    }
  }
`;

export const GET_PRODUCTS = gql`
  query Query($limit: Int) {
    getProducts(limit: $limit) {
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
  }
`;

export const PAYMENT_DELIVERY_METHODS = gql`
  query GetPaymentDeliveryMethod {
    getPaymentMethods {
      _id
      name
      image
    }
    getDeliveryMethods {
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

export const GET_USER_ORDERS = gql`
  query GetUserOrders($skip: Int, $limit: Int) {
    getUserOrders(skip: $skip, limit: $limit) {
      pages
      orders {
        total_price
        state
        orderNumber
        createdAt
        is_paid
      }
    }
  }
`;

export const SEARCH = gql`
  query getFilterProducts($params: FilterData) {
    getFilterProducts(params: $params) {
      products {
        title
        slug
      }
    }
  }
`;

export const GET_FILTER_PRODUCTS = gql`
  query GetFilterProducts($params: FilterData, $limit: Int, $skip: Int) {
    getFilterProducts(params: $params, limit: $limit, skip: $skip) {
      products {
        _id
        title
        slug
        short_description
        price
        old_price
        rating
        rating_sum
        imgurl
      }
      pages
    }
  }
`;

export const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetProductsByCategory($skip: Int, $limit: Int, $params: FilterData) {
    getProductsByCategory(skip: $skip, limit: $limit, params: $params) {
      products {
        _id
        title
        slug
        short_description
        price
        old_price
        rating
        rating_sum
        imgurl
      }
      pages
    }
  }
`;

export const GET_FAVORITE_PRODUCTS = gql`
  query Query($skip: Int, $limit: Int) {
    getFavoriteProducts(skip: $skip, limit: $limit) {
      products {
        _id
        title
        slug
        short_description
        price
        old_price
        imgurl
      }
      pages
    }
  }
`;

export const GET_CATEGORIES = gql`
  query GetCategories($limit: Int, $skip: Int) {
    getCategories(limit: $limit, skip: $skip) {
      name
      slug
    }
  }
`;
export const GET_REVIEWS = gql`
  query GetReviews($productId: ID!, $skip: Int, $limit: Int) {
    getReviews(product_id: $productId, skip: $skip, limit: $limit) {
      reviews {
        createdAt
        rating
        content
        user {
          name
        }
      }
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

export const CHECK_RESET_TOKEN = gql`
  query CheckResetPasswordToken($token: String!) {
    checkResetPasswordToken(token: $token) {
      status
      email
    }
  }
`;
