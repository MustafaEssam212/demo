import { Link } from "react-router-dom";
import ResponsiveTypography from "../reusable/ResponsiveTypography";
import { FiPhone, FiMail  } from "react-icons/fi";
import { FaLinkedinIn, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {

    const sectionsLinks = [
        {
            headline: 'Products',
            links: [
                {
                    title: 'Ticketing and registration',
                    href: 'ticketing'
                },
                {
                    title: 'Vendor registration / payment',
                    href: '#'
                },
                {
                    title: 'Sponsor registration / payment',
                    href: '#'
                },
                {
                    title: 'Volunteers registration',
                    href: '#'
                },
                {
                    title: 'Skip-the-line services',
                    href: '#'
                },
                {
                    title: 'Kids ride control',
                    href: '#'
                },
                {
                    title: 'Interactive floor plans',
                    href: '#'
                },
                {
                    title: 'Built-in surveys',
                    href: '#'
                },
                {
                    title: 'QR codes',
                    href: '#'
                },
                {
                    title: 'Marketing Engine',
                    href: '#'
                },
                {
                    title: 'Email',
                    href: '#'
                },
                {
                    title: 'Promo code',
                    href: '#'
                },
                {
                    title: 'E-signature',
                    href: '#'
                }
            ]
        },
        {
            headline: 'Services',
            links: [
                {
                    title: 'On-Site Registeration',
                    href: '#'
                },
                {
                    title: 'Live Support',
                    href: '#'
                },
                {
                    title: 'Live Training',
                    href: '#'
                },
            ]
        },
        {
            headline: 'Event Type',
            links: [
                {
                    title: 'Expos',
                    href: '#'
                },
                {
                    title: 'Trade shows',
                    href: '#'
                },
                {
                    title: 'Fairs',
                    href: '#'
                },
                {
                    title: 'Festivals',
                    href: '#'
                },
                {
                    title: 'Concerts',
                    href: '#'
                }
            ]
        },
        {
            headline: 'Resources',
            links: [
                {
                    title: 'How it works',
                    href: '#'
                },
                {
                    title: 'Why choose Rescounts?',
                    href: '#'
                },
                {
                    title: 'Case studies',
                    href: '#'
                },
                {
                    title: 'Blog',
                    href: '#'
                },
                {
                    title: 'FAQ',
                    href: '#'
                }
            ]
        },
        {
            headline: 'Policies',
            links: [
                {
                    title: 'Privacy policy',
                    href: '#'
                },
                {
                    title: 'Terms of Service',
                    href: '#'
                },
                {
                    title: 'Merchant agreement',
                    href: '#'
                },
                {
                    title: 'Purchase',
                    href: '#'
                }
            ]
        },
        {
            headline: 'Company',
            links: [
                {
                    title: 'About',
                    href: '#'
                },
                {
                    title: 'Contact us',
                    href: '#'
                },
                {
                    title: 'Careers',
                    href: '#'
                }
            ]
        },
    ]

    return(
        <footer>
            
            <div className="contact-us-section">
                <ResponsiveTypography startFontSizeInPX={26} endFontSizeInPX={18} HTMLTag="h2" additionalClassNames="contact-us-headline" txt="Contact US" />

                <div className="contact-info">
                    <div><FiPhone className="icon" /> <ResponsiveTypography startFontSizeInPX={15} endFontSizeInPX={15} HTMLTag="h3" additionalClassNames="contact-info-phone-headline" txt="18333366343" /></div>
                    <div><FiMail className="icon" /> <ResponsiveTypography startFontSizeInPX={15} endFontSizeInPX={15} HTMLTag="h3" additionalClassNames="contact-info-mail-headline" txt="info@Rescounts.com" /></div>
                </div>
            </div>

            <div className="footer-navs">

                {
                    sectionsLinks.map((e, key) => {
                        return(
                            <div key={key} className="section">
                                <p>{e.headline}</p>

                                <div className="section-links">
                                    {
                                        e.links.map((link, index) => {
                                            return(
                                                <Link key={index} to={link.href} title={link.title} aria-label={link.title}>{link.title}</Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    })
                }
                

            </div>

            <div className="footer-socials-copyright">
                <p>&copy; Copyright 2025 Rescounts</p>
                
                <div className="socials">
                    <Link to="#" target="_blank" aria-label="Linkedin" title="Linkedin"><FaLinkedinIn className="icon" /></Link>
                    <Link to="#" target="_blank" aria-label="Twitter" title="Twitter"><FaTwitter className="icon" /></Link>
                    <Link to="#" target="_blank" aria-label="Instagram" title="Instagram"><FaInstagram className="icon" /></Link>
                    <Link to="#" target="_blank" aria-label="Email" title="Email"><MdOutlineEmail className="icon" /></Link>
                    <Link to="#" target="_blank" aria-label="Whatsapp" title="Whatsapp"><FaWhatsapp className="icon" /></Link>
                </div>
            </div> 

        </footer>
    )
}


export default Footer;