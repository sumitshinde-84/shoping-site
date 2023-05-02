import ProductInfo from "../components/Product-info"
import ProductIntro from "../components/product-intro"
import VideoPlayer from "../components/videoPlayer"
import video1 from "../video/vedio1.webm"
import video2 from "../video/video2.webm"
import "./style/product.css"

const Product = () => {
    

    return (
        <div className="Product">
            <ProductIntro />
            <ProductInfo />
           
        </div>
    );
}

export default Product;
