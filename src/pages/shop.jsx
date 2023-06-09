import { useEffect } from "react"
import Footer from "../components/footer"
import ShopImg from "../components/shop-img"
import ShopDetail from "../components/shopdetail"
import "./style/shop.css"
const Shop = () => {

    useEffect(()=>{
        document.querySelector('body').style.backgroundColor='var(--light)'
        document.querySelector('body').style.color='var(--dark)'
    },[])

    return (
        <div className="shop">
            <ShopDetail />
           <Footer/>

        </div>
    )
}


export default Shop