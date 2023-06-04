import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import AddressForm from "../components/addressForm";
import "./style/Order.css";
import loaderImg from "../images/loader.gif"
const Order = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    const nav = document.querySelector("nav");



    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
      nav.style.display = "flex";
    }, 3000);

    return () => {
      clearTimeout(loaderTimeout);
      nav.style.display = "flex";
    };
  }, []);

  useEffect(() => {

    if (!isLoading) {

      gsap.to(".order", { opacity: 1, duration: 1 });
      const nav = document.querySelector("nav");
      nav.style.display = "none";

    }
  }, [isLoading]);

  return (
    <div className={`order ${isLoading ? "loading" : ""}`}>
      {isLoading ? (
        <div className="loader"><img src={loaderImg} alt="loaderImg" /></div>
      ) : (
        <>
          <div className="Process">
            <AddressForm />
          </div>
          <div className="CartInfo"></div>
        </>
      )}
    </div>
  );
};

export default Order;
