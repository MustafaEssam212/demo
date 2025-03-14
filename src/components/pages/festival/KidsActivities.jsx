import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import BurgundyCheckCircle from "../../utils/BurgundyCheckCircle";
import KidsActivitiesImage from '../../../assets/static/svg/festival/kids-activities-big.svg';



const KidsActivities = () => {
    return(
        <div className="kids-activities-container">
            <div className="texts-container">
                <ResponsiveTypography txt="Kids activities management" startFontSizeInPX={56} endFontSizeInPX={22} HTMLTag="h1" />
                <ResponsiveTypography txt="Ensure safe and engaging activities" startFontSizeInPX={32} endFontSizeInPX={14} HTMLTag="h6" />

                <div className="texts-with-icons">
                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Activity scheduling:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Plan and schedule a variety of activities for different age groups." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="safety protocols:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Implement safety measures and emergency protocols." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Activity feedback:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="gather feedback from parents and children to improve future activities." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="img-container">
                <img src={KidsActivitiesImage} alt="Kids Activities" title="Kids Activities" />
            </div>
        </div>
    )
}


export default KidsActivities;