import { useContext, useEffect } from "react";
import { Product } from "..";
import { Link } from 'react-router-dom';


function Context(){
const products = useContext(Product)

useEffect(()=>{
    console.log(products)
})


return(
    <div style={{padding:'100px'}}>
     {products.map((item, index) => (
        <div key={index}>
          <h2>{item.Product}</h2>
          <p>{item.Make}</p>
          <p>{item.Year}</p>
          {/* <Link to={`/product/${item.Product}`} state={item}> <button> SEE ITEM</button></Link> */}
        </div>
      ))}
    </div>
)
}


export default Context