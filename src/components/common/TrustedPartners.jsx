import { useRef, useState, useEffect } from "react";
import AmericanExpress from "../../assets/static/svg/common/american-express.svg";
import ApplePay from "../../assets/static/svg/common/apple-pay.svg";
import AWS from "../../assets/static/svg/common/aws.svg";
import Google from "../../assets/static/svg/common/google.svg";
import GooglePay from "../../assets/static/svg/common/google-pay.svg";
import MasterCard from "../../assets/static/svg/common/mastercard.svg";
import Meta from "../../assets/static/svg/common/meta.svg";
import PayPal from "../../assets/static/svg/common/paypal.svg";
import Stripe from "../../assets/static/svg/common/stripe.svg";
import Visa from "../../assets/static/svg/common/visa.svg";
import ResponsiveTypography from "../reusable/ResponsiveTypography";

const TrustedPartners = () => {


    const partners = [
        { title: "American Express", img: AmericanExpress },
        { title: "Apple Pay", img: ApplePay },
        { title: "META", img: Meta },
        { title: "Google Pay", img: GooglePay },
        { title: "Mastercard", img: MasterCard },
        { title: "Paypal", img: PayPal },
        { title: "Visa", img: Visa },
        { title: "Stripe", img: Stripe },
        { title: "Google", img: Google },
        { title: "AWS", img: AWS },
    ];

    const partnersRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const isScrollingRef = useRef(false);

    //////////// Handle the onClick dot ////////////

    const handleDotClick = (index) => {
        const container = partnersRef.current;
        if (container) {
            isScrollingRef.current = true;
            const scrollAmount = container.scrollWidth / 3;
            container.scrollTo({ left: scrollAmount * index, behavior: "smooth" });

            setTimeout(() => {
                setActiveIndex(index);
                isScrollingRef.current = false;
            }, 300);
        }
    };


    //////////// Handle the Toggle active className of dot depending on scrolling ////////////

    useEffect(() => {
        const container = partnersRef.current;
        if (!container) return;

        let timeoutId;

        const handleScroll = () => {
            if (isScrollingRef.current) return;

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                const scrollLeft = container.scrollLeft;
                const scrollWidth = container.scrollWidth;
                const containerWidth = container.clientWidth;

                const index = Math.round((scrollLeft / (scrollWidth - containerWidth)) * 2);
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
        <div className="trusted-partners-container">
            <ResponsiveTypography startFontSizeInPX={32} endFontSizeInPX={22} txt="Trusted partners" HTMLTag="h1" />

            <div className="partners-imgs" ref={partnersRef}>
                {partners.map((e, key) => (
                    <img key={key} loading="lazy" alt={e.title} title={e.title} src={e.img} />
                ))}
            </div>

            <div className="dots">
                {[0, 1, 2].map((index) => (
                    <div
                        key={index}
                        className={`dot ${index === activeIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default TrustedPartners;
