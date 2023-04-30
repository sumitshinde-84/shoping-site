
import "./style/App.css";
import Home from "./pages/home";
import Navbar from "./components/navBar";
const App = () => {
  return <div  className="main-container">
      <Navbar />
      <Home/>
  </div>;
};

export default App;
