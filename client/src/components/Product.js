import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";

function Product({ _id, title, price, description, category, image }) {
  const { add } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-image">
        <img alt="" src={image} />
      </div>

      <div className="product-info">
        <div>
          {" "}
          <Link to={`/product/${_id}`}> item no.{_id} </Link>
          <br></br>
          {title}
        </div>
        <h6>{price} $</h6>
        <button
          onClick={() => {
            add({ _id, title, price, image });
          }}
        >
          add to cart
        </button>
      </div>
    </div>
  );
}

export default Product;
