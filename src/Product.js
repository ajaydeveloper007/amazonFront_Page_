import React from 'react';
import "./Product.css";


function Product({title,image,price,rating}) {
  return (
    <div className="product"> 
        <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small> Rs </small>
                <strong>{price}</strong>
              </p>
        <div className="product_rating">
          {Array(rating)
          .fill()
          .map((_,i)=> (
          <p>⭐</p>
          ))}
          
          </div>
      </div>
      <img src='https://images-eu.ssl-images-amazon.com/images/I/51145PXMgYL._AC_SX184_.jpg'
       alt=" "/>
    <button>Add to basket</button>
    </div>
  )
}

export default Product