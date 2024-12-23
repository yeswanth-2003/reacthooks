import { useLocation } from 'react-router-dom';



function ProductDetail(){
    const location = useLocation();
    const productData = location.state;

  
    return (
        <div>
          <h1>Product Detail for: {productData.Product}</h1>
          <p>Make: {productData.Make}</p>
          <p>Year: {productData.Year}</p>
        </div>
        
      );
}

export default ProductDetail