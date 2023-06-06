import React, { useState, useEffect } from "react";
import delteIcon from "../images/delete.png";
import "./style/checkOutMain.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, decreaseQuantity, remove } from "../store/cartSlice";
import { Link } from "react-router-dom";

const CheckOutMain = ({ getTotalPriceOfItems }) => {
  const cart = useSelector((state) => state.cart);
  const [totalPriceOfItems, setTotalPriceOfItems] = useState(null);

  
  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      cart.forEach((item) => {
        totalPrice += item.quantity * item.price;
      });
      setTotalPriceOfItems(totalPrice);
    };

    calculateTotalPrice();
  }, [cart]);

  useEffect(()=>{
    getTotalPriceOfItems(totalPriceOfItems);
  },[totalPriceOfItems])

  return (
    <div className="CheckCartMain">
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
              <div className="total-per-item-price">
                {item.quantity * item.price}$
              </div>
              <div className="item-quantity">
                Quantity:
                <span> {item.quantity}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="coupon-form-total-sect">
        <form action="" className="discount-form">
          <input
            type="text"
            className="discount-code-input"
            name="discount-code"
            placeholder="Discount Code"
          />
          <button type="submit">Apply</button>
        </form>
        <div className="totalMain">
          <p className="summery">Summary</p>
          <p className="subtotal">
            Subtotal:<span>{totalPriceOfItems}$</span>
          </p>
          <p className="delivery-charges">
            Delivery charges:<span>Free</span>
          </p>
          <hr />
          <p
            className="totalprice"
            onClick={() => {
             
            }}
          >
            Total: <span>{totalPriceOfItems}$</span>
          </p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default CheckOutMain;
