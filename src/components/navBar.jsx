import "./style/navbar.css"
import cart from "../images/cart.png"
const Navbar = () =>{
    return(
        <nav>
            <p className="logo">ronex</p>
        <div className="navItems">

            <a to="">Product</a>
            <a to="">About us</a>
            <a to="">Contact</a>
            
        </div>

        <div className="order-sect">
        <button className="order-button">Order</button>
        <img className="cart" src={cart} alt="cart" />
        <div className="itemCount">0</div>
        </div>
        </nav>
    )
}

export default Navbar