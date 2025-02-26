import ResponsiveTypography from "../reusable/ResponsiveTypography"
import BurgundyCheckCircle from "../utils/BurgundyCheckCircle"
import StayInControlImage from '../../assets/static/svg/tickets-page/stay-in-control.svg';





const StayInControl = () => {
    return(
        <div className="reusable-image-and-text stay-in-control-container">
                <div className="texts">
                    <ResponsiveTypography startFontSizeInPX={46} endFontSizeInPX={26} HTMLTag="h1" txt="Stay in control and avoid overbooking" />

                    <div className="texts-with-icons">
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Set and manage ticket sales limits based on venue capacity." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Avoid any shortage of parking spaces through maximum bookings." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Avoid any health and safety hazards." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Handle potential ticket cancellations or changes." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Get real-time updates on ticket availability." /></div>
                    </div>
                </div>


                <div className="image-container">
                    <img alt="Unforgettable Experiences" title="Unforgettable Experiences"  loading="lazy" src={StayInControlImage} />
                </div>
        </div>
    )
}


export default StayInControl;