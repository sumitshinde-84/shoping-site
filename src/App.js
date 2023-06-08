import "./style/App.css";
import Home from "./pages/home";
import Navbar from "./components/navBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Shop from "./pages/shop";
import ProudctDetail from "./components/productDetail";
import Signup from "./components/sign-up";
import CheckCart from "./components/checkCart";
import { Provider } from "react-redux";
import store from "./store/store";
import Order from "./pages/orderPage";
import Profile from "./components/profile";
import ManageOrders from "./pages/manageOrder";

const App = () => {
  return (
    <div className="main-container">
     <Provider store={store}>
      <BrowserRouter>
      <Navbar />
        <Routes>
          
          <Route path="/shoping-site/" element={<Home />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/About" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Shop/:id" element={<ProudctDetail/>}/>
          <Route path="/Signup" element={<Signup/>}/>
          <Route path="/checkout" element={<Order/>}/>
          <Route path="/orders" element={<ManageOrders/>}/>

          
        </Routes>
        <Profile/>
        <CheckCart  />
      </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
