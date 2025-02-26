import { useEffect, useRef, useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import LargeRescountsLogo from "../../assets/static/images/large-rescounts-logo.webp";
import SmallRescountsLogo from "../../assets/static/images/small-rescounts-logo.webp";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { MdArrowForwardIos } from "react-icons/md";

// Importing Mobile Menu as a lazy component to aviod the overload code on the bundle
const LazyMobileMenu = lazy(() => import("./MobileMenu"));

const Header = () => {


    ////////////// Handling of Logo Toggling depending on Screen Width < || > 768px //////////////

    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);

    const hasResized = useRef(window.innerWidth > 768);

    useEffect(() => {
        const handleResize = () => {
            const isLarge = window.innerWidth > 768;

            if (isLarge && !hasResized.current) {
                setIsLargeScreen(true);
                hasResized.current = true;
            } else if (!isLarge && hasResized.current) {
                setIsLargeScreen(false);
                hasResized.current = false;
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    ////////////// Handling of Opening Mobile Menu //////////////

    const [openMenu, setOpenMenu] = useState(false);
    
    const getCloseDataFromMenu = (param) => {
        setOpenMenu(param)
    }


    ////////////// Handling of Products & Services Dropmenu //////////////

    const elementRef = useRef(null);
    const [height, setHeight] = useState(0);
    const [showDropMenu, setShowDropMenu] = useState(false);
    const timerRef = useRef(null)

    useEffect(() => {
        const observer = new ResizeObserver((entries) => {
          if (entries[0]) {
            setHeight(entries[0].contentRect.height);
          }
        });
    
        if (elementRef.current) {
          observer.observe(elementRef.current);
        }
    
        return () => {
          if (elementRef.current) {
            observer.unobserve(elementRef.current);
          }
        };
      }, []);

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
                    href: 'events',
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

    const handleShowDropMenu = (param) => {
        switch(param){
            case 'show':
                if (timerRef.current) {
                    clearTimeout(timerRef.current);
                }
                setShowDropMenu(true);
                break;
            case 'hide':
                timerRef.current = setTimeout(() => setShowDropMenu(false), 200);    
                break;
        }
    }

    return (
        <header>
            <div className="inner-header">
                <Link to="/" aria-label="Rescounts Tickets">
                    <img
                        src={isLargeScreen ? LargeRescountsLogo : SmallRescountsLogo}
                        className={isLargeScreen ? "large-logo-header" : "small-logo-header"}
                        loading="lazy"
                        alt="Rescounts Tickets Logo"
                        title="Rescounts Tickets"
                        aria-label="Rescounts Tickets Logo"
                    />
                </Link>

                <div className="header-links">
                    <div onMouseEnter={()=> handleShowDropMenu('show')} onMouseLeave={()=> handleShowDropMenu('hide')} className="products-services-container">
                        <Link ref={elementRef} to="#" aria-label="Products & Services" title="Products & Services">Products & Services {showDropMenu ? <IoIosArrowUp className="icon" /> : <IoIosArrowDown className="icon" />}</Link>

                        {
                            showDropMenu && (
                                <div style={{top: `${height + 5}px`}} className="products-services-dropmenu">
                                    {
                                        links.map((link, index) => {
                                            return(
                                                <div key={index} className="products-services-section">
                                                    <h2>{link.headline}</h2>
                                                    <div className="products-services-section-links">
                                                        {
                                                            link.links.map((e, key) => {
                                                                return(
                                                                    <Link key={key} to={e.href} aria-label={e.title} title={e.title}>{e.title} <span>{e.new && <span>NEW</span>} <MdArrowForwardIos className="icon" /></span></Link>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        }
                    </div>
                    <Link to="/resources" aria-label="Resources" title="Resources">Resources</Link>
                    <Link to="/booking" aria-label="Book a Demo" title="Book a Demo">Book a Demo</Link>
                    <Link to="/about" aria-label="Why Rescounts" title="Why Rescounts">Why Rescounts</Link>
                </div>

                <div className="header-btns">
                    <Link to="/register" aria-label="Register" title="Register">Register</Link>
                    <button onClick={()=> setOpenMenu(!openMenu)} aria-label="Mobile Menu" title="Menu"><FaBars className="icon" /></button>
                </div>
            </div>

            {
                openMenu && (
                    <Suspense fallback={null}>
                        <LazyMobileMenu openMenu={openMenu} sendDataToParent={getCloseDataFromMenu} />
                    </Suspense>
                )
            }

        </header>
    );
};

export default Header;
