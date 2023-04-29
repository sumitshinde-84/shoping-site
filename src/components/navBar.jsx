import "./style/navbar.css"

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
        </div>
        </nav>
    )
}

export default Navbar