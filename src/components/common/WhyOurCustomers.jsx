import { lazy } from "react";
import ResponsiveTypography from "../reusable/ResponsiveTypography";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RamadanExpoImage from '../../assets/static/images/home/ramadan-expo.webp';
import DiscoverEgyptImage from '../../assets/static/images/home/discover-egypt.webp';
import { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

// Import The Slider as Lazy component
const Slider = lazy(() => import("react-slick"));

const WhyOurCustomer = () => {



    const settings = {
        initialSlide: 1,
        infinite: false,
        centerMode: false,
        centerPadding: "0",
        slidesToShow: 2,
        speed: 500,
        dots: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 768,
            settings: { slidesToShow: 1, dots: true, initialSlide: 0},
          }
        ]
        
    };

    // Track Screen Width 
    const useWindowWidth = () => {
        const [width, setWidth] = useState(window.innerWidth);
        
        useEffect(() => {
            const handleResize = () => setWidth(window.innerWidth);
            
            window.addEventListener("resize", handleResize);
            
            return () => window.removeEventListener("resize", handleResize);
        }, []);
        
        return width;
    };

    return(
        <div className="why-our-customer-container">

            <ResponsiveTypography txt="Our Customers love Rescounts ?" startFontSizeInPX={38} endFontSizeInPX={20} HTMLTag="h1" alignment="center" />

            <div className="why-our-customer-carousel">

                <Slider {...settings}>

                {
                        useWindowWidth() > 480 ? <img loading="lazy" src={RamadanExpoImage} title="Discover Egypt Festival" alt="Discover Egypt Festival" />

                        :

                        <div className="mobile-customer-rate">
                            <div className="stars">
                                <IoIosStar className="icon" />
                                <IoIosStar className="icon" />
                                <IoIosStar className="icon" />
                                <IoIosStar className="icon" />
                                <IoIosStar className="icon" />
                            </div>
                            <p>5.0 rating</p>
                            <h6>Rescounts helped us take Ramadan Expo to the next level! Our vendor participation more than dobuled, and our revenue jumped through the roof. What really stood out was how they boosted our marketing, making connecting with our audience easier and bringing in more people than ever before. Rescounts made organizing the expo smoother and more rewarding than I could have imagined.</h6>
                            <p>Ibtissam Sebbahi</p>

                            <div className="dots">
                                <HiOutlineDotsHorizontal className="icon" />
                            </div>
                        </div>
                    }
                    
                    {
                        useWindowWidth() > 480 ? <img loading="lazy" src={DiscoverEgyptImage} title="Discover Egypt Festival" alt="Discover Egypt Festival" />

                        :

                        <div className="mobile-customer-rate">
                            <div className="stars">
                                <IoIosStar className="icon" />
                                <IoIosStar className="icon" />
                                <IoIosStar className="icon" />
                                <IoIosStar className="icon" />
                                <IoIosStar className="icon" />
                            </div>
                            <p>5.0 rating</p>
                            <h6>Rescounts made all the difference for us! Our festival went from good to incredible—we had more attendees and vendors than ever. What I love most is how easy they made everything, from ticketing to sponsor management. I couldn't be more thrilled with the results!</h6>
                            <p>Andrew Fahmy</p>

                            <div className="dots">
                                <HiOutlineDotsHorizontal className="icon" />
                            </div>
                        </div>
                    }


                    
                </Slider>

            </div>

        </div>
    )
}


export default WhyOurCustomer;