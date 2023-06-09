import { useEffect } from "react";
import ImgGridImg from "../images/planeGrid.jpeg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style/planeGrid.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const PlaneGrid = () => {
  gsap.registerPlugin(ScrollTrigger);
  const planeGridRef = useRef(null);
  const navigator = useNavigate();


  const handleNavigate = ()=>{
      navigator('/Shop')
  }


  useEffect(() => {
    const scrollBarSmooth = gsap.timeline({
      scrollTrigger: {
        trigger: planeGridRef.current,
        start: "top center",
        end: "center end",
        scrub: true,
        onEnter: () => {
          gsap.to(document.body, {
            color: "#121212",
            backgroundColor: "#f3f1f0",
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(document.body, {
            color: "#f3f1f0",
            backgroundColor: "#7E7E8C",
            ease: "power2.out",
          });
        },
      },
    });

    return () => {
      scrollBarSmooth.scrollTrigger.kill();
    };
  }, []);

  return (
    <div className="planeGrid" ref={planeGridRef}>
      <div className="planeImgSect">
        <img className="wideImg" src={ImgGridImg} alt="wideImg" />

        <div id="gridStyleContainer">
          <p>As easy to order as it is to use.</p>
          <button onClick={handleNavigate} className="planeGridButton">to the Shop</button>
        </div>
      </div>
    </div>
  );
};

export default PlaneGrid;
