import "./style/navbar.css";
import cartImg from "../images/cart.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
const Navbar = () => {
  const cart = useSelector((state) => state.cart);

  const OpenCheckCart = () => {

     

      const path = window.location.pathname; 
    let reference = path.split('/')[1];
      if(reference=='shoping-site'){
        reference='home'
      }else if(reference=='Shop'){
        reference='shop-detail'
      }else if(reference=='shop'){
        reference='detail-main'
      }
      document.querySelector(".CheckCart").style.right = "0";
      document.querySelector(`.${reference}`).style.filter = "blur(5px)";
      document.querySelector(`nav`).style.filter = "blur(5px)";
      
   
    
  };

  return (
    <nav>
      <Link className="NavLink" to="/shoping-site/">
        <p className="logo">ronex</p>
      </Link>
      <div className="navItems">
        <Link className="NavLink" to="/Product">
          Product
        </Link>
        <Link className="NavLink" to="/About">
          About
        </Link>
        <Link className="NavLink" to="/Contact">
          Contact
        </Link>
        <Link className="NavLink" to="/Signup">
          Signup
        </Link>
      </div>

      <div className="order-sect">
        <Link className="NavLink" to="/Shop">
          <button className="order-button">Order</button>
        </Link>
        <img 
          onClick={OpenCheckCart}
          className="cart"
          src={cartImg}
          alt="cart"
        />
        <div className="itemCount">{cart.length}</div>
      </div>
    </nav>
  );
};

export default Navbar;
