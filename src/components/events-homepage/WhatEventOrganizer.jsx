
import ResponsiveTypography from "../reusable/ResponsiveTypography";
import CustomerRateImageOne from '../../assets/static/svg/events-homepage/customer-rate.svg';
import CustomerRateImageTwo from '../../assets/static/svg/events-homepage/customer-rate-elisa.svg';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { lazy, Suspense } from "react";
import ImageWithPlaceholder from "../reusable/ImageWithPlaceholder";
import CustomerRateMobileImageOne from '../../assets/static/svg/events-homepage/customer-rate-mobile.svg';
import CustomerRateMobileImageTwo from '../../assets/static/svg/events-homepage/customer-rate-mobile-elisa.svg';
import { useState, useEffect } from "react";



// Import The Slider as Lazy component
const Slider = lazy(() => import("react-slick"));

const WhatEventOrganizer = () => {


    // React Slick Settings
    const settings = {
        initialSlide: 0,
        infinite: true,
        centerMode: false,
        centerPadding: "0",
        slidesToShow: 1,
        speed: 500,
        dots: true,
        arrows: false,
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
        <div className="what-event-organizers-container">
            <ResponsiveTypography txt="What Event Organizers say about Rescounts ?" HTMLTag="h1" startFontSizeInPX={32} endFontSizeInPX={18} />

            <div className="what-event-organizers-carousel">
                <Suspense fallback={null}>
                    <Slider {...settings}>
                        <ImageWithPlaceholder src={useWindowWidth() > 480 ? CustomerRateImageOne : CustomerRateMobileImageOne} alt="Customer Rate" title="Customer Rate" />
                        <ImageWithPlaceholder src={useWindowWidth() > 480 ? CustomerRateImageTwo : CustomerRateMobileImageTwo} alt="Customer Rate" title="Customer Rate" />
                    </Slider>
                </Suspense>
            </div>
        </div>
    )
}


export default WhatEventOrganizer;