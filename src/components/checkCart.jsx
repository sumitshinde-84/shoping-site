import React, { useState, useEffect } from "react";
import delteIcon from "../images/delete.png";
import "./style/checkcart.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, remove } from "../store/cartSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const CheckCart = () => {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getCookieValue = (name) => {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null; 
  };

  const handleCheckout = () => {
    const email = getCookieValue('email');
    if (email !== null) {
    
      navigate('/checkout');
    } else {
     
      navigate('/signup');
    }
  };
  const CloseCart = () => {
    const path = window.location.pathname;
    let reference = path.split("/")[1];
    if (reference === "shoping-site") {
      reference = "home";
    } else if (reference === "Shop") {
      reference = "shop-detail";
    } else if (reference === "shop") {
      reference = "detail-main";
    }else if (reference === "orders") {
      reference = "manageOrders";
    }
    document.querySelector(".CheckCart").style.right = "-350px";
    document.querySelector(`.${reference}`).style.filter = "none";
    document.querySelector(`nav`).style.filter = "none";
  };

  const increaseQuantityHandler = (item) => {
    dispatch(increaseQuantity(item));
  };

  const decreaseQuantityHandler = (item) => {
    dispatch(decreaseQuantity(item));
  };

  const removeItemHandler = (item) => {
    dispatch(remove(item));
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    return totalPrice;
  };

  return (
    <div className="CheckCart">
      <div onClick={CloseCart} className="closeCart">
        X
      </div>
      <div className="cartItems">
        {cart.map((item) => (
          <div className="item" key={uuidv4()}>
            <img
              className="item-image"
              src={`https://inventryapp-production.up.railway.app/images/${item.image}`}
              alt="image"
            />
            <div className="item-detail">
              <p className="item-name">{item.name}</p>
              <p className="item-price">Price: {item.price}$</p>
              <div className="item-size">{item.size}</div>
              <div className="item-quantity">
                Quantity:
                <button onClick={() => decreaseQuantityHandler(item)}>-</button>
                <span> {item.quantity}</span>
                <button onClick={() => increaseQuantityHandler(item)}>+</button>
              </div>
            </div>
            <img
              className="deleteIcon"
              onClick={() => removeItemHandler(item)}
              src={delteIcon}
              alt="deleteIcon"
            />
          </div>
        ))}
      </div>
      <div className="totalMain">
      <p className="summery">Summery</p>

      <p className="subtotal">Subtotal:<span>{calculateTotalPrice()}$</span></p>
      <p className="delivery-charges">Delivery charges:<span>Free</span></p>
      <hr />
      <p className="totalprice">Total: <span>{calculateTotalPrice()}</span>$</p>
      <hr />
      <div onClick={()=>{CloseCart();handleCheckout()}} className="checkout">Checkout</div>
      </div>
      
    </div>
  );
};

export default CheckCart;
