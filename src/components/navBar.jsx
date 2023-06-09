import "./style/navbar.css";
import cartImg from "../images/cart.png";
import profileImg from "../images/profile.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

const Navbar = () => {
  const cart = useSelector((state) => state.cart);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const openProfile = () => {
   
    document.querySelector(".profile-component").style.display = "flex";

  
  };

  useEffect(() => {
    const emailCookie = getCookieValue("email");
    setIsAuthenticated(emailCookie !== null && emailCookie !== "");
  }, []);

  useEffect(() => {
    const handleUnload = () => {
      setIsAuthenticated(false);
    };

    window.onunload = handleUnload;

    return () => {
      window.onunload = null;
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const emailCookie = getCookieValue("email");
      const newIsAuthenticated = emailCookie !== null && emailCookie !== "";

      if (newIsAuthenticated !== isAuthenticated) {
        setIsAuthenticated(newIsAuthenticated);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [isAuthenticated]);

  const OpenCheckCart = () => {
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
        {!isAuthenticated && (
          <Link className="NavLink" to="/Signup">
            Signup
          </Link>
        )}
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
      {isAuthenticated && (
        <div onClick={openProfile} className="profile">
          <img src={profileImg} alt="profile" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
