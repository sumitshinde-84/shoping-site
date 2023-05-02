import "./style/product-Intro.css";

import ShoesPart from "../images/shoes-parts.png";
const ProductIntro = () => {
  return (
    <div className="product-intro">
      <h1>Steps into innovation, where style meets comfort.</h1>
      <img src={ShoesPart} alt="shoes-part" />
    </div>
  );
};

export default ProductIntro;
