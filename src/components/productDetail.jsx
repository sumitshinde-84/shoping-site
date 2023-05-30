import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./style/productDetail.css";
import ShoeSize from "./shoeSize";
import AddToCart from "./addToCart";

const ProudctDetail = ()=>{

    const [product, setProduct] = useState({});
    const {id} = useParams()
   
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://inventryapp-production.up.railway.app/catalog/products/send"
            );
            const data = await response.json();
            const productData = data.products.find((item) => item._id === id);
            console.log(productData)
            setProduct(productData);
           let {category} = productData // Update the products state with the fetched data
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchData();
      }, []);


    return(
        <div className="detail-main">
            <div className="media">
                <img key={product._id} src={`https://inventryapp-production.up.railway.app/images/${product.image}`} alt="product-img" />
            </div>
            <div className="details">
                <p className="product-name">{product.name}</p>
                {product.category && (
          <p className="product-category">{product.category.name}</p>
        )}
            <p className="product-price">MRP: {product.price}$</p>
            <p className="product-tax">incl. of all taxes <br />
(Also includes all applicable duties)</p>
                    <p className="select-size">Select Size</p>
                    <ShoeSize/>
                    <AddToCart/>
                    <p className="product-description">{product.description}</p>
                   
            </div>
        </div>
    )


}

export default ProudctDetail