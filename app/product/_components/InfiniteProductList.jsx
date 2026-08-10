"use client";

import { useEffect, useRef, useState } from "react";

import { useFilter } from "../_context/filterContext.mjs";
import ProductCard from "@/app/_components/ProductCard";
const demoProduct = [
  {
    name: "Demo",
    price: 100,
  },
  {
    name: "Demo",
    price: 100,
  },
];

export default function InfiniteProductList({
  initialData,
  category,
  search,
  min,
  max,
}) {
  // const [products, setProducts] = useState(initialData?.data?.results || []);
  const [products, setProducts] = useState(demoProduct);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(!!initialData?.data?.next);
  const loaderRef = useRef(null);
  const isLoading = useRef(false);
  const { sort } = useFilter();
  console.log(products);

  // Reset on filter change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setProducts(initialData?.data?.results || []);
    setCurrentPage(1); // Reset to first page
    setHasMore(!!initialData?.data?.next);
  }, [initialData]);

  const loadMore = async () => {
    if (isLoading.current || !hasMore) return;

    isLoading.current = true;
    const nextPage = currentPage + 1;

    const data = await fetchProducts({
      page: nextPage,
      category,
      search,
      min,
      max,
    });

    if (data?.data?.results?.length > 0) {
      setProducts((prev) => [...prev, ...data.data.results]);
      setCurrentPage(nextPage);
      setHasMore(!!data.data.next);
    } else {
      setHasMore(false);
    }

    isLoading.current = false;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) loadMore();
      },
      { threshold: 1 },
    );

    const currentLoader = loaderRef.current;
    if (currentLoader) observer.observe(currentLoader);

    return () => {
      if (currentLoader) observer.unobserve(currentLoader);
    };
  }, [loaderRef.current]);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
        {products
          ?.toSorted((a, b) => {
            if (sort === "a-z") {
              return a.name.localeCompare(b.name);
            }
            if (sort === "z-a") {
              return b.name.localeCompare(a.name);
            }
            if (sort === "h-l") {
              return b.price - a.price;
            }
            if (sort === "l-h") {
              return a.price - b.price;
            }
            return 0;
          })
          ?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>

      {hasMore && (
        <div ref={loaderRef} className="text-center py-4 text-gray-500">
          <span>Loading...</span>
        </div>
      )}
    </div>
  );
}
