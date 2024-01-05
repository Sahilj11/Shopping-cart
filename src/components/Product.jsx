import { AddToCart } from "./style/AddToCart.style";
import { CatalogueContainer } from "./style/CatalogueContainer.style";

export function Product({ id,title, price, imgUrl }) {
    return (
        <>
            <CatalogueContainer>
                <img
                    style={{ gridArea: "img" }}
                    src={imgUrl}
                    alt="Image"
                    width="70%"
                    height="70%"
                />
                <p style={{ gridArea: "title", padding: "10px" }}>{title}</p>
                <p style={{ gridArea: "price", padding: "10px" }}>Price:- ${price}</p>
                <AddToCart gridlocation="buyBt" id={id}></AddToCart>
            </CatalogueContainer>
        </>
    );
}
export function ButtonCart({ className,id }) {
    const getComponentInfo = (e)=>{
        console.log(e.target.id);
    }
    return <button className={className} onClick={getComponentInfo} id={id}>Add to Cart</button>;
}
