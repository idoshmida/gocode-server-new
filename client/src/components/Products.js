import Product from './Product'



function Products({productArr}) {

 

  return (
      <section className="products">
      
          {productArr.map((objElement) => //אפשר לפרק דסטרקטצרינג
          <Product 
              key={objElement._id} 
              image={objElement.image} 
              category={objElement.category} 
              description={objElement.description} 
              price={objElement.price} 
              title={objElement.title} 
              _id={objElement._id} 
          /> 
          )}     
        </section>
    );
  }
  
  export default Products;