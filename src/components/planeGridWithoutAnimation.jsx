import React from "react";
import ImgGridImg from "../images/planeGrid.jpeg";
import "./style/planeGrid.css";

const PlaneGridWithoutAnimation = () => {
  return (
    <div className="planeGridWithoutAnimation">
      <div className="planeImgSect">
        <img className="wideImg" src={ImgGridImg} alt="wideImg" />

        <div id="gridStyleContainer">
          <p>As easy to order as it is to use.</p>
          <button className="planeGridButton">to the Shop</button>
        </div>
      </div>
    </div>
  );
};

export default PlaneGridWithoutAnimation;