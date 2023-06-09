import { useEffect } from "react";
import ImgGridImg from "../images/women.jpg";
import horizontal from "../images/horizontalLight.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style/imgGridOpp.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ImgGridOpp = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imgGridOppRef = useRef(null);
 
  const navigator = useNavigate();


  const handleNavigate = ()=>{
      navigator('/Product')
  }

  useEffect(() => {
    const scrollBarSmooth = gsap.timeline({
      scrollTrigger: {
        trigger: imgGridOppRef.current,
        start: "top center",
        end: "center end",
        scrub: true,
        onEnter: () => {
          gsap.to(document.body, {
            color: "#121212",
            backgroundColor: "#7E7E8C",
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(document.body, {
            color: "#f3f1f0",
            backgroundColor: "#121212",
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
    <div ref={imgGridOppRef} className="ImgGridOpp">
      <div className="imgGridOppSect">
        <img className="verticle" src={ImgGridImg} alt="imgGrid" />
        <img className="horizontal" src={horizontal} alt="imgGrid" />
        <div className="background-of-Img"></div>
      </div>
      <div className="textcontent">
        <h1>Welcome to our brand new store</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          beatae aliquid, consectetur repellat a rem necessitatibus, voluptatem
          laudantium architecto impedit asperiores? Nostrum ducimus ipsam a
          numquam omnis iste nam ut?
        </p>
        <button onClick={handleNavigate} className="imgGridOpp-Btn">Product</button>
      </div>
    </div>
  );
};

export default ImgGridOpp;
