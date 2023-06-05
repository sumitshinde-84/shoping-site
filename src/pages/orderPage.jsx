import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import AddressForm from "../components/addressForm";
import "./style/Order.css";
import loaderImg from "../images/loader.gif";
import Dispatch from "../components/dispatch";
import CheckOutMain from "../components/checkoutMain";

const Order = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [addressFormData, setFormData] = useState(null);

  useEffect(() => {
    const nav = document.querySelector("nav");

    const loaderTimeout = setTimeout(() => {
      setIsLoading(false);
      nav.style.display = "none";
    }, 3000);

    return () => {
      clearTimeout(loaderTimeout);
      nav.style.display = "flex";
    };
  }, []);

  const getAddressFormData = (formData) => {
    if (formData === null) {
      setFormData(null);
    } else {
      setFormData(formData);
    }
    console.log(formData);
  };

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
        <div className="order-loader">
          <img src={loaderImg} alt="loaderImg" />
        </div>
      ) : (
        <>
          <div className="Process">
            {addressFormData === null ? (
              <AddressForm getAddressFormData={getAddressFormData} />
            ) : (
              <Dispatch
                addressFormData={addressFormData}
                getAddressFormData={getAddressFormData}
              />
            )}
          </div>
          <div className="CartInfo">
              <CheckOutMain/>
          </div>
        </>
      )}
    </div>
  );
};

export default Order;
