import React from "react";


// This is a Custom Component That is used to make a responsive typography element in JSX
// Requried params are (startFontSizeInPX (Number), endFontSizeInPX (Number), HTMLTag (String), txt(String))
// Optional params are (lineHeightPercentageValue (Number), alignment (String), additionalClassNames (String))
// Depending on the UI/UX Design you will be provided with the typography font size of the Biggest Screens "Desktop" and it will be our required (startFontSizeInPX such as 46) and the Smallest screens also (endFontSizeInPX such as 22) our ResponsiveTypography will handle in the middle also with the tablets.
//  HTMLTag => Required to define our Typography as an element type such as h1 to 6, p, span, etc...
// txt => Required to define our text that will be displayed inside our HTML Tag
// lineHeightPercentageValue => Optional and it is set to 150% by default If your UI/UX Design changes this value you can overwrite it
// alignment => Optional to align the text into the center, right, and left. It is set to left by default as usual.
// additionalClassNames => Optional to write an additional class names to our element.

// !IMPORTANT! => Do not use this custom component with texts that are over 46px

// Ex:// <ResponsiveTypography txt={`Simplify your ticketing process with Rescounts's ticketing and registration system`} HTMLTag={`p`} startFontSizeInPX={26} endFontSizeInPX={16} alignment="center" />





const ResponsiveTypography = ({
    startFontSizeInPX,
    endFontSizeInPX,
    HTMLTag,
    txt,
    lineHeightPercentageValue = 150,
    alignment = "",
    additionalClassNames = ""
}) => {

    const pxToRem = (px, rootSize = 16) => `${px / rootSize}rem`;


    const scalingFactors = {
        h1: { vw: 4.5, lhVw: 6 },
        h2: { vw: 4, lhVw: 5.5 },
        h3: { vw: 3.5, lhVw: 5 },
        h4: { vw: 3, lhVw: 4.5 },
        h5: { vw: 2.5, lhVw: 4 },
        h6: { vw: 2, lhVw: 3.5 },
        p: { vw: 1.8, lhVw: 3 },
        span: { vw: 1.5, lhVw: 2.5 },
        default: { vw: 2, lhVw: 3 }
    };

    const { vw, lhVw } = scalingFactors[HTMLTag] || scalingFactors.default;

    return React.createElement(
        HTMLTag,
        {
            className: additionalClassNames,
            style: {
                fontSize: `clamp(${pxToRem(endFontSizeInPX)}, ${vw}vw, ${pxToRem(startFontSizeInPX)})`,
                lineHeight: `clamp(${pxToRem((lineHeightPercentageValue / 100) * endFontSizeInPX)}, ${lhVw}vw, ${pxToRem((lineHeightPercentageValue / 100) * startFontSizeInPX)})`,
                textAlign: alignment
            },
            "aria-label": txt,
            title: txt
        },
        txt
    );
};

export default ResponsiveTypography;
