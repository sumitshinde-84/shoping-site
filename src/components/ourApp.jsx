import AppImg from "../images/App.png"
import appStore from "../images/appstore.png"
import playStore from "../images/playstore.png"
import "./style/ourApp.css"
const OurApp = () => {


    return (
        <div className="ourApp">
            <div className="textContent">
                <h1>This App will log your every stride.</h1>
                <p>The Ronex app puts you in command. Schedule your shoe selection in advance and wear them at your desired time. This is how you save precious moments while staying stylish.</p>
                <div className="playstore">
                    <img src={appStore} alt="appstore" />
                    <img src={playStore} alt="playstore" />

                </div>
            </div>
            <div className="App-Img">
                <img src={AppImg} alt="app-img" />
            </div>
        </div>
    )
}

export default OurApp