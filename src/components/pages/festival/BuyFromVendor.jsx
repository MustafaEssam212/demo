import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import BurgundyCheckCircle from "../../utils/BurgundyCheckCircle";
import BuyFromVendorImage from '../../../assets/static/svg/festival/buy-from-vendor-big.svg';




const BuyFromVendor = () => {
    return(
        <div className="buy-from-vendor-container">
            <div className="texts-container">
                <ResponsiveTypography txt="Buy-from-vendor online" startFontSizeInPX={56} endFontSizeInPX={22} HTMLTag="h1" />
                <ResponsiveTypography txt="Enhance vendor sales" startFontSizeInPX={32} endFontSizeInPX={14} HTMLTag="h6" />

                <div className="texts-with-icons">
                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Direct sales channel:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Provide vendors with an additional revenue stream through sales" startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Centralized marketplace:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Create a virtual marketplace for easy browsing and purchasing" startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Inventory management:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Track and manage vendor inventory in real-time" startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Customer feedback" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Collect and analyze customer feedback to improve vendor offering." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="img-container">
                <img src={BuyFromVendorImage} alt="Buy From Vendor" title="Buy From Vendor" />
            </div>
        </div>
    )
}


export default BuyFromVendor;