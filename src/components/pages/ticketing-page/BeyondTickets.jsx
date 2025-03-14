
import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import FlexibleWorkingImage from '../../../assets/static/svg/tickets-page/flexible-working.svg';
import TargetedMarketImage from '../../../assets/static/svg/tickets-page/targeted-marketing.svg';
import DeeperAudienceImage from '../../../assets/static/svg/tickets-page/deeper-audience.svg';
import DataDrivenImage from '../../../assets/static/svg/tickets-page/data-driven.svg';
import BurgundyCheckCircle from "../../utils/BurgundyCheckCircle";


const cards = [
    {
        title: 'Flexible Working',
        texts: ['Track purchases instantly.', 'Make capacity decisions quickly.'],
        img: FlexibleWorkingImage
    },
    {
        title: 'Deeper Audience Insights',
        texts: ['Analyze attendee demographics.', 'Identify purchasing patterns.'],
        img: DeeperAudienceImage
    },
    {
        title: 'Targeted Marketing Impact',
        texts: ['Optimize strategies via data.', 'Tailor promotions effectively.'],
        img: TargetedMarketImage
    },
    {
        title: 'Data-Driven Reporting',
        texts: ['Access diverse reports.', 'Refine event strategy continuously.'],
        img: DataDrivenImage
    }
]

const BeyondTickets = () => {
    return(
        <div className="beyond-tickets-container">
            <ResponsiveTypography startFontSizeInPX={46} endFontSizeInPX={26} txt="Beyond tickets & registrations data-powered strategies" HTMLTag="h1" />
            <ResponsiveTypography startFontSizeInPX={22} endFontSizeInPX={16} txt="Leverage the power of data to gain valuable event insights with Rescounts reporting and analytics!" HTMLTag="h3" />

            <div className="icons-cards-container">

                {
                    cards.map((e, key) => {
                        return(
                            <div key={key} className="icon-card">
                            <img loading="lazy" src={e.img} title={e.title} alt={e.title} />
        
                            <div className="icon-card-texts">
                                <ResponsiveTypography startFontSizeInPX={32} endFontSizeInPX={18} txt={e.title} HTMLTag="h2" />
        
                                <div className="inner-icon-card-texts">
                                    {
                                        e.texts.map((text, index) => {
                                            return(
                                                <div key={index}><BurgundyCheckCircle startHeightInPX={24} StartWidthInPX={24} endHeightInPX={21.59} endWidthInPX={21.59} /> <ResponsiveTypography startFontSizeInPX={18} endFontSizeInPX={14} txt={text} HTMLTag="h4" /></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        )
                    })
                }

            </div>
        </div>
    )
}


export default BeyondTickets;