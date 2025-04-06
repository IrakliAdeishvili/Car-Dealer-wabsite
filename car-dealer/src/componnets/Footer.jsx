import './footer.scss'
import facebookIcon from "../assets/footer/facebook.svg";
import instagramIcon from "../assets/footer/instagram.svg";
import linkedinIcon from "../assets/footer/linkedin.svg";


function Footer(){
    return (
        <div className="footer">
            

            <div className="footer-links">
                <h2>Quick Links</h2>
                <ul className="links">
                    <li><a href="">Get in Touch</a></li>
                    <li><a href="">How it works</a></li>
                    <li><a href="">Live chat</a></li>
                    <li><a href="">Help center</a></li>

                </ul>
                
            </div>
            <div className="footer-links">
                <h2>Our Brands</h2>
                <ul className="links">
                    <li><a href="">Toyota</a></li>
                    <li><a href="">Porsche</a></li>
                    <li><a href="">Audi</a></li>
                    <li><a href="">BMW</a></li>
                    <li><a href="">Ford</a></li>
                    <li><a href="">Nissan</a></li>
                    <li><a href="">Peugeot</a></li>
                    <li><a href="">Volkswagen</a></li>

                </ul>
                
            </div>
            <div className="footer-links">
                <h2>Vehicles Type</h2>
                <ul className="links">
                    <li><a href="">Sedan</a></li>
                    <li><a href="">Hatchback</a></li>
                    <li><a href="">SUV</a></li>
                    <li><a href="">Hybrid</a></li>
                    <li><a href="">Electric</a></li>
                    <li><a href="">Coupe</a></li>
                    <li><a href="">Convertible</a></li>
                    <li><a href="">Truck</a></li>

                </ul>
                
            </div>

            <div className="contacts">
                
                <div className="sale-hours">
                    <h2>Sale Hours</h2>
                    <p>Monday – Friday: 09:00AM – 09:00 PM</p>
                    <p>Saturday: 09:00AM – 07:00PM</p>
                    <p>Sunday: Closed</p>
                </div>

                <div className="contacts-links">
                    <h2>Connect With Us</h2>
                    <div className="contacts-icon">
                        <img src={facebookIcon} alt="facebookIcon" />
                        <img src={instagramIcon} alt="instagramIcon" />
                        <img src={linkedinIcon} alt="linkedinIcon" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer