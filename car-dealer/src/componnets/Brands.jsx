import './brands.scss';
import marcedesImg from "../assets/mercedes.svg";
import bmwImg from "../assets/bmw.svg";
import audiImg from "../assets/audi.svg";
import alfaRomeoIMG from "../assets/alfa-romeo.svg";
import fordImg from "../assets/ford.svg";
import volkswagenImg from "../assets/volkswagen.svg";

function Brands(){
    return(
        <div className='brands conteiner'>
          
          <div className="brands-list">
            <h1> Explore Our Premium Brands</h1>

            <div className="brands-cards">
                <ul>
                    <li><a href=""><img src={marcedesImg} alt="" />mercedes</a></li>
                    <li><a href=""><img src={bmwImg} alt="" />BMW</a></li>
                    <li><a href=""><img src={audiImg} alt="" />Audi</a></li>
                    <li><a href=""><img src={alfaRomeoIMG} alt="" />Alfa-Romeo</a></li>
                    <li><a href=""><img src={fordImg} alt="" />Ford</a></li>
                    <li><a href=""><img src={volkswagenImg} alt="" />Volkswagen</a></li>
                </ul>
            </div>
          </div>
            

        </div>
    )
}
export default Brands