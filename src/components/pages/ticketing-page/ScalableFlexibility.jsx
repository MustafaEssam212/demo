import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import BurgundyCheckCircle from "../../utils/BurgundyCheckCircle"
import ScalableFlexibilityImage from '../../../assets/static/svg/tickets-page/scalable-flexibility.svg';


const ScalableFlexibility = () => {
    return(
        <div className="reusable-image-and-text scalable-flexibility-container">

                <div className="texts">
                    <ResponsiveTypography startFontSizeInPX={46} endFontSizeInPX={26} HTMLTag="h1" txt="Scalable Flexibility with Rescounts" />

                    <div className="texts-with-icons">
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Manage small to large events." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Easily scale based on ticket demand." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Customize ticketing processes." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Handle last-minute changes easily." /></div>
                    </div>
                </div>


                <div className="image-container">
                    <img alt="Scalable Flexibility" title="Scalable Flexibility"  loading="lazy" src={ScalableFlexibilityImage} />
                </div>

        </div>
    )
}


export default ScalableFlexibility;