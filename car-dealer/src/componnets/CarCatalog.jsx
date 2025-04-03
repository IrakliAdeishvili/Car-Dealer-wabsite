import './carCatalog.scss';
import arrowIcon from "../assets/arrow-up-right.svg";
import toyotaImg from "../assets/carsCard/toyota.png";
import teslaImg from "../assets/carsCard/tesla.png";
import audiImg from "../assets/carsCard/audi.png";
import forrdImg from "../assets/carsCard/forrd.png";
import hondaImg from "../assets/carsCard/honda.png";
import kiaImg from "../assets/carsCard/kia.png";
import dashboardIcon from "../assets/carsCard/dashboard.svg";
import petrolIcon from "../assets/carsCard/petrol.svg";
import gearshiftIcon from "../assets/carsCard/gearshift.svg";




function CarCatalog(){
    return (
        <div className="carCatalog conteiner">
            <div className="carCatalog-text">
                <h1> The Most Searched SUV Cars</h1>
                <li><a href="">View All <img src={arrowIcon} alt="" /></a></li>
            </div>

            <div className="car-section">
        
                <div className="car-card">
                    <img className='card-img' src={toyotaImg} alt="" />
                    <div class="card-content">
                       <h2 class="card-title">Toyota Land Cruiser</h2>
                      <p class="card-text">2.4L 4 Cylinder i-FORCE MAX Hybrid</p><hr />
                    </div>
                    <div className="cardIcon">
                        <div className="cardIcon-content">
                        <p className='cardIcon-text'><img  src={dashboardIcon} alt="" />50 Miles</p>
                        <p className='cardIcon-text'><img  src={petrolIcon} alt="" />Petrol</p>
                        <p className='cardIcon-text'><img  src={gearshiftIcon} alt="" />Automatic</p>
                        </div><hr />
                      
                    </div>
                    <div className="card-footer">
                    <p>60,000$</p>
                    <li><a href="">View All <img src={arrowIcon} alt="" /></a></li>
                    </div>

                </div>

                <div className="car-card">
                    <img className='card-img' src={forrdImg} alt="" />
                    <div class="card-content">
                       <h2 class="card-title">2024 Ford Explorer</h2>
                      <p class="card-text">2.4L 4 Cylinder i-FORCE MAX Hybrid</p><hr />
                    </div>
                    <div className="cardIcon">
                        <div className="cardIcon-content">
                        <p className='cardIcon-text'><img  src={dashboardIcon} alt="" />50 Miles</p>
                        <p className='cardIcon-text'><img  src={petrolIcon} alt="" />Petrol</p>
                        <p className='cardIcon-text'><img  src={gearshiftIcon} alt="" />Automatic</p>
                        </div><hr />
                      
                    </div>
                    <div className="card-footer">
                    <p>80,000$</p>
                    <li><a href="">View All <img src={arrowIcon} alt="" /></a></li>
                    </div>

                </div>
        
                <div className="car-card">
                    <img className='card-img' src={hondaImg} alt="" />
                    <div class="card-content">
                       <h2 class="card-title">2025 Honda Pilot  </h2>
                      <p class="card-text">2.0L  4 Cylinder A-FORCE MAX Hybrid</p><hr />
                    </div>
                    <div className="cardIcon">
                        <div className="cardIcon-content">
                        <p className='cardIcon-text'><img  src={dashboardIcon} alt="" />50 Miles</p>
                        <p className='cardIcon-text'><img  src={petrolIcon} alt="" />Petrol</p>
                        <p className='cardIcon-text'><img  src={gearshiftIcon} alt="" />Automatic</p>
                        </div><hr />
                      
                    </div>
                    <div className="card-footer">
                    <p>40,000$</p>
                    <li><a href="">View All <img src={arrowIcon} alt="" /></a></li>
                    </div>

                </div>
        
                <div className="car-card">
                    <img className='card-img' src={kiaImg} alt="" />
                    <div class="card-content">
                       <h2 class="card-title">2025 Kia Telluride </h2>
                      <p class="card-text">2.0L 4 Cylinder  MAX Hybrid</p><hr />
                    </div>
                    <div className="cardIcon">
                        <div className="cardIcon-content">
                        <p className='cardIcon-text'><img  src={dashboardIcon} alt="" />50 Miles</p>
                        <p className='cardIcon-text'><img  src={petrolIcon} alt="" />Hybrid </p>
                        <p className='cardIcon-text'><img  src={gearshiftIcon} alt="" />Automatic</p>
                        </div><hr />
                      
                    </div>
                    <div className="card-footer">
                    <p>60,000$</p>
                    <li><a href="">View All <img src={arrowIcon} alt="" /></a></li>
                    </div>

                </div>
                <div className="car-card">
                    <img className='card-img' src={audiImg} alt="" />
                    <div class="card-content">
                       <h2 class="card-title">2025 Audi Q7</h2>
                      <p class="card-text">3.5L 6  Cylinder i-FORCE MAX Hybrid </p><hr />
                    </div>
                    <div className="cardIcon">
                        <div className="cardIcon-content">
                        <p className='cardIcon-text'><img  src={dashboardIcon} alt="" />50 Miles</p>
                        <p className='cardIcon-text'><img  src={petrolIcon} alt="" />Petrol</p>
                        <p className='cardIcon-text'><img  src={gearshiftIcon} alt="" />Automatic</p>
                        </div><hr />
                      
                    </div>
                    <div className="card-footer">
                    <p>100,000$</p>
                    <li><a href="">View All <img src={arrowIcon} alt="" /></a></li>
                    </div>

                </div>
                <div className="car-card">
                    <img className='card-img' src={teslaImg} alt="" />
                    <div class="card-content">
                       <h2 class="card-title">Tesla Model X</h2>
                      <p class="card-text">Full Elecro  4 Cylinder MAX Hybrid</p><hr />
                    </div>
                    <div className="cardIcon">
                        <div className="cardIcon-content">
                        <p className='cardIcon-text'><img  src={dashboardIcon} alt="" />50 Miles</p>
                        <p className='cardIcon-text'><img  src={petrolIcon} alt="" />Elecro</p>
                        <p className='cardIcon-text'><img  src={gearshiftIcon} alt="" />Automatic</p>
                        </div><hr />
                      
                    </div>
                    <div className="card-footer">
                    <p>70,000$</p>
                    <li><a href="">View All <img src={arrowIcon} alt="" /></a></li>
                    </div>

                </div>

            </div>

        </div>
    )
}
export default CarCatalog