import PlaneGrid from "../components/plainGrid"
import Footer from "../components/footer"
import ProductInfo from "../components/Product-info"
import ProductIntro from "../components/product-intro"
import VideoPlayer from "../components/videoPlayer"
import video1 from "../video/vedio1.webm"
import video2 from "../video/video2.webm"
import "./style/product.css"
import PlaneGridWithoutAnimation from "../components/planeGridWithoutAnimation"
import OurApp from "../components/ourApp"

import InfiniteSlider from "../components/slider"

const Product = () => {
    

    return (
        <div className="Product">
            <ProductIntro />
            <ProductInfo />
            <OurApp/>
            <InfiniteSlider/>
            <PlaneGridWithoutAnimation/>
            <Footer/>
           
        </div>
    );
}

export default Product;
