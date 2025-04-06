import './blogs.scss'
import arrowIcon from "../assets/arrow-up-right.svg";
import teslaImg from "../assets/carsCard/tesla.png";
import audiImg from "../assets/carsCard/audi.png";
import forrdImg from "../assets/carsCard/forrd.png";

function Blogs(){
    return(
        <div className=" blogs conteiner">

            <div className="texts">
                <h1>Latest Blog Posts</h1>
                <li><a href="">View All <img src={arrowIcon} alt="" /></a></li>
            </div>

            <div className="blogs-card">
                
                <div className="card">
                    <img src={audiImg} alt="teslaImg" />
                    <div className="card-text">
                        <p>admin</p>
                        <p>November 10, 2024</p>
                    </div>
                    <h2>Full Elecro  4 Cylinder MAX Hybrid</h2>
                </div>

                <div className="card">
                    <img src={teslaImg} alt="teslaImg" />
                    <div className="card-text">
                        <p>admin</p>
                        <p>November 22, 2024</p>
                    </div>
                    <h2>3.5L 6  Cylinder i-FORCE MAX Hybrid </h2>
                </div>
                <div className="card">
                    <img src={forrdImg} alt="teslaImg" />
                    <div className="card-text">
                        <p>admin</p>
                        <p>November 22, 2024</p>
                    </div>
                    <h2>2.4L 4 Cylinder i-FORCE MAX Hybrid</h2>
                </div>
            </div>


        </div>
    )
}
export default Blogs