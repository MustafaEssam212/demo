
import ResponsiveTypography from "../reusable/ResponsiveTypography";
import BurgundyCheckCircle from "../utils/BurgundyCheckCircle";
import Button from "../reusable/Button";

const WhyOurCustomers = () => {

    const sections = [
        {
            title: 'All-in-one event management',
            texts: [
                'Quick setup',
                'Attendee, vendor, and sponsor registry',
                'Buy from vendors',
                'Kids’ ride control',
            ]
        },
        {
            title: 'Powerful marketing tools',
            texts: [
                'Email campaign builder',
                'Analytics and reporting',
                'Intuitive design',
                'Customizable promotions',
            ]
        },
        {
            title: 'Exceptional Customer Support',
            texts: [
                'Bilingual help desk',
                'Personalized assistance',
                'Proactive problem solving',
                '24/7 customer support',
            ]
        }
    ]

    return(
        <div className="why-our-customers-container">
            <ResponsiveTypography txt="Why our Customers love Rescounts ?" HTMLTag="h1" startFontSizeInPX={32} endFontSizeInPX={18}  />
            <div className="why-our-customers-sections">
                {
                    sections.map((section, key) => {
                        return(
                            <div key={key} className="why-our-customers-section">
                                <ResponsiveTypography txt={section.title} HTMLTag="h2" startFontSizeInPX={22} endFontSizeInPX={18} />
                                <div className="texts-container">
                                    {
                                        section.texts.map((text, index) => {
                                            return(
                                                <div className="text" key={index}><BurgundyCheckCircle additionalClassNames="circle" startHeightInPX={20} endHeightInPX={20} StartWidthInPX={20} endWidthInPX={20} /> <ResponsiveTypography txt={text} startFontSizeInPX={18} endFontSizeInPX={18} HTMLTag="h3" /></div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="btns">
                <div className="button-container"><Button startFontSizeInPX={18} endFontSizeInPX={15} borderColor="var(--yellow-color)" borderSizeInPx={2} borderRadius={8} backgroundColor="var(--yellow-color)" txt="Get Pricing" txtColor="var(--second-black-text-color)" /></div>
                <div className="button-container"><Button startFontSizeInPX={18} endFontSizeInPX={15} borderColor="var(--yellow-color)" borderSizeInPx={2} borderRadius={8} txt="Get started free" txtColor="var(--second-black-text-color)" /></div>
            </div>
        </div>
    )
};

export default WhyOurCustomers;