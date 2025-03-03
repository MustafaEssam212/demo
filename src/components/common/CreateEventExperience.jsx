import { useRef, useState, useEffect } from "react";
import ResponsiveTypography from '../reusable/ResponsiveTypography';
import BestResultsImage from '../../assets/static/svg/events-homepage/Best-Result.svg';
import BestSupportImage from '../../assets/static/svg/events-homepage/Best-Support.svg';
import FastestImplementationImage from '../../assets/static/svg/events-homepage/Fastest_implementation.svg';
import HighPerformerImage from '../../assets/static/svg/events-homepage/High_performer.svg';
import ServiceExcellenceImage from '../../assets/static/svg/events-homepage/Service-Excellence.svg';

const CreateEventExperience = () => {


    const logosRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isScrollingRef = useRef(false);


    //////////// Handle the onClick dot ////////////

    const handleDotClick = (index) => {
        const container = logosRef.current;
        if (container) {
            isScrollingRef.current = true;
            const scrollAmount = container.scrollWidth / 2;
            container.scrollTo({ left: scrollAmount * index, behavior: "smooth" });

            setTimeout(() => {
                setActiveIndex(index);
                isScrollingRef.current = false;
            }, 300);
        }
    };


    //////////// Handle the Toggle active className of dot depending on scrolling ////////////

    useEffect(() => {
        const container = logosRef.current;
        if (!container) return;

        let timeoutId;

        const handleScroll = () => {
            if (isScrollingRef.current) return;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const scrollLeft = container.scrollLeft;
                const scrollWidth = container.scrollWidth;
                const containerWidth = container.clientWidth;
                
                const index = Math.round((scrollLeft / (scrollWidth - containerWidth)) * 1);
                setActiveIndex(index);
            }, 150);
        };

        container.addEventListener("scroll", handleScroll);
        return () => {
            container.removeEventListener("scroll", handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div className="create-event-experience">
            <ResponsiveTypography startFontSizeInPX={22} endFontSizeInPX={16} txt="Create the best event experience with the most trusted event management software" HTMLTag="h3" />

            <div ref={logosRef} className="images-container">
                <img src={BestResultsImage} loading="lazy" alt="Rescounts Best Results" title="Rescounts Best Results" />
                <img src={HighPerformerImage} loading="lazy" alt="Rescounts High Performer" title="Rescounts High Performer" />
                <img src={ServiceExcellenceImage} loading="lazy" alt="Rescounts Service Excellence" title="Rescounts Service Excellence" />
                <img src={FastestImplementationImage} loading="lazy" alt="Rescounts Fastest Implementation" title="Rescounts Fastest Implementation" />
                <img src={BestSupportImage} loading="lazy" alt="Rescounts Best Support" title="Rescounts Best Support" />
            </div>

            <div className="dots">
                {[0, 1].map((index) => (
                    <button
                        key={index}
                        className={`dot ${index === activeIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                        aria-label="dot"
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default CreateEventExperience;
