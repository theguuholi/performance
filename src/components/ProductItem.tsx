import { memo, useCallback, useMemo } from "react";

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
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
            <button onClick={() => onAddtoWishList(product.id)}>Add to wish list</button>
        </div>
    )
}


// Evita criar o component se nenhuma propriedade tenha sido alterada
// 1. Criar uma nova versao do component, 
export const ProductItem = memo(ProductItemComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
});

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

