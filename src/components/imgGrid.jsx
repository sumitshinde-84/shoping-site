import { useEffect } from "react";
import ImgGridImg from "../images/man.jpg";
import horizontal from "../images/horizontal.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style/imgGrid.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ImgGrid = () => {

  const navigator = useNavigate();


  const handleNavigate = ()=>{
      navigator('/Shop')
  }
  gsap.registerPlugin(ScrollTrigger);
  const imgGridRef = useRef(null);

  useEffect(() => {
    const scrollBarSmooth = gsap.timeline({
      scrollTrigger: {
        trigger: imgGridRef.current,
        start: "top center",
        end: "center center",
        scrub: true,
        onEnter: () => {
          gsap.to(document.body, {
            color: "#f3f1f0",
            backgroundColor: "#121212",
            ease: "power2.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(document.body, {
            color: "#121212",
            backgroundColor: "#f3f1f0",
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
    <div ref={imgGridRef} className="ImgGrid">
      <div className="textcontent">
        <h1>Welcome to our brand new store</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          beatae aliquid, consectetur repellat a rem necessitatibus, voluptatem
          laudantium architecto impedit asperiores? Nostrum ducimus ipsam a
          numquam omnis iste nam ut?
        </p>
        <button onClick={handleNavigate} className="imgGrid-Btn" >Shop</button>
      </div>
      <div className="imgGridSect">
        <img className="verticle" src={ImgGridImg} alt="imgGrid" />
        <img className="horizontal" src={horizontal} alt="imgGrid" />
        <div className="background-of-Img"></div>
      </div>
    </div>
  );
};

export default ImgGrid;
