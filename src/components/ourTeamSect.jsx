import MemberCard from "./memberCard";
import "./style/ourTeamSect.css";
import member1 from "../images/member1.jpeg"
import member2 from "../images/member2.jpeg"
import member3 from "../images/member3.jpeg"
import { v4 as uuidv4 } from "uuid";

const OurTeamSect = () => {

    const membersImg = [{ img: member1, detail: { name: 'Claudio Ruiz', post: 'CEO', education: 'Graduate engineer, software developer and 3D printing expert. Likes Mountain bikes and dumplings.' } }, { img: member2, detail: { name: 'Reto Muhl', post: 'CTO', education: 'Graduate engineer, robot technician, hardware professional, cinema fan and Tapas connoisseurs.' } }, { img: member3, detail: { name: 'Johannes Hofer', post: 'CMO', education: 'Business economist and the man for our marketing. Also violinist and Pastalover.' } }]

    return (
        <div className="our-team-sect">
            <h1>Our Founding Team</h1>
            <div className="team-member">
                {membersImg.map((member) => (
                    <MemberCard key={uuidv4()} image={member.img}  detail={member.detail}/>
                ))}

            </div>

        </div>
    )
}

export default OurTeamSect