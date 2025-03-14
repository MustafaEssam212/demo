
import ResponsiveTypography from "../../reusable/ResponsiveTypography"
import BurgundyCheckCircle from "../../utils/BurgundyCheckCircle"
import AroundTheClocklImage from '../../../assets/static/svg/tickets-page/around-the-clock.svg';







const AroundTheClock = () => {
    return(
        <div className="reusable-image-and-text around-the-clock">
                <div className="texts">
                    <ResponsiveTypography startFontSizeInPX={46} endFontSizeInPX={26} HTMLTag="h1" txt="Around-the-clock assistance for smooth ticketing and registration" />
                    <ResponsiveTypography startFontSizeInPX={22} endFontSizeInPX={16} HTMLTag="h3" txt="Allow customers to get instant assistance and real-time support for technical issues, ticket inquiries, and troubleshooting." />

                    <div className="texts-with-icons">
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Bilingual support team (English / French)" /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Live chat via WhatsApp text" /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Toll-free numbers" /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Rescounts direct line" /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Live support every day from 9 Am -10 Pm" /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Email communication" /></div>
                    </div>
                </div>


                <div className="image-container">
                    <img alt="Around-the-clock assistance for smooth ticketing and registration" title="Around-the-clock assistance for smooth ticketing and registration"  loading="lazy" src={AroundTheClocklImage} />
                </div>
        </div>  
    )
}


export default AroundTheClock;