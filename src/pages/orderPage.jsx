import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import AddressForm from "../components/addressForm";
import "./style/Order.css";
import loaderImg from "../images/loader.gif";
import Dispatch from "../components/dispatch";
import CheckOutMain from "../components/checkoutMain";
import { useSelector } from "react-redux";
import { removeAll } from "../store/cartSlice";
import { useDispatch } from "react-redux";

const Order = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [addressFormData, setFormData] = useState(null);  
  const [totalPrice, setTotalPrice] = useState(null)
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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

  const emptyCart =()=>{
    dispatch(removeAll([]))
  }

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

  const postOrder= async (event)=>{
    
    event.preventDefault();

    try {
      const response = await fetch('https://inventryapp-production.up.railway.app/catalog/placeorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(
          {
            username:getCookieValue("email"),
            addressFormData,
            cart:[...cart],
            totalPrice,
            status:'order placed',
            paymentStatus:'paid'
          
      })
      });

      if (response.ok) {
       
        console.log('Order placed');
        localStorage.setItem('cart',JSON.stringify([]))
        emptyCart()
        navigate('/orders')
      } else {
        
        console.log('Failed');
      }
    } catch (error) {
      console.error('Error occurred while registering:', error);
    }
    console.log({
      username:localStorage.getItem('email'),
      addressFormData,
      cart:[...cart],
      totalPrice,
      status:'order placed',
      paymentStatus:'paid'
    
})

  }

  const getTotalPriceOfItems = (totalPriceOfItems) => {
    
      setTotalPrice(totalPriceOfItems);
   
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

              
                postOrder={postOrder}
                addressFormData={addressFormData}
                getAddressFormData={getAddressFormData}
              />
            )}
          </div>
          <div className="CartInfo">
              <CheckOutMain getTotalPriceOfItems={getTotalPriceOfItems}/>
          </div>
        </>
      )}
    </div>
  );
};

export default Order;
