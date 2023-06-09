import "./style/memberCard.css"


const MemberCard = ({ image,detail }) => {


    return (
        <div className="member-card">
            <div className="member-image">
                <img src={image} alt="image" />
            </div>
            <div className="back-card">

            </div>
            <div className="detail">
                <p>{detail.name}</p>
                <p>{detail.post}</p>
                <p>{detail.education}</p>
                <button>Linkedin</button>
            </div>
        </div>
    )
}

export default MemberCard