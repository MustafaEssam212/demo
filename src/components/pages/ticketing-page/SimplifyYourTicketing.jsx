
import ResponsiveTypography from '../../reusable/ResponsiveTypography';
import SimplifyYourTicketingImage from '../../../assets/static/svg/tickets-page/simplify-your-ticketing.svg';

const SimplifyYourTicketing = () => {
    return(
        <div className="simplify-your-ticketing-container">
            
                <div className='slogans'>
                    <ResponsiveTypography startFontSizeInPX={46} endFontSizeInPX={26} txt="Simplify your ticketing process with Rescounts' ticketing and registration system" HTMLTag="h1" additionalClassNames='slogan-headline' />
                    <ResponsiveTypography startFontSizeInPX={22} endFontSizeInPX={14} txt="Rescounts' ticketing system streamlines online sales, attendee registration, and real-time tracking, enhancing your event experience, say goodbye to traditional ticketing hassles and embrace the convenience of Rescounts" HTMLTag="h4" additionalClassNames='slogan-parag' />
                </div>

                <div className='img'>
                    <img src={SimplifyYourTicketingImage} alt='Simplify your ticketing process with Rescounts ticketing and registration system' title="Simplify your ticketing process with Rescounts ticketing and registration system" />
                </div>

        </div>
    )
}


export default SimplifyYourTicketing;