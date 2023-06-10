import Footer from "../components/footer"
import GroupSect from "../components/groupSect"
import OurMessage from "../components/ourMessage"
import OurTeamSect from "../components/ourTeamSect"
import PlaneGridWithoutAnimation from "../components/planeGridWithoutAnimation"
import "./style/aboutUs.css"

const AboutUs = () => {


    return (
        <div className="About">
            <OurTeamSect/>
            <GroupSect/>
            <OurMessage/>
            <PlaneGridWithoutAnimation/>
         <Footer/>
        </div>
    )
}

export default AboutUs