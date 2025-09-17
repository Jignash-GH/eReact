import React from "react";
 

const Cart = ({ cartItems }) => {
  return (
    <div style={styles.cart}>
      <h2>Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} style={styles.cartItem}>
            <span>{item.name}</span>
            <span>${item.price}</span>
          </div>
        ))
      )}
  
    </div>
  );
};

const styles = {
  cart: {
    border: "1px solid #ccc",
    padding: "16px",
    marginTop: "20px",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "5px 0",
  },
};

export default Cart;