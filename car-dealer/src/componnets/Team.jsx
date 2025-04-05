import './team.scss';
import arrowIcon from "../assets/arrow-up-right.svg";
import firstImg from "../assets/ourTeam/1.png";
import SecondImg from "../assets/ourTeam/2.png";
import thirdImg from "../assets/ourTeam/3.png";
import fourthimg from "../assets/ourTeam/4.png";




function Team(){
    return(
        <div className="our-team conteiner">

           <div className="texts">
            <h1>Our Team</h1>
              <li><a href="">View All <img src={arrowIcon} alt="" /></a></li>
           </div>

           <div className="our-team-cards">
            <div className="card">
                <img src={firstImg} alt="" />
                <h2>Courtney Henry</h2>
                <p>Development Manage</p>
            </div>
            <div className="card">
                <img src={SecondImg} alt="" />
                <h2>Jerome Bell</h2>
                <p>Software Tester</p>
            </div>
            <div className="card">
                <img src={thirdImg} alt="" />
                <h2>Jenny Wilson</h2>
                <p>UI/UX Designer</p>
            </div>
            <div className="card">
                <img src={fourthimg} alt="" />
                <h2>Arlene McCoy</h2>
                <p>Software Developer</p>
            </div>
           </div>


        </div>
    )
}
export default Team