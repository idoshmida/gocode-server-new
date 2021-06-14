import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

function ProductPage() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  function fetchProdPage() {
    fetch(`api/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }

  useEffect(() => {
    fetchProdPage();
  }, []);
  return (
    <div>
      Product Number :{id}
      <div>
        {" "}
        Title: {product.title}
        <br></br> Price: {product.price}$
      </div>
      <div className="product-image">
        <img alt="" src={product.image} />
      </div>
    </div>
  );
}

export default ProductPage;
