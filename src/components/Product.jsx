import { AddToCart } from "./style/AddToCart.style";
import { CatalogueContainer } from "./style/CatalogueContainer.style";
import { Link } from "react-router-dom";
import { ProductDesc } from "./ProductDesc";
export function Product({
    id,
    title,
    price,
    imgUrl,
    desc,
    addingProduct,
    dataProd,
}) {
    const dyUrl = `/productdetail/${id}`;
    const testFun = () => {
        <ProductDesc />;
    };
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
                <Link to={dyUrl} onClick={testFun}>
                    <p style={{ gridArea: "title", padding: "10px" }}>{title}</p>
                </Link>
                <p style={{ gridArea: "price", padding: "10px" }}>Price:- ${price}</p>
                <AddToCart
                    gridlocation="buyBt"
                    productId={id}
                    addingProduct={addingProduct}
                    dataProd={dataProd}
                ></AddToCart>
            </CatalogueContainer>
        </>
    );
}
export function ButtonCart({ className, addingProduct , dataProd}) {
    return (
        <button
            className={className}
            onClick={()=>addingProduct(dataProd)}
        >
            Add to Cart
        </button>
    );
}
