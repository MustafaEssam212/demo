import { FaCheck } from "react-icons/fa6";

const BurgundyCheckCircle = ({ 
    startHeightInPX, 
    StartWidthInPX, 
    endHeightInPX, 
    endWidthInPX, 
    additionalClassNames = "" 
}) => {

    const pxToRem = (px, rootSize = 16) => `${px / rootSize}rem`;


    const scalingFactor = 0.7;
    const fontSizeClamp = `clamp(${pxToRem(Math.min(endWidthInPX, endHeightInPX) * scalingFactor)}, 4vw, ${pxToRem(Math.min(StartWidthInPX, startHeightInPX) * scalingFactor)})`;

    return (
        <div 
            style={{
                width: `clamp(${pxToRem(endWidthInPX)}, 4vw, ${pxToRem(StartWidthInPX)})`,
                height: `clamp(${pxToRem(endHeightInPX)}, 4vw, ${pxToRem(startHeightInPX)})`
            }} 
            className={`purple-check-circle ${additionalClassNames}`}
        >
            <FaCheck className="icon" style={{ fontSize: fontSizeClamp }} />
        </div>
    );
};

export default BurgundyCheckCircle;
