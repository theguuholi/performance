import { useMemo } from "react";
import { AutoSizer, List, ListRowRenderer } from "react-virtualized";
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

export function SearchResults({
  results,
  totalPrice,
  onAddtoWishList,
}: SearchResultsProps) {
  // const totalPrice = useMemo(() => {
  //   return
  // }, [results])

  // const rowRendered: ListRowRenderer = ({index, key, style}) => {
  //   return (
  //     <div key={key} style={style}>
  //       <ProductItem product={results[index]} onAddtoWishList={onAddtoWishList} />
  //     </div>
  //   )
  // }

  return (
    <div>
      {totalPrice}
      {results.map((product) => {
        return <ProductItem key={product.id} product={product} onAddtoWishList={onAddtoWishList} />;
      })}

      {/* <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRendered}
      ></List> */}
    </div>
  );
}
