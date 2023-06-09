import { useEffect, useState } from "react";
import "./style/shopDetail.css";
import { useNavigate } from "react-router-dom";

const ShopDetail = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const [Cart, setCart] = useState([]);

  const redirectToNewPage = (id) => {
    navigate(`/shop/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
     
      try {
        const response = await fetch(
          "https://inventryapp-production.up.railway.app/catalog/products/send"
        );
        const data = await response.json();
        console.log(data);
        setProducts(data.products); // Update the products state with the fetched data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleFilterChange = (filterType) => {
    let sortedProducts;

    if (filterType === "high") {
      sortedProducts = [...products].sort((a, b) => b.price - a.price);
    } else if (filterType === "low") {
      sortedProducts = [...products].sort((a, b) => a.price - b.price);
    }

    setProducts(sortedProducts);
  };

  return (
    <div className="shop-detail">
      
      {products.map((product) => (
        <div
          key={product._id}
          onClick={() => redirectToNewPage(product._id)}
          className="product-card"
        >
          <div className="image-container">
            <img
              src={`https://inventryapp-production.up.railway.app/images/${product.image}`}
              alt="product-image"
            />
          </div>
          <p>Just In</p>
          <p>{product.name}</p>
          <p>{product.category.name}</p>
          <p>MRP: {product.price}$</p>
        </div>
      ))}
    </div>
  );
};

export default ShopDetail;
