export interface AddProductToWishListProps {
    onAddProductToWishList: () => void
    onRequestClose: () => void
}

export function AddProductToWishList({onAddProductToWishList, onRequestClose}: AddProductToWishListProps) {
    return (
        <span>
            Deseja adicionar producto
            <button onClick={onAddProductToWishList}>Sim</button>
            <button onClick={onRequestClose}>Nao</button>
        </span>
    )
}