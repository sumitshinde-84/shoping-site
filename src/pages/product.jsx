import ProductInfo from "../components/Product-info"
import ProductIntro from "../components/product-intro"
import VideoPlayer from "../components/videoPlayer"
import video1 from "../video/vedio1.webm"
import video2 from "../video/video2.webm"
import "./style/product.css"

const Product = () => {
    const videos = [{ video: video1, id: 1 }, { video: video2, id: 2 }];

    return (
        <div className="Product">
            <ProductIntro />
            <ProductInfo />
            <div className="videoPlyerSect">

                {videos.map((index) => {
                    return (<div className={`player${index.id}`}>
                        <div className="background-style"></div>
                        <VideoPlayer key={index.id} video={index.video} />;
                    </div>)

                })}

            </div>
        </div>
    );
}

export default Product;
