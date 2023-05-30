import "./style/navbar.css";
import cart from "../images/cart.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <Link className="NavLink" to="/shoping-site/">
        <p className="logo">ronex</p>
      </Link>
      <div className="navItems">
        <Link className="NavLink" to="/Product">
          Product
        </Link>
        <Link className="NavLink" to="/About">
          About 
        </Link>
        <Link className="NavLink" to="/Contact">
          Contact
        </Link>
        <Link className="NavLink" to="/Signup">
          Signup
        </Link>
      </div>

      <div className="order-sect">
      <Link className="NavLink" to="/Shop"><button className="order-button">Order</button></Link>
        <img className="cart" src={cart} alt="cart" />
        <div className="itemCount">0</div>
      </div>
    </nav>
  );
};

export default Navbar;
