const Cart = ({cart}) => {
    return (
        <div>
            <h5>Cart Added: {cart.length} Items</h5>
            <div>
                {
                    cart.map(bottle=> <img key={bottle.id} className="bottolCartImg" src={bottle.img} alt="" />
                    )
                }
            </div>
        </div>
    );
};

export default Cart;