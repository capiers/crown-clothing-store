import React from "react";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-popup.styles.scss";

const CartPopup = () => (
  <div className="cart-popup">
    <div className="cart-items" />
    <CustomButton>GOT TO CHECKOUT</CustomButton>
  </div>
);

export default CartPopup;
