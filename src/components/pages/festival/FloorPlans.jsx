import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import BurgundyCheckCircle from "../../utils/BurgundyCheckCircle";



const FloorPlans = () => {
    return(
        <div className="floor-plans-container">
            <div className="texts-container">
                <ResponsiveTypography txt="Floor plans" startFontSizeInPX={56} endFontSizeInPX={22} HTMLTag="h1" />
                <ResponsiveTypography txt="Optimize space and navigation" startFontSizeInPX={32} endFontSizeInPX={14} HTMLTag="h6" />

                <div className="texts-with-icons">
                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Interactive mapping:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="create interactive floor plans with booth details and amenities." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Vendor navigation:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Help vendors easily navigate through festival grounds." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Vendors placement optimization:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Optimize vendor placements for maximum exposure and traffic flow." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Real-time updates" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="quickly adjust floor plans based on last-minute changes or additions." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FloorPlans;