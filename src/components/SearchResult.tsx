import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddtoWishList: (id: number) => void;
  totalPrice: number;
}

export function SearchResults({ results, totalPrice, onAddtoWishList }: SearchResultsProps) {
  // const totalPrice = useMemo(() => {
  //   return 
  // }, [results])

  return (
    <div>
      {totalPrice}
      {results.map((product) => {
        return <ProductItem key={product.id} product={product} onAddtoWishList={onAddtoWishList} />;
      })}
    </div>
  );
}
