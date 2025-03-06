
import ResponsiveTypography from "../reusable/ResponsiveTypography";
import CustomerRateImageOne from '../../assets/static/svg/events-homepage/customer-rate.svg';
import CustomerRateMobileImageOne from '../../assets/static/svg/events-homepage/customer-rate-mobile.svg';
import { useState, useEffect } from "react";




const WhatEventOrganizer = () => {



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

            <div className="what-event-organizers-img">
                    <img src={useWindowWidth() > 480 ? CustomerRateImageOne : CustomerRateMobileImageOne} />
            </div>
        </div>
    )
}


export default WhatEventOrganizer;