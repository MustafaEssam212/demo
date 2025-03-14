



import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import RegistrationManagement from '../../../assets/static/svg/festival/registration-management.svg';
import SecurePayment from '../../../assets/static/svg/festival/secure-payment.svg';
import BuyFromVendor from '../../../assets/static/svg/festival/buy-from-vendor.svg';
import FloorPlans from '../../../assets/static/svg/festival/floor-plans.svg';
import KidsActivities from '../../../assets/static/svg/festival/kids-activities.svg';

const RevolutionizeYourFestival = () => {

    const sections = [
        {
            title: "Registration management",
            subTitle: 'Simplifies attendee registration and check-in processes, reducing long queues and administrative hassles.',
            img: RegistrationManagement
        },
        {
            title: "Secure payment",
            subTitle: 'Ensure safe and reliable transaction processing , enhancing financial security for both organizers and attendees.',
            img: SecurePayment
        },
        {
            title: "Buy-from-vendor online",
            subTitle: 'Facilities online purchases directly from festival vendors, boosting vendor sales and attendee concenience.',
            img: BuyFromVendor
        },
        {
            title: "Floor plans",
            subTitle: 'Enables easy creation and management of interactive floor plans , optimizing space utilization and improving visitor navigation.',
            img: FloorPlans
        },
        {
            title: "Kids activities management",
            subTitle: 'Organizes and schedules children’s activities seamlessly , ensuring a fun and safe experience for young attendees.',
            img: KidsActivities
        }
    ]

    return(
        <div className="revolutionize-your-festival-container">
            
            <ResponsiveTypography startFontSizeInPX={46} endFontSizeInPX={22} txt="Revolutionize your festival management effortlessly with Rescounts" HTMLTag="h1" alignment="center" />
            <ResponsiveTypography startFontSizeInPX={22} endFontSizeInPX={18} txt="Rescounts offers a comprehensive suite of features tailored to meet the unique needs of festival organizers." alignment="center" HTMLTag="h3" />

            <div className="revolutionize-your-festival-sections">

                {
                    sections.map((e, key)=> {
                        return(
                            <div key={key} className="section">
                                    <div className="icon-container"><img loading="lazy" aria-label={e.title} alt={e.title} src={e.img} /></div>
                                    <ResponsiveTypography startFontSizeInPX={26} endFontSizeInPX={18} txt={e.title} HTMLTag="h2" alignment="center" />
                                    <ResponsiveTypography startFontSizeInPX={20} endFontSizeInPX={16} txt={e.subTitle} HTMLTag="p" alignment="center" />
                            </div>
                        )
                    })
                }

            </div>

        </div>
    )
}


export default RevolutionizeYourFestival;