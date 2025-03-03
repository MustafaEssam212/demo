
import ResponsiveTypography from "../reusable/ResponsiveTypography";
import EventRegisterationImage from '../../assets/static/svg/events-homepage/event-registeration.svg';
import AdvancedMarketingImage from '../../assets/static/svg/events-homepage/advanced-marketing.svg';
import SkipTheLineImage from '../../assets/static/svg/events-homepage/skip-the-line.svg';
import KidsImage from '../../assets/static/svg/events-homepage/kids.svg';
import PaymentImage from '../../assets/static/svg/events-homepage/payment.svg';
import Button from "../reusable/Button";

const WhyChooseRescounts = () => {


    const cards = [
        {
            img: EventRegisterationImage,
            title: 'Event Registration Platform',
            description: 'Optimize event sign-ups with a user-friendly registration process for both organizers and attendees.',
        },
        {
            img: PaymentImage,
            title: 'Sponsor registration/ payment',
            description: 'Manage sponsor applications and payments smoothly, ensuring a hassle-free partnership experience.',
        },
        {
            img: PaymentImage,
            title: 'Vendor registration/ payment',
            description: 'Handle vendor onboarding and transactions with ease, making logistical management straightforward.',
        },
        {
            img: KidsImage,
            title: 'Kids’ ride control',
            description: 'Provide a secure and enjoyable experience for families with our specialized kids’ & ride management features.',
        },
        {
            img: SkipTheLineImage,
            title: 'Skip-the-line Services',
            description: 'Cut down on wait times with online ordering and give vendors a platform to showcase their products efficiently.',
        },
        {
            img: AdvancedMarketingImage,
            title: 'Advanced Marketing & Analytics',
            description: 'Gain valuable insights with detailed analytics that help you refine and improve your event strategy.',
        }
    ]

    return(
        <div className="why-choose-rescounts-container">
            <div className="inner-why-choose-rescounts">

                <div className="headers">
                    <ResponsiveTypography HTMLTag="h1" txt="Why choose Rescounts ?" startFontSizeInPX={38} endFontSizeInPX={18} />
                    <ResponsiveTypography HTMLTag="h2" txt="We transform Event Management with Innovation and Simplicity" startFontSizeInPX={26} endFontSizeInPX={18} />
                </div>

                <div className="cards-container">

                    {
                        cards.map((e, key) => {
                            return(
                                <div key={key} className="card">
                                    <div className="card-head">
                                        <img src={e.img} loading="lazy" alt={e.title} title={e.title} />
                                        <ResponsiveTypography HTMLTag="h5" txt={e.title} startFontSizeInPX={26} endFontSizeInPX={18} />
                                    </div>
        
                                    <div className="card-description">
                                        <ResponsiveTypography HTMLTag="h6" txt={e.description} startFontSizeInPX={18} endFontSizeInPX={13} />
                                    </div>
        
                                    <div className="card-button">
                                        <div className="button-container">
                                            <Button txt="Learn more" startFontSizeInPX={18} endFontSizeInPX={15} backgroundColor="var(--yellow-color)" txtColor="var(--second-black-text-color)" borderRadius={8} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }



                </div>

            </div>
        </div>
    )
}


export default WhyChooseRescounts;