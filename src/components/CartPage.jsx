export function CartPage({ cartValue, deleteProduct }) {
    // we need to get the key value from the button clicked
    const handleDelete = (identity)=>{
          deleteProduct(cartValue.find((el)=> el.id == identity))
    }
    return (
        <>
            {cartValue.map((el) => (
                <CartItem key={el.id} imgUrl={el.image} price={el.price} title={el.title} deleteProduct={handleDelete} identity={el.id} />
            ))}
        </>
    );
}

export function CartItem({ imgUrl, price, title, deleteProduct, identity }) {
    return (
        <div className="flex m-3">
            <img src={imgUrl} alt="" height="200px" width="200px" />
            <div >
                <p>{title}</p>
                <p>Price:- {price}</p>
            </div>
            <button onClick={() => deleteProduct(identity)}>X</button>
        </div>
    );
}
