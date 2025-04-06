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
                <h2>Quick Links</h2>
                <ul className="links">
                    <li><a href="">Get in Touch</a></li>
                    <li><a href="">How it works</a></li>
                    <li><a href="">Live chat</a></li>
                    <li><a href="">Help center</a></li>

                </ul>
                
            </div>
        </div>
    )
}
export default Footer