import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style/productDetail.css";
import { DoubleSide } from "three";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://inventryapp-production.up.railway.app/catalog/products/send"
        );
        const data = await response.json();
        const productData = data.products.find((item) => item._id === id);
        setProduct(productData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    if (storedCart && storedCart.length > 0) {
      setCart(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const sizes = [2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8.5];

  const selectSize = (e) => {
    const selectedSize = parseFloat(e.currentTarget.id);
  
    setSelectedSizes([selectedSize]);
  
    const sizeCards = document.querySelectorAll(".sizeCard");
    sizeCards.forEach((card) => {
      card.style.border = "1px solid rgba(0, 0, 0, 0.291)";
    });
    e.currentTarget.style.border = "1px solid black";
  };
  
  const addItemToCart = () => {
    if (selectedSizes.length === 0) {
      
      return;
    }
  
    const existingItemIndex = cart.findIndex((item) => item.id === id && item.sizes.length === 1 && item.sizes[0] === selectedSizes[0]);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = {
        ...updatedCart[existingItemIndex],
        quantity: updatedCart[existingItemIndex].quantity + 1
      };
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { id, sizes: selectedSizes, quantity: 1 }]);
    }
  
  
    const itemCountElement = document.querySelector('.itemCount');
    if (itemCountElement) {
      const itemCount = parseInt(itemCountElement.textContent, 10);
      if (!isNaN(itemCount)) {
        itemCountElement.textContent = itemCount + 1;
      }
    }
  }
  
  

  
  return (
    <div className="detail-main">
      <div className="media">
        <img
          key={product._id}
          src={`https://inventryapp-production.up.railway.app/images/${product.image}`}
          alt="product-img"
        />
      </div>
      <div className="details">
        <p className="product-name">{product.name}</p>
        {product.category && (
          <p className="product-category">{product.category.name}</p>
        )}
        <p className="product-price">MRP: {product.price}$</p>
        <p className="product-tax">
          incl. of all taxes <br />
          (Also includes all applicable duties)
        </p>
        <p className="select-size">Select Size</p>
        <div className="shoeSize-main">
          {sizes.map((size) => (
            <div
              id={size}
              onClick={selectSize}
              className={`sizeCard ${selectedSizes.includes(size) ? "selected" : ""}`}
              key={size}
            >
              <p>{size}</p>
            </div>
          ))}
        </div>
        <div onClick={addItemToCart} className="addToCart">
          <p>Add To Bag</p>
        </div>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
