import { AddToCart } from "./style/AddToCart.style";
import { CatalogueContainer } from "./style/CatalogueContainer.style";

export function Product() {
    return (
        <>
            <CatalogueContainer>
                <img src="" alt="Image" />
                <p>This is a title</p>
                <p>Price</p>
                <AddToCart bg="blue">Add to cart</AddToCart>
            </CatalogueContainer>
        </>
    );
}
