import ResponsiveTypography from "../../reusable/ResponsiveTypography"
import BurgundyCheckCircle from "../../utils/BurgundyCheckCircle"
import EnsureSecurelImage from '../../../assets/static/svg/tickets-page/e-signature.svg';




const EnsureSecure = () => {
    return(
        <div className="reusable-image-and-text ensure-secure-container">
                <div className="texts">
                    <ResponsiveTypography startFontSizeInPX={46} endFontSizeInPX={26} HTMLTag="h1" txt="Ensure secure and transparent transactions with Rescounts e-signature" />

                    <div className="texts-with-icons">
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Eliminate the need for physical signatures." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Include your own terms and conditions per event." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Enhance the security of ticket transactions." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Streamline ticket delivery and confirmation process." /></div>
                    </div>
                </div>


                <div className="image-container">
                    <img alt="Ensure secure with E-signature" title="Ensure secure with E-signature"  loading="lazy" src={EnsureSecurelImage} />
                </div>
        </div>
    )
}


export default EnsureSecure;