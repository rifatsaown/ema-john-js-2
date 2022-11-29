import React from "react";

const Cart = ({cart}) => {
  return (
    <div>
      <h3>Order Summary</h3>
      <p>Select Item : {cart.length}</p>
      <p>Total Price : $</p>
    </div>
  );
};

export default Cart;
