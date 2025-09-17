import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import products from "./data/products";
import './App.css'
import { Link } from "react-router-dom";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
    alert("Item Added to Cart");
  };

  return (
    <>
<nav className="navbar bg-warning p-0">
        <ul>
            <button className='btn btn-white m-1'><li className='nav-item mt-2'><Link to="/">Home</Link></li></button>
            <button className='btn btn-white m-1'><li className='nav-item mt-2'><Link to="/about">About</Link></li></button>
            <button className='btn btn-white m-1'><li className='nav-item mt-2'><Link to="/contact">Contact</Link></li></button>
            <button className='btn btn-white m-1'><li className='nav-item mt-2'><Link to="/items">Items</Link></li></button>
           
        </ul>
       </nav>

       <br></br>
       <br></br>

    <div style={{ padding: "20px" }}>

      

      <h1>Checkout the required items for office</h1>
      <br />
      <br />
      <div style={styles.productList}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
      <br />
      <Cart cartItems={cartItems}/>
    </div>
    <br />
      

       <footer>
        <center>
        <h3 style={{margin:"20px"}}>CartToDrop</h3>
        <p style={{margin:"20px"}}>An Ecommerce Webpage done with ReactJS</p>
        <p style={{margin:"20px"}}>www.example.com</p>
        <p  >Contact us in SocialMedia</p>
        <div className=' mag col-md-6 text-md-end '>
          <i>Facebook</i>
          <i>Linkedin</i>
          <i>Instagram</i>
        </div>
        <br />
        <p style={{textAlign:"center"}}> Dial us:  +915562233554</p>
        </center>
       </footer>
    </>
  );
};

const styles = {
   productList: {
        display: "grid",
        marginLeft:"95px",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "15px",
  },
};


export default App;