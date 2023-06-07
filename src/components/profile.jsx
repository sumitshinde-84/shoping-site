
import './style/profile.css'

const Profile = ()=>{

    const closeProfile = ()=>{
        const path = window.location.pathname;
        let reference = path.split("/")[1];
        if (reference === "shoping-site") {
          reference = "home";
        } else if (reference === "Shop") {
          reference = "shop-detail";
        } else if (reference === "shop") {
          reference = "detail-main";
        }
        document.querySelector('.profile-component').style.scale='0'
        document.querySelector(`.${reference}`).style.filter = "none";
        document.querySelector(`nav`).style.filter = "none";
    }

    const handleLogOut = ()=>{
        document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        closeProfile()
    }

    return(
        <div className="profile-component">
            <div className="sub-profile-component">
            <p className="close" onClick={closeProfile}>X</p>
            <div className="options">
                <ul>
                    <li><p>Profile</p></li>
                    <li><p>Manage orders</p></li>
                    <li onClick={handleLogOut}><p>Log out</p></li>
                </ul>

            </div>
            </div>

        </div>
    )
}

export default Profile