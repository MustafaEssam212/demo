import { Link } from "react-router-dom"
import ImageWithPlaceholder from "./ImageWithPlaceholder";
import ResponsiveTypography from "./ResponsiveTypography";
import { IoShareSocialOutline } from "react-icons/io5";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";



const EventCard = ({keywords = [], img = "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png", title = "card title", date = "", time = "", city = "", price = 0, liked = false, sendDataToParent, id = ""}) => {


    ///////// Handle Like Toggle and Disable The First Render 
    const [likedVal, setLikedVal] = useState(liked);
    const firstRender = useRef(true);

    const toggleLike = () => {
        setLikedVal(prev => !prev);
    };

    useEffect(() => {
        if (firstRender.current) {
            firstRender.current = false;
            return;
        }
        sendDataToParent(likedVal, id);
    }, [likedVal]);

    return(
        <div className="event-card-container">
            <div className="event-card-img">
                <ImageWithPlaceholder src={img} title={title} alt={title} />
                <div className="price-like">
                    <ResponsiveTypography HTMLTag="p" startFontSizeInPX={18} endFontSizeInPX={15} txt={`Starting from $${price}`} />
                    <button aria-label="Like Button" onClick={toggleLike} className={`like-btn ${likedVal ? "liked" : ""}`}>
                        {likedVal ? (
                            <IoHeartSharp className="icon filled" />
                        ) : (
                            <IoHeartOutline className="icon outline" />
                        )}
                    </button>
                </div>
            </div>
            <div className="event-card-info">
                <div className="card-link-title">
                    <Link to="#"><ResponsiveTypography HTMLTag="span" txt={title} startFontSizeInPX={26} endFontSizeInPX={20} /></Link>
                </div>

                <div className="date-share">
                    <p><span>{date}</span> <span className="circle"></span> <span>{time}</span></p>
                    <button aria-label="share"><IoShareSocialOutline className="icon" /></button>
                </div>

                <p className="city"><span>{city}</span> <span className="circle"></span> <span>On</span></p>

                <div className="keywords">
                    {keywords.map((keyword, index) => (
                        <ResponsiveTypography key={index} txt={keyword} startFontSizeInPX={16} endFontSizeInPX={12} HTMLTag="span" />
                    ))}
                </div>

            </div>
        </div>
    )
}


export default EventCard;