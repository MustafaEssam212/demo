import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import CustomizableTicket from '../../../assets/static/svg/tickets-page/customizable-ticket.svg';
import SecurePayment from '../../../assets/static/svg/tickets-page/secure-payment.svg';
import UserFriendly from '../../../assets/static/svg/tickets-page/user-friendly-interface.svg';
import CustomizedSeatingCharts from '../../../assets/static/svg/tickets-page/customized-seating-charts.svg';
import CapacityManagement from '../../../assets/static/svg/tickets-page/capacity-management.svg';
import MarketingEngine from '../../../assets/static/svg/tickets-page/marketing-engine.svg';
import QRCode from '../../../assets/static/svg/tickets-page/qr-code.svg';
import DataAnalytics from '../../../assets/static/svg/tickets-page/data-analytics.svg';
import LiveSupport from '../../../assets/static/svg/tickets-page/live-support.svg';

const GameChanging = () => {

    const sections = [
        {
            title: "Customizable ticket types & pricing",
            img: CustomizableTicket
        },
        {
            title: "Secure payment gateways integration",
            img: SecurePayment
        },
        {
            title: "Innovative, fast, & user-friendly interface",
            img: UserFriendly
        },
        {
            title: "Customized seating charts",
            img: CustomizedSeatingCharts
        },
        {
            title: "Capacity management to avoid overbooking",
            img: CapacityManagement
        },
        {
            title: "Built-in marketing engine",
            img: MarketingEngine
        },
        {
            title: "QR code for ticket scanning",
            img: QRCode
        },
        {
            title: "Data & analytics",
            img: DataAnalytics
        },
        {
            title: "Live support",
            img: LiveSupport
        }
    ]

    return(
        <div className="game-changing-container">
            
            <ResponsiveTypography startFontSizeInPX={46} endFontSizeInPX={22} txt="Game-changing benefits and tools" HTMLTag="h1" alignment="center" />

            <div className="game-changing-sections">

                {
                    sections.map((e, key)=> {
                        return(
                            <div key={key} className="section">
                                    <div className="icon-container"><img loading="lazy" aria-label={e.title} alt={e.title} src={e.img} /></div>
                                    <ResponsiveTypography startFontSizeInPX={22} endFontSizeInPX={18} txt={e.title} HTMLTag="h2" alignment="center" />
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}


export default GameChanging;