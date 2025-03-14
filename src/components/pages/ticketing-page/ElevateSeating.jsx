import ResponsiveTypography from "../../reusable/ResponsiveTypography"
import BurgundyCheckCircle from "../../utils/BurgundyCheckCircle"
import ElevateSeatingImage from '../../../assets/static/svg/tickets-page/elevate-seating.svg';





const ElevateSeating = () => {
    return(
        <div className="reusable-image-and-text elevate-seating-container">
                <div className="texts">
                    <ResponsiveTypography startFontSizeInPX={46} endFontSizeInPX={26} HTMLTag="h1" txt="Elevate seating selection!" />
                    <ResponsiveTypography startFontSizeInPX={32} endFontSizeInPX={18} HTMLTag="h3" txt="Experience enhanced engagement with customized seating charts!" />

                    <div className="texts-with-icons">
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Attendees can choose their seats seamlessly." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Attendees can view seat availability in real-time." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Allow attendees to select seats based on their preferences." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Boost attendee satisfaction with multiple seating options." /></div>
                    </div>
                </div>


                <div className="image-container">
                    <img alt="Elevate Seating Selection" title="Elevate Seating Selection"  loading="lazy" src={ElevateSeatingImage} />
                </div>
        </div>
    )
}


export default ElevateSeating;