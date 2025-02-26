import { Link } from "react-router-dom";
import ResponsiveTypography from "../reusable/ResponsiveTypography";
import IntuitiveInterface from '../../assets/static/svg/tickets-page/intuitive-interface.svg';
import FastProcessing from '../../assets/static/svg/tickets-page/fast-processing.svg';
import MobileOptimized from '../../assets/static/svg/tickets-page/mobile-optimized.svg';


const ExpandYourEvent = () => {
    return(
        <div className="expand-your-event">

            <div className="inner-expand-your-event">


                <div className="slogans">
                        <ResponsiveTypography startFontSizeInPX={46} endFontSizeInPX={22} txt="Expand your event horizons!" HTMLTag="h1" />
                        <ResponsiveTypography startFontSizeInPX={22} endFontSizeInPX={15} txt={<>Rescounts' innovative ticketing and registration system makes managing your events a breeze. <Link to="#" aria-label="Here's how" title="Here's how"><ResponsiveTypography startFontSizeInPX={22} endFontSizeInPX={15} txt="Here's how" HTMLTag="span" /></Link></>} HTMLTag="h5" additionalClassNames="centered-headline" />

                </div>


                <div className="icon-cards">

                    <div className="card">
                        <img loading="lazy" aria-label="Intuitive Interface" title="Intuitive Interface" src={IntuitiveInterface} />
                        <div className="texts">
                            <ResponsiveTypography startFontSizeInPX={32} endFontSizeInPX={18} txt="Intuitive interface" HTMLTag="h2" />
                            <ResponsiveTypography startFontSizeInPX={20} endFontSizeInPX={14} txt="A clear and user-friendly design, making it easy for attendees to navigate and register." HTMLTag="h4" />
                        </div>
                    </div>


                    <div className="card">
                        <img loading="lazy" aria-label="Fast Processing" title="Fast Processing" src={FastProcessing} />
                        <div className="texts">
                            <ResponsiveTypography startFontSizeInPX={32} endFontSizeInPX={18} txt="Fast processing" HTMLTag="h2" />
                            <ResponsiveTypography startFontSizeInPX={20} endFontSizeInPX={14} txt="our system processes registrations & ticket purchases instantly." HTMLTag="h4" />
                        </div>
                    </div>


                    <div className="card">
                        <img loading="lazy" aria-label="Intuitive Interface" title="Intuitive Interface" src={MobileOptimized} />
                        <div className="texts">
                            <ResponsiveTypography startFontSizeInPX={32} endFontSizeInPX={18} txt="Mobile-optimized" HTMLTag="h2" />
                            <ResponsiveTypography startFontSizeInPX={20} endFontSizeInPX={14} txt="Mobile-optimized Attendees can buy tickets directly from their smartphones anytime, anywhere." HTMLTag="h4" />
                        </div>
                    </div>


                </div>


            </div>
              
        </div>
    )
}


export default ExpandYourEvent;