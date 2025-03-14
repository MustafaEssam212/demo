
import ResponsiveTypography from "../../reusable/ResponsiveTypography";
import CustomerRateImageOne from '../../../assets/static/svg/events-homepage/customer-rate.svg';
import { useState, useEffect } from "react";
import { IoIosStar } from "react-icons/io";
import { HiOutlineDotsHorizontal } from "react-icons/hi";


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

            <div className="what-event-organizers-sections">
                    {
                        useWindowWidth() > 480 ? <img src={CustomerRateImageOne} alt="Customer Rate" title="Customer rate" /> 

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
                    

            </div>
        </div>
    )
}


export default WhatEventOrganizer;