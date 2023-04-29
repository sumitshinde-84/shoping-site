import React, { useEffect, useRef } from "react";
import "./style/App.css";
import gsap from "gsap-trial";
import { ScrollToPlugin } from "gsap-trial/ScrollToPlugin";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import Loader from "./components/loader";
import Navbar from "./components/navBar";
import Intro from "./components/intro";
import Textreveal from "./components/textreveal";
const App = () => {
  const main = useRef(null);



  return (
    <div ref={main} className="main-container">
      <Navbar />
      <Intro />
      <Loader />
      <Textreveal/>
    </div>
  );
};

export default App;
