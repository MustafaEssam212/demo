
import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import MobileQRImage from '../../../assets/static/svg/tickets-page/mobile.svg';
import QRCodeIndvidualImage from '../../../assets/static/svg/tickets-page/secure-qr-code.svg';


const QRCode = () => {
    return(
        <div className="qr-code-container">
            
            <div className="left-qr-code">

                <ResponsiveTypography startFontSizeInPX={32} endFontSizeInPX={26} HTMLTag="h2" txt="Stay one step ahead of scammers with advanced QR code technology!" />
                <ResponsiveTypography startFontSizeInPX={22} endFontSizeInPX={16} HTMLTag="h3" txt="QR code tickets offer various benefits, enhancing ticketing scanning processes' efficiency, security, and convenience." />
                <img alt="Stay one step ahead of scammers with advanced QR code technology!" title="Stay one step ahead of scammers with advanced QR code technology!" src={MobileQRImage} loading="lazy" />

            </div>

            <div className="right-qr-code">

                <ResponsiveTypography startFontSizeInPX={32} endFontSizeInPX={26} HTMLTag="h2" txt="Maximum security with mobile QR code check-in" />
                <ResponsiveTypography startFontSizeInPX={22} endFontSizeInPX={16} HTMLTag="h3" txt={<>Rescounts's secure QR code ticketing system safeguards against <br /> counterfeiting and duplication, ensures swift entry for attendees, enhances overall event security, and streamlines the validation process at entry points.</>} />
                <img alt="Stay one step ahead of scammers with advanced QR code technology!" title="Stay one step ahead of scammers with advanced QR code technology!" src={QRCodeIndvidualImage} loading="lazy" />

            </div>

        </div>
    )
}


export default QRCode;