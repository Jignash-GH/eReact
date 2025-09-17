

import React from "react";
import Cart from "./Cart";

const ProductCard = ({ product, addToCart }) => {
  return (
    <>
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button className="btn-kayer" onClick={() => addToCart(product)}>Add to Cart</button>
     
    </div>
    </>
  );
};

const styles = {
  card: {
  
    marginLeft:"90px",
    display: "grid",
    gridTemplateRows: "1fr 1fr",
    alignItems: "center",
    justifyItems: "center",
    
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "8px",

    width: "200px",
    height:"350px",
    textAlign: "center",
  
  },
  image: {
    width: "100%",
    height: "auto",
  },
};

export default ProductCard;