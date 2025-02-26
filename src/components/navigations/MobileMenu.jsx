import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import { MdArrowForwardIos } from "react-icons/md";
import { useRef, useEffect, useState } from 'react';

const AnotherMobileMenu = ({sendDataToParent, openMenu}) => {


    ////////// Accordion Links //////////
    const links = [
        {
            headline: 'Products',
            links: [
                {
                    title: 'Ticketing and registration',
                    href: 'ticketing',
                    new: false
                },
                {
                    title: 'Vendor registration / payment',
                    href: '#',
                    new: false
                },
                {
                    title: 'Sponsor registration / payment',
                    href: '#',
                    new: false
                },
                {
                    title: 'Volunteers registration',
                    href: '#',
                    new: false
                },
                {
                    title: 'Skip-the-line services',
                    href: '#',
                    new: false
                },
                {
                    title: 'Kids ride control',
                    href: '#',
                    new: true
                },
                {
                    title: 'Interactive floor plans',
                    href: '#',
                    new: false
                },
                {
                    title: 'Built-in surveys',
                    href: '#',
                    new: false
                },
                {
                    title: 'QR codes',
                    href: '#',
                    new: false
                },
                {
                    title: 'Marketing Engine',
                    href: '#',
                    new: false
                },
                {
                    title: 'Email',
                    href: '#',
                    new: true
                },
                {
                    title: 'Promo code',
                    href: '#',
                    new: false
                },
                {
                    title: 'E-signature',
                    href: '#',
                    new: false
                }
            ]
        },
        {
            headline: 'Services',
            links: [
                {
                    title: 'On-Site Registeration',
                    href: '#',
                    new: false
                },
                {
                    title: 'Live Support',
                    href: '#',
                    new: true
                },
                {
                    title: 'Live Training',
                    href: '#',
                    new: false
                },
            ]
        }
    ]


    ////////// Track onClick Event Outside The Ref to Close The Mobile Menu //////////
    const MobileMenuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (MobileMenuRef.current && !MobileMenuRef.current.contains(event.target)) {
                sendDataToParent(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [sendDataToParent]);


    ////////// Delay for Smooth Opening//////////
    const [openVal, setOpenVal] = useState(false);

    useEffect(()=> {
        const timer = setTimeout(() => setOpenVal(openMenu), 100);
        return () => clearTimeout(timer);
    }, [openMenu])


    return(
        <div ref={MobileMenuRef} className={`mobile-menu-pop-container ${openVal ? "active" : ""}`}>
            <div className='mobile-menu-pop-links'>
                <Accordion className='accordion-container'>

                    <AccordionSummary className='accordion-summary' expandIcon={<IoIosArrowDown />} aria-controls="Products-&-Servies" aria-label='Products & Services' title='Products & Services'>
                    <p aria-label='Products & Services' title='Products & Services'>Products & Services</p>
                    </AccordionSummary>

                    <AccordionDetails className='accordion-details'>

                        {
                            links.map((e, key) => {
                                return(
                                    <div key={key} className='accordion-details-section'>
                                        <h4>{e.headline}</h4>
            
                                        <div className='accordion-details-section-links'>
                                            {
                                                e.links.map((link, index) => {
                                                    return(
                                                        <Link key={index} to={link.href} aria-label={link.title} title={link.title}>{link.title} <span>{link.new && <span>NEW</span>} <MdArrowForwardIos className='icon' /></span></Link>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </AccordionDetails>

                </Accordion>
                <Link className={location.pathname === '/resources' ? "active" : ""} to="/resources" aria-label="Resources" title="Resources">Resources <MdArrowForwardIos className='icon' /></Link>
                <Link className={location.pathname === '/booking' ? "active" : ""} to="/booking" aria-label="Book a Demo" title="Book a Demo">Book a Demo <MdArrowForwardIos className='icon' /></Link>
                <Link className={location.pathname === '/about' ? "active" : ""} to="/about" aria-label="Why Rescounts" title="Why Rescounts">Why Rescounts <MdArrowForwardIos className='icon' /></Link>
            </div>

            <Link to="/register" aria-label='Register' title='Register'>Register</Link>
        </div>
    )
    
}


export default AnotherMobileMenu;