import "./style/footer.css"
import  instagramIcon from "../images/instagram.png"
import linkedinIcon from "../images/linkedin.png"
import  facebookIcon from "../images/facebook.png"
import  pinterestIcon from "../images/pinterest.png"

const Footer = () => {




    return (
        <div className="footer">
            <div className="col-1">
                <div>
                    <label htmlFor="suscribe">Suscribe to our newslater</label>
                    <input id="suscirbe" placeholder="Your Email" />
                </div>
                <div>
                    <a>Privacy</a>
                    <a>Terms</a>
                    <a>Copyright</a>

                </div>

            </div>
            <div className="col-2">
                <a>Ronex</a>
                <a>Intro</a>
                <a>Product</a>
                <a>About us</a>
            </div>
            <div className="col-3">
                <a>Services</a>
                <a>FAQs</a>
                <a>Contact</a>

            </div>
            <div className="col-4">
                <a>Social</a>
                <ul>
                    <li><a><img src={instagramIcon} alt="social-logo" /></a></li>
                    <li><a><img src={linkedinIcon} alt="social-logo" /></a></li>
                    <li><a><img src={facebookIcon} alt="social-logo" /></a></li>
                    <li><a><img src={pinterestIcon} alt="social-logo" /></a></li>
                </ul>
            </div>
        </div>
    )


}

export default Footer