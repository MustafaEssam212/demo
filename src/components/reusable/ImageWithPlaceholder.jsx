import { useState } from "react";
import SmallSpinner from "../utils/SmallSpinner";

// The main usage of this custom components is to display images inside cards or a container
// src is required to display the image, Alt, and title for SEO, Object-fit by default is "cover"
// IMG will be automatically set as 100% width and height, So the div parent should wrap it to control height and width
// You can add an additional class names to the image (String)
// Loading spinner will be shown until src is loaded


const ImageWithPlaceholder = ({ src, alt, title, objectFit = "cover", additionalClassNames = "" }) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <div className="lazy-img-container">
            {!loaded && (
                <div className="lazy-img-placeholder">
                    <SmallSpinner />
                </div>
            )}
            <img
                src={src}
                alt={alt}
                title={title}
                className={`lazy-img ${additionalClassNames} ${loaded ? "loaded" : "not-loaded"}`}
                style={{ objectFit }}
                loading="lazy"
                onLoad={() => setLoaded(true)}
                onError={() => setLoaded(true)}
            />
        </div>
    );
};

export default ImageWithPlaceholder;
