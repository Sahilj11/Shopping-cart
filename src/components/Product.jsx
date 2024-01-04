import { AddToCart } from "./style/AddToCart.style";
import { CatalogueContainer } from "./style/CatalogueContainer.style";

export function Product({title,price,imgUrl}) {
    return (
        <>
            <CatalogueContainer>
                <img src={imgUrl} alt="Image" width="50%" height="50%"/>
                <p>{title}</p>
                <p>Price:- ${price}</p>
                <AddToCart>Add to cart</AddToCart>
            </CatalogueContainer>
        </>
    );
}
