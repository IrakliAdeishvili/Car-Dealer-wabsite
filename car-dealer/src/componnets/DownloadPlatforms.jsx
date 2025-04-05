import './downloadPlatforms.scss';
import phoneImg from "../assets/downloadPlatforms/iphone.png";
import aplleIcon from "../assets/downloadPlatforms/apple.svg";
import googlePlayIcon from "../assets/downloadPlatforms/googlePlay.svg";



function DownloadPlatforms(){
    return(
        <div className='Download-Platforms conteiner '>
            <div className="Platform-content">

              <div className="platform-texts">
                <h1>
                   Shop Used Cars, Whether You're
                   On The Lot Or On The Go
                </h1>
                <p>Download our app to save cars and create alerts, scan window stickers on our lot for more details,
                and even call dibs on a car by holding it for up to 7 days.</p>
                <ul className="links">
                    <li> <img src={aplleIcon} alt=""  /><a href="">Apple Store</a></li>
                    <li> <img src={googlePlayIcon} alt="" /><a href="">Google Play</a></li>
                </ul>
              </div>

              <div className="Platform-img">
                <img src={phoneImg} alt="" />
              </div>
            </div>
            
        </div>
    )
}
export default DownloadPlatforms