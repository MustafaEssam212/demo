
import ResponsiveTypography from "./ResponsiveTypography";


// Use this Custom Component To Create an Inline Style Button With Responsive Typography Text
// Set as automatically 100% Height and Width, So you can control its width and height by wrapping it with a parent
// txt => Required => Pass The Text Value as (String) that will displayed inside the button
// Border => Optional => Pass borderSizeInPx as (Number) + borderType as (String such as solid) + borderColor as (String such as red || var(--yellow-color) || #FFF)
// startFontSizeInPX && endFontSizeInPX => Required => To Handle The Responsive Typography of the Button
// backgroundColor => Optional => Set as default (Transparent) Pass a Color (String such as red || var(--yellow-color) || #FFF) to make a background color
// borderRadius => Optional => Pass a border radius value in PX as (Number) to make a border radius => as default is Zero
// additionalClassNames => Optional => Pass an aditional String of class names words to customize another style

// !IMPORTANT! => use can use additionalClassNames such as (myBtn) to customize another styling for the Text Typography by .myBtn span


const Button = ({borderRadius = 0, backgroundColor = 'transparent', startFontSizeInPX, endFontSizeInPX, borderColor = "transparent", borderSizeInPx = 0, txtColor = 'black', txt, borderType = 'solid', additionalClassNames = ""}) => {
    return(
        <button className={additionalClassNames} style={{width: '100%', height: '100%', border: `${borderSizeInPx}px ${borderType} ${borderColor}`, backgroundColor: backgroundColor, borderRadius: borderRadius, color: txtColor}}><ResponsiveTypography startFontSizeInPX={startFontSizeInPX} endFontSizeInPX={endFontSizeInPX} txt={txt} HTMLTag="span" /></button>
    )
}

export default Button;