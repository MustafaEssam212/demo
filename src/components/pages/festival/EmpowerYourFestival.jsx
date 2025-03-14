import EmpowerYourFestivalImage from '../../../assets/static/svg/festival/empower-your-festival.svg';
import ResponsiveTypography from '../../reusable/ResponsiveTypography';



const EmpowerYourFestival = () => {
    return(
        <div className='empower-your-festival-container'>
            <div className='slogans'>
                <ResponsiveTypography startFontSizeInPX={46} endFontSizeInPX={26} txt="Empower your festival with Rescounts' all-in-one management platform" HTMLTag="h1" additionalClassNames='slogan-headline' />
                <ResponsiveTypography startFontSizeInPX={22} endFontSizeInPX={14} txt="Rescounts simplifies festival management with intuitive tools designed to enhance attendee's experience and organizational efficiency." HTMLTag="h4" additionalClassNames='slogan-parag' />
            </div>

            <div className='img'>
                <img src={EmpowerYourFestivalImage} alt='Empower your festival with Rescounts all-in-one management platform' title="Empower your festival with Rescounts'’s' all-in-one management platform" />
            </div>
        </div>
    )
}


export default EmpowerYourFestival;

