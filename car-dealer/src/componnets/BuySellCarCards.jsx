import './BuySellCarCards.scss';
import smartCarIcon from "../assets/BuySellCarCards/smart-car.svg";
import sellCarIcon from "../assets/BuySellCarCards/sell-car.svg";
import dealershipIcon from "../assets/BuySellCarCards/dealership.svg";
import offerIcon from "../assets/BuySellCarCards/offer.svg";
import pricingIcon from "../assets/BuySellCarCards/pricing.svg";
import serviceIcon from "../assets/BuySellCarCards/service.svg";

function BuySellCarCards(){
    return (
        <div className="BuySellCarCards conteiner">


            <div className="cards">
                <div className="card">
                    <h2>Are You Looking For a Car ?</h2>
                    <p>We are committed to providing our customers with
                        exceptional service.</p>
                    <div className="links">
                        <li><a href="">Gat Started</a></li>
                        <img src={smartCarIcon} alt="" />
                    </div>
                </div>
                <div className="card" style={{ backgroundColor: " hsl(333, 47%, 82%)" }}>
                    <h2>Do You Want to Sell a Car ?</h2>
                    <p>We are committed to providing our customers with
                        exceptional service.</p>
                    <div className="links">
                        <li><a href="">Get Started</a></li>
                        <img src={sellCarIcon} alt="" />
                    </div>
                </div>
            </div>

            <div className="offers">
                <h1 className='offers-title'>We're BIG on what
                matters to you</h1>

                <div className="offers-card">
                    <div className="card">
                      <img src={offerIcon} alt="" />
                      <h2>Special Financing Offers</h2>
                      <p>Our stress-free finance department that can
                      find financial solutions to save you money.</p>
                    </div>
                    <div className="card">
                      <img src={dealershipIcon} alt="" />
                      <h2>Trusted Car Dealership</h2>
                      <p>Our stress-free finance department that can
                      find financial solutions to save you money.</p>
                    </div>
                    <div className="card">
                      <img src={pricingIcon} alt="" />
                      <h2>Transparent Pricing</h2>
                      <p>Our stress-free finance department that can
                      find financial solutions to save you money.</p>
                    </div>
                    <div className="card">
                      <img src={serviceIcon} alt="" />
                      <h2>Expert Car Service</h2>
                      <p>Our stress-free finance department that can
                      find financial solutions to save you money.</p>
                    </div>
                   
                </div>
            </div>
        </div>

    )
}
export default BuySellCarCards