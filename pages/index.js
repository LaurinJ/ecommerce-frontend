// import Layout from "../components/Layout";
import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "../apollo-client";
import Slider from "../components/Slider";
import Loader from "../components/Loader";
import ProductCard from "../components/ProductCard";
import { GET_PRODUCTS } from "../queries/Query";

export default function index() {
  const { data, loading } = useQuery(GET_PRODUCTS, {
    notifyOnNetworkStatusChange: true,
    variables: { limit: 5 },
  });

  const products = data.getProducts;

  return (
    <>
      {loading && <Loader />}
      <Slider />
      <div className="flex flex-col mx-auto max-w-[1430px] px-[30px] mt-5">
        <h3 className=" font-bold text-xl mb-5">NEJPRODÁVANĚJŠÍ</h3>
        <div className="grid grid-cols-1 esm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mb-7">
          {products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
        <h3 className=" font-bold text-xl mb-5">SLEVY PRO VÁS</h3>
        <div className="grid grid-cols-1 esm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mb-7">
          {products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
        <h3 className=" font-bold text-xl mb-5">DOPORUČUJEME</h3>
        <div className="grid grid-cols-1 esm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mb-7">
          {products.map((product, i) => (
            <ProductCard product={product} key={i} />
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GET_PRODUCTS,
    variables: { limit: 5 },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}
