import React from 'react'
import './Home.css';
import Product from './Product.js'
function Home() {
  return (
    <div className='home'>
    <div className='home_container'>
    <img className ="home_img" src='https://images-eu.ssl-images-amazon.com/images/G/31/img20/2022/under1999/1999_Tallhero_3000x1200_n._CB636771823_.jpg'
    alt=''/>
      <div className='home_row'>
          <Product 
          title='The PlayStation' 
          price={150} 
          image='https://images-eu.ssl-images-amazon.com/images/I/519OP9zM+sL._AC_UL225_SR225,160_.jpg' 
          rating={2} 
          />

<Product 
          title='The Junle Book'
          price={299} 
          image='https://images-eu.ssl-images-amazon.com/images/I/51145PXMgYL._AC_SX184_.jpg' 
          rating={4} 
          />

<Product 
          title='The Jungle BookAmazfit GTS 4 Mini Smart Watch, Alexa Built-in Fitness Tracker' 
          price={150} 
          image='https://m.media-amazon.com/images/I/61o5+WW6P7L._SY450_.jpg' 
          rating={2} 
          />


          </div>


          <div className='home_row'>
          <Product 
          title='Apple iPhone 11 (128GB)' 
          price={'500'} 
          image='https://m.media-amazon.com/images/I/71QE00iB9IL._SX466_.jpg' 
          rating={1} 
          />

<Product 
          title='IndoPrimo Mens Regular Fit Casual Shirt' 
          price={200} 
          image='https://m.media-amazon.com/images/I/71yM0xUAetL._UX679_.jpg' 
          rating={2} 
          />

<Product 
          title='Zebronics Zeb-Companion' 
          price={200} 
          image='https://m.media-amazon.com/images/I/61OQT49xFjS._AC_UL320_.jpg' 
          rating={2} 
          />
          </div>
      
      
 
    </div>
    </div>
  )
}

export default Home