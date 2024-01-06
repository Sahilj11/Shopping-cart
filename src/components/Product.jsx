import { useSearchParams } from "react-router-dom";
import { AddToCart } from "./style/AddToCart.style";
import { CatalogueContainer } from "./style/CatalogueContainer.style";
import { Link } from "react-router-dom";
import { ProductDesc } from "./ProductDesc";
import { useState } from "react";
export function Product({ id, title, price, imgUrl, desc }) {
    const dyUrl = `/productdetail/${id}`;
    // const [prdDetail, setprdDetail] = useState(false);
    // {prdDetail && (
    //                 <ProductDesc
    //                     title={title}
    //                     price={price}
    //                     imgUrl={imgUrl}
    //                     desc={desc}
    //                 />
    //             )}
    console.log(id, title, price, imgUrl, desc);
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
                <AddToCart gridlocation="buyBt" id={id}></AddToCart>
            </CatalogueContainer>
        </>
    );
}
export function ButtonCart({ className }) {
    const getComponentInfo = () => {
        console.log("Added to Cart");
    };
    return (
        <button className={className} onClick={getComponentInfo}>
            Add to Cart
        </button>
    );
}
