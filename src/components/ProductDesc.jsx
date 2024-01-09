import { useParams } from "react-router-dom";
import { DetailCont, ProductDtContainer } from "./style/ProductDesc.style";
import { AddToCart } from "./style/AddToCart.style";
import { useEffect, useRef, useState } from "react";

export function ProductDesc({ data, loading, error ,addingProduct}) {
    const [quantity, setQuantity] = useState(0);
    const inputRef = useRef(null);
    
    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.value = quantity;
        }
    }, [quantity]);
    const incStyle = {
        width: "20px",
        height: "30px",
    };
    const decStyle = {
        width: "20px",
        height: "30px",
    };
    const { productid } = useParams();
    const handlingQuantity = (e) => {
        setQuantity(parseInt(e.target.value));
    };
    const handlingInc = () => {
        setQuantity(quantity + 1);
        console.log(quantity);
    };
    const handlingdec = () => {
        if (quantity != 0) {
            setQuantity(quantity - 1);
            console.log(quantity);
        }
    };
    if (loading) return <h2>Loading...</h2>;
    if (error) return <h2>Error Occurred</h2>;
    const prdData = data.find((el) => el.id == productid);
    //TODO:first need to calculate the total price of a order based on the quantity purchased
    return (
        <ProductDtContainer>
            <img
                src={prdData.image}
                alt="Product Image"
                height="400px"
                width="400px"
                style={{ gridArea: "img" }}
            />
            <DetailCont>
                <p style={{ gridArea: "title" }} className="font-extrabold">
                    {prdData.title}
                </p>
                <p style={{ gridArea: "desc" }}>{prdData.description}</p>
                <p style={{ gridArea: "price" }} className="font-extrabold ">
                    Price:- ${prdData.price}
                </p>
                <div style={{ gridArea: "buyBt", display: "flex" }}>
                    <button style={decStyle} onClick={handlingdec}>
                        -
                    </button>
                    <input
                        type="number"
                        ref={inputRef}
                        id="quantityvalue"
                        placeholder="Enter Quantity"
                        style={{ textAlign: "center" }}
                        onChange={handlingQuantity}
                    />
                    <button style={incStyle} onClick={handlingInc}>
                        +
                    </button>
                </div>
                <AddToCart gridArea="buyBt" productId={prdData.id} addingProduct={addingProduct} dataProd={prdData}/>
            </DetailCont>
        </ProductDtContainer>
    );
}
