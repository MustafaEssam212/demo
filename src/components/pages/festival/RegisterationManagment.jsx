
import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import BurgundyCheckCircle from "../../utils/BurgundyCheckCircle";
import RegistrationManagementImage from '../../../assets/static/svg/festival/registration-management-big.svg';

const RegistrationManagement = () => {
    return(
        <div className="registration-management-container">
            <div className="texts-container">
                <ResponsiveTypography txt="Registration management" startFontSizeInPX={56} endFontSizeInPX={22} HTMLTag="h1" />
                <ResponsiveTypography txt="Streamline attendee and vendor sign-ups" startFontSizeInPX={32} endFontSizeInPX={14} HTMLTag="h6" />

                <div className="texts-with-icons">
                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Efficient sign-up process:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Streamline attendee and vendor registration with customizable forms" startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Real-time updates:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Instantly track attendee and vector numbers and demographics." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Data security:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Securely handle personal information in compliance with privacy regulations." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Secure payments" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Ensure trust and reliability." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="img-container">
                <img src={RegistrationManagementImage} alt="Registration Management" title="Registration Management" />
            </div>
        </div>
    )
}

export default RegistrationManagement;