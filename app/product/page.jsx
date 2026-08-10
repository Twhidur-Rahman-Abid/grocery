import { Suspense, use } from "react";
import { FilterProvider } from "./_context/filterContext.mjs";
import { FilterText } from "./_components/Client";
import SortSelect from "./_components/SortSelect";
import Filter from "./_components/Filter";
import InfiniteProductList from "./_components/InfiniteProductList";
import Search from "./_components/Search";

const ProductPage = ({ searchParams }) => {
  const { category, min, max, search } = use(searchParams);

  return (
    <div>
      <div className="my-20 px-6 flex ">
        {/* filter */}
        <FilterProvider>
          <Suspense fallback={<span>Loading</span>}>
            <FilterProduct />
          </Suspense>
          {/* Products  */}
          <Suspense fallback={<span>Loading</span>}>
            <ProductsList
              category={category}
              min={min}
              max={max}
              search={search}
            />
          </Suspense>
        </FilterProvider>
      </div>
    </div>
  );
};

export default ProductPage;

function ProductsList({ category, min, max, search }) {
  // const initialData = use(
  //   fetchProducts({ page: 1, category, search, min, max }),
  // );

  // const {
  //   data: { results: products, count, next } = {},
  //   status,
  //   message,
  // } = initialData || {};

  return (
    <div className="w-full lg:ml-6">
      {/* top bar */}
      <div className="flex items-center justify-between w-full mb-10 ">
        {/* filter */}
        <FilterText />

        {/* right */}
        <div className="flex items-center justify-end lg:justify-between gap-4 md:gap-6 flex-1 relative z-0">
          {/* total items */}
          <div className="hidden sm:flex gap-2 items-end ">
            <p className=" text-base md:text-2xl font-semibold leading-0">
              {0}
            </p>
            <p className="text-xs md:text-sm  leading-0">Items Found</p>
          </div>

          {/* select */}
          <div className="flex items-center gap-4 md:gap-6">
            <Search />
            <p className="text-xs md:text-sm ">Sort By :</p>

            <SortSelect />
          </div>
        </div>
      </div>

      <InfiniteProductList
        initialData={{}}
        category={category}
        search={search}
        min={min}
        max={max}
      />
    </div>
  );
}

async function FilterProduct() {
  const demoData = [
    { id: 1, name: "category one", product_count: 20 },
    { id: 2, name: "category two", product_count: 30 },
  ];

  return <Filter categories={demoData} max_price={4000} />;
}
