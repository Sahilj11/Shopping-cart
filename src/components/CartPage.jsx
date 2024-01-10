export function CartPage({ deleteProduct, cart }) {
    // we need to get the key value from the button clicked
    const handleDelete = (identity) => {
        deleteProduct(cart.cart.find((el) => el.id == identity));
    };
    console.log(cart)
    return (
        <>
        <span>{cart.cartValue}</span>
            {cart.cart.map((el) => (
                <CartItem
                    key={el.id}
                    imgUrl={el.image}
                    price={el.price}
                    title={el.title}
                    quantity={el.quantity}
                    deleteProduct={handleDelete}
                    identity={el.id}
                />
            ))}
        </>
    );
}

export function CartItem({
    imgUrl,
    price,
    title,
    deleteProduct,
    identity,
    quantity,
}) {
    return (
        <>
        <div className="flex m-3 border-2 w-1/2 p-3 justify-evenly">
            <img src={imgUrl} alt="" height="200px" width="200px" />
            <div className="flex-col flex justify-center">
                <p className="m-3">{title}</p>
                <p className="m-3">Quantity: {quantity}</p>
                <p className="m-3">Price:- ${price}</p>
            </div>
            <button
                onClick={() => deleteProduct(identity)}
                className="w-2 border-black"
            >
                X
            </button>
        </div>
        </>
    );
}
