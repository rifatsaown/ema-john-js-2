import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping+ product.shipping;
  }
  let tax = (total * 0.1).toFixed(2);

  return (
    <div className="cart">
      <h2>Order Summary</h2>
      <p>Select Item : {cart.length}</p>
      <p>Total Price : ${total}</p>
      <p>Total Shipping : ${shipping}</p>
      <p>Total Tax : ${tax}</p>
      <h4>Grand Total : </h4>
    </div>
  );
};

export default Cart;
