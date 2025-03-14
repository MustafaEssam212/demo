import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import BurgundyCheckCircle from "../../utils/BurgundyCheckCircle"
import UnforgettableExperiencesImage from '../../../assets/static/svg/tickets-page/unforgettable-experiences.svg';




const UnforgettableExperiences = () => {
    return(
        <div className="reusable-image-and-text unforgettable-experiences-container">


                <div className="texts">
                    <ResponsiveTypography startFontSizeInPX={46} endFontSizeInPX={26} HTMLTag="h1" txt="Unforgettable experiences with event customization" />

                    <div className="texts-with-icons">
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Align tickets with your branding." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Create VIP and custom passes." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Use discount codes and early-bird deals." /></div>
                        <div className="text-with-icon"><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} HTMLTag="h5" txt="Enhance engagement through tailored experiences" /></div>
                    </div>
                </div>


                <div className="image-container">
                    <img alt="Unforgettable Experiences" title="Unforgettable Experiences"  loading="lazy" src={UnforgettableExperiencesImage} />
                </div>

        </div>
    )
}


export default UnforgettableExperiences;