import "./style/product-info.css";
import VideoPlayer from "../components/videoPlayer"
import video1 from "../video/vedio1.webm"
import video2 from "../video/video2.webm"
import shoesHorizontalVerticle from "../images/shoes_horizontal_verticle.png"
import features1 from "../images/traction.png"
import features2 from "../images/cushion.png"
import features3 from "../images/durable.png"
import features4 from "../images/cofortable.png"
import features5 from "../images/maintainence.png"
import features6 from "../images/curve.png"
import features7 from "../images/lightweight.png"



const ProductInfo = () => {
    const videos = [{ video: video1, id: 1 }, { video: video2, id: 2 }];
    const features = [{ icon: features1, para: "Offers reliable grip for stability and safety." }, { icon: features2, para: " Provides plush support for ultimate comfort." }, { icon: features3, para: " Made to last with high-quality materials." }, { icon: features4, para: "Snug and comfortable for all-day wear." }, { icon: features5, para: "Simple to clean and care for." }, { icon: features6, para: "Provides stability and reduces foot fatigue." }, { icon: features7, para: "comfortable and snug fit for your feet" }, { icon: features7, para: "Feather-light for a barely-there feel." },]
    return (
        <div className="product-info">
            <div className="description">
                <h1>Uncomplicated, Progressive</h1>
                <p>
                    These two captivating videos invite you on an immersive journey,
                    unveiling the seamless birth of our exceptional shoes.
                </p>
            </div>
            <div className="videoPlyerSect">

                {videos.map((index) => {
                    return (<div className={`player${index.id}`}>
                        <div className="background-style"></div>
                        <VideoPlayer key={index.id} video={index.video} />
                    </div>)

                })}

            </div>

            <div className="product-feature">
                <h1>Your perfect match with dream shoes.</h1>
                <p>Our stylish shoes are designed to be lightweight, offering a comfortable feel throughout the day. You'll barely notice their weight as you move effortlessly.</p>
                <img className="shoesHorizontalVerticle" src={shoesHorizontalVerticle} alt="product-verticle-horzontal" />
                <div className="features">
                    {
                        features.map((index) => {
                           return <div className="feature">
                                <div className="circle">
                                    <img src={index.icon} key={features.indexOf(index)} />
                                </div>
                                <p>{index.para}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
