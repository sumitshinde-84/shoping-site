import React from "react";
import "./style/slider.css";
import Logo1 from "../images/logos/3m.svg";
import Logo2 from "../images/logos/barstool-store.svg";
import Logo3 from "../images/logos/budweiser.svg";
import Logo4 from "../images/logos/buzzfeed.svg";
import Logo5 from "../images/logos/forbes.svg";
import Logo6 from "../images/logos/macys.svg";
import Logo7 from "../images/logos/menshealth.svg";
import Logo8 from "../images/logos/mrbeast.svg";

const InfiniteSlider = () => {
  const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8];

  return (
    <div className="logos">
      <div className="logo-slide">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
      <div className="logo-slide">
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default InfiniteSlider;
