import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "./style/intro.css";
import sneakerHome from "../images/home-sneaker.png";

const Intro = ({ status }) => {
  const sneakerHomeRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const tl = gsap.timeline();

  useEffect(() => {
    if (status) {
      tl.to(sneakerHomeRef.current, {
        x: -90,
        rotate: -10,
        duration: 0.9,
      });
    }
  }, [status]);

  useEffect(() => {
    gsap.to(sneakerHomeRef.current, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: sneakerHomeRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
      },
    });
  }, []);

  return (
    <div className="intro">
      <h1 text="RONEX">RONEX</h1>
      <img
        ref={sneakerHomeRef}
        className="sneaker-home"
        src={sneakerHome}
        alt="sneaker"
      />
    </div>
  );
};

export default Intro;
