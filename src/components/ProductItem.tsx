// import { memo, useCallback, useMemo, useState, lazy } from "react"; Lazy se usar React
import dynamic from "next/dynamic";
import { memo, useCallback, useMemo, useState } from "react";
import { AddProductToWishListProps } from "./AddProductToWishList";

// import { AddProductToWishList } from "./AddProductToWishList";
const AddProductToWishList = dynamic<AddProductToWishListProps>(
  () => {
    return import("./AddProductToWishList").then(
      (mod) => mod.AddProductToWishList
    );
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);
interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
  };
  onAddtoWishList: (id: number) => void;
}

// shallow compare -> comparacao rasa
function ProductItemComponent({ product, onAddtoWishList }: ProductItemProps) {
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.price}</strong>
      {/* <button onClick={() => onAddtoWishList(product.id)}>
        Add to wish list
      </button> */}
      <button onClick={() => setIsAddingToWishList(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddProductToWishList={() => onAddtoWishList(product.id)}
          onRequestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
}

// Evita criar o component se nenhuma propriedade tenha sido alterada
// 1. Criar uma nova versao do component,
export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);

// Quando usar o memo:
// 1. pure funcional components
// 2. renders to oftern
// 3. re-renders with the same props
// 4. Medio para grande

// useMemo
// 1. Calculos pesados (nao use calculos simples)
// 2. igualdade referencial (quando repassa para um componente filho)

// useCallback
// 1. usado para memorizar uma funcao, nao um valor
