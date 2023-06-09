
import './style/profile.css'
import ManageOrders from "../pages/manageOrder";
import { useNavigate } from 'react-router-dom';


const Profile = ()=>{
    
    const navigator = useNavigate();


    const handleNavigate = ()=>{
        navigator('/orders')
    }

  const  getCookieValue = (name) => {
        const cookies = document.cookie.split("; ");
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].split("=");
          if (cookie[0] === name) {
            return cookie[1];
          }
        }
        return null;
      };

    const closeProfile = ()=>{
      
        document.querySelector('.profile-component').style.display='none'
        
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
                    
                    <li><p><strong>{getCookieValue('email')}</strong>  </p></li>
                    <li onClick={handleNavigate}><p>Manage orders</p></li>
                    <li onClick={handleLogOut}><p>Log out</p></li>
                </ul>

            </div>
            </div>

        </div>
    )
}

export default Profile