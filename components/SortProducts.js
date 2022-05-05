import React from "react";
import { useRouter } from "next/router";

function SortProducts() {
  const router = useRouter();

  const handleChange = (e) => {
    filter(e.target.value);
  };

  const filter = (sort) => {
    const pathname = router.asPath.split("?")
      ? router.asPath.split("?")[0]
      : router.asPath;
    const q = {
      ...router.query,
    };
    delete q.slug;
    delete q.sort;
    const _sort = sort ? { sort: sort } : {};
    router.push(
      {
        pathname: pathname,
        query: { ...q, ..._sort },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <select
      className="px-2 esm-5 md:pr-10 h-full lg:h-10 leading-10 bg-white border-2"
      onChange={handleChange}
      defaultValue=""
    >
      <option value="">Doporučujeme</option>
      <option value="-price">Nejvyšší ceny</option>
      <option value="price">Nejnižší ceny</option>
      <option value="-rating">Hodnocení</option>
    </select>
  );
}

export default SortProducts;
