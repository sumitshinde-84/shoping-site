import ImgGridImg from "../images/man.jpg"
import "./style/imgGrid.css"

const ImgGrid = () => {


    return (
        <div className="ImgGrid">
            <div className="textcontent">
            <h1>Welcome to our brand new store</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, beatae aliquid, consectetur repellat a rem necessitatibus, voluptatem laudantium architecto impedit asperiores? Nostrum ducimus ipsam a numquam omnis iste nam ut?
            </p>
            </div>
            <div className="imgGridSect">
                <img src={ImgGridImg} alt="imgGrid" />
                <div className="background-of-Img"></div>
            </div>
        </div>
    )
}

export default ImgGrid