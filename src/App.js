import React, { useEffect, useRef, useState } from "react";
import "./style/App.css";
import Loader from "./components/loader";
import Navbar from "./components/navBar";
import Intro from "./components/intro";
import Textreveal from "./components/textreveal";
import ImgGrid from "./components/imgGrid";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const App = () => {
  const [pageLoadStatus, setPageLoadStatus] = useState(false);
  const main = useRef(null);

  const getPageLoadStatus = (status) => {
    setPageLoadStatus(status);
  };

  const handleSmoothScroll = () => {
    gsap.to(window, {
      duration: 1, // Adjust the duration for smooth scrolling
      scrollTo: { y: 0 }, // Scroll to the top of the page
      ease: "power2.out", // Adjust the easing for smooth effect
    });
  };

  useEffect(() => {
    const bodyElement = document.querySelector("body");
    bodyElement.addEventListener("scroll", handleSmoothScroll);

    return () => {
      bodyElement.removeEventListener("scroll", handleSmoothScroll);
    };
  }, []);

  return (
    <div ref={main} className="main-container">
      <Navbar />
      <Intro status={pageLoadStatus} />
      <Loader getPageLoadStatus={getPageLoadStatus} />
      <Textreveal />
      <ImgGrid />
    </div>
  );
};

export default App;
