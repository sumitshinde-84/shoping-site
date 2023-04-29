import Intro from "./components/intro";
import Loader from "./components/loader";
import Navbar from "./components/navBar";
import "./style/App.css"

const App = () =>{

  return(
    <div className="main-container">
        <Navbar/>
        <Intro/>
        <Loader/>

    </div>
  )
}

export default App;