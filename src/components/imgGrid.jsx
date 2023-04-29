import { useEffect } from "react";
import ImgGridImg from "../images/man.jpg";
import horizontal from "../images/horizontal.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./style/imgGrid.css";
import { useRef } from "react";

const ImgGrid = () => {
  gsap.registerPlugin(ScrollTrigger);
  const imgGrid = useRef(null);

  useEffect(() => {
    const scrollBarSmooth = gsap.timeline({
      scrollTrigger: {
        trigger: imgGrid.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });

    scrollBarSmooth.to(document.body, {
        color:"#f3f1f0",
        backgroundColor: "#121212", 
        // Change this to the desired new background color
      ease: "power2.out", // Adjust the easing for a smooth effect
    });

    scrollBarSmooth.to(document.body, {
        color:"#121212",
        backgroundColor: "#f3f1f0",// Change this to the original background color
      ease: "power2.out", // Adjust the easing for a smooth effect
    });
  }, []);

  return (
    <div ref={imgGrid} className="ImgGrid">
      <div className="textcontent">
        <h1>Welcome to our brand new store</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
          beatae aliquid, consectetur repellat a rem necessitatibus, voluptatem
          laudantium architecto impedit asperiores? Nostrum ducimus ipsam a
          numquam omnis iste nam ut?
        </p>
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
