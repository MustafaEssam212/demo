import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import BurgundyCheckCircle from "../../utils/BurgundyCheckCircle";



const PaymentGateway = () => {
    return(
        <div className="payment-gateway-container">
            <div className="texts-container">
                <ResponsiveTypography txt="Payment gateway integration" startFontSizeInPX={56} endFontSizeInPX={22} HTMLTag="h1" />
                <ResponsiveTypography txt="Seamlessly integrate with trusted payment gateways for secure transactions." startFontSizeInPX={32} endFontSizeInPX={14} HTMLTag="h6" />

                <div className="texts-with-icons">
                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Fraud protection:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Safeguard against fraudulent activities and ensure financial integrity." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Flexible payment option:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Offer multiple payment methods to cater to diverse preferences." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>

                    <div className="text">
                        <div className="burg-icon-container">
                            <BurgundyCheckCircle additionalClassNames="burg-icon" startHeightInPX={25} endHeightInPX={16} StartWidthInPX={25} endWidthInPX={16} />
                        </div>

                        <div className="sub-texts">
                            <ResponsiveTypography txt="Automated invoicing:" startFontSizeInPX={22} endFontSizeInPX={18} HTMLTag="h3" />
                            <ResponsiveTypography txt="Simplify billing and reconciliation processes for vendors and organizers." startFontSizeInPX={22} endFontSizeInPX={14} HTMLTag="h4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentGateway;