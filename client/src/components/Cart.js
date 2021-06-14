import "./Cart.css";
import React, { useContext } from "react";
import { CartContext } from "../App";
function Cart() {
  const { remove, cart } = useContext(CartContext);
  // const [countState, setCountState] = useState(0);

  function getTotal(cart) {
    const total = cart.reduce((totalcost, item) => totalcost + item.price, 0);
    return total.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  const filteredCart = cart
    .filter(
      (obj, indexcart, arr) =>
        arr.findIndex((t) => t.title === obj.title) === indexcart
    )
    .map((obj, index) => (
      <div key={index} className="cart-item">
        <img alt="" height="42" width="42" src={obj.image}></img>
        <div>
          item no.{obj._id} : {obj.title} price: {obj.price}$ {obj.count}
        </div>
        <button
          onClick={() => {
            const a = cart.findIndex((e) => e._id === obj._id); //משווה אינדקס של עגלה לאינדקס של עגלה מפולטרת
            remove(cart[a]);
          }}
        >
          remove
        </button>
        <div>
          number of items:{" "}
          {cart.filter((cartItem) => cartItem._id === obj._id).length}
        </div>
        <hr></hr>
        <br></br>
      </div>
    ));

  return (
    <div>
      <p>this is the cart wooho herouku:</p> <br></br>
      <div>Total Items: {cart.length}</div>
      <div>Total Cost: {getTotal(cart)}$ </div>
      <div>
        {/*why filteredCart is rendered without its beein in state????? < */}
        {filteredCart}
      </div>
    </div>
  );
}

export default Cart;
