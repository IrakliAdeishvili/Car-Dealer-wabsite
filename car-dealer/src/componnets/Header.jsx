import './Header.scss';
import suvIcon from "../assets/suv.svg";
import sedanIcon from "../assets/sedan.svg";
import HatchbackIcon from "../assets/Hatchback.svg";
import CoupeIcon from "../assets/coupe.svg";
import hybridIcon from "../assets/hybrid.svg";

function Header(){
    return (
        <header>
            <div className='header_bnr'>

            <div className="header-links">
            <li className='logo'><a href="">LOGO</a></li>

                <div className="links">
                   <ul>
                    <li><a href="">HOME</a></li>
                    <li><a href="">BLOG</a></li>
                    <li><a href="">ABOUT</a></li>
                    <li><a href="">CONTACT</a></li>
                    <li> <a href=""> Sign in</a></li>
                   </ul>
                </div>
            </div>

            <div className="header-text">
                <h3>Find cars for sale and for rent near you</h3>
                <h1>Find Your Perfect Car</h1>
            </div>

            <div className="serch-bar ">
               <div className="serchInp">
                 <input type="text" placeholder='Any Makes' />
                 <input type="text" placeholder='Any Models' />
                 <input type="text" placeholder='Price:' />
                 <input type="text" placeholder=' All Price' />
               </div>

               <div className="serch">
                <input type="text"  placeholder= 'Serch Cars' />
               </div>
            </div>

            <div className="header-cars-list">
                <div className="list">
                     <img src={suvIcon} alt="SUV" />
                    <span>Suv</span>
                </div>
                <div className="list">
                     <img src={sedanIcon} alt="SEdan" />
                    <span>Sedan</span>
                </div>
                <div className="list">
                     <img src={HatchbackIcon} alt="Hatchback" />
                    <span>Hatchback</span>
                </div>
                <div className="list">
                     <img src={CoupeIcon} alt="Coupe" />
                    <span>Coupe</span>
                </div>
                <div className="list">
                     <img src={hybridIcon} alt="hybrid" />
                    <span>Hybrid</span>
                </div>
            </div>

          

            </div>
        </header>
    )
}
export default Header