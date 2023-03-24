import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  results: Array<{
    id: number;
    price: number;
    title: string;
  }>;
  onAddtoWishList: (id: number) => void;
}

export function SearchResults({ results, onAddtoWishList }: SearchResultsProps) {
  const totalPrice = useMemo(() => {
    return results.reduce((total, product) => {
        return total + product.price;
      }, 0);
  }, [results])

  return (
    <div>
      {totalPrice}
      {results.map((product) => {
        return <ProductItem key={product.id} product={product} onAddtoWishList={onAddtoWishList} />;
      })}
    </div>
  );
}
