import React, { useEffect, useRef, useState } from "react";
import "./style/App.css";
import Loader from "./components/loader";
import Navbar from "./components/navBar";
import Intro from "./components/intro";
import Textreveal from "./components/textreveal";
import ImgGrid from "./components/imgGrid";
const App = () => {
  const [pageLoadStatus,setPageLoadStatus]  = useState(false)
  const main = useRef(null);

  const getPageLoadStatus = (status)=>{
    setPageLoadStatus(status)
  } 


  return (
    <div ref={main} className="main-container">
      <Navbar />
      <Intro  status={pageLoadStatus} />
      <Loader getPageLoadStatus={getPageLoadStatus} />
      <Textreveal/>
      <ImgGrid/>
    </div>
  );
};

export default App;
