import { useRef } from "react";
import { LuCalendarDays } from "react-icons/lu";

const DatePicker = ({sendDataToParent, additionalClassNames = ""}) => {
  const dateInputRef = useRef(null);

  return (
    <div className={`date-picker ${additionalClassNames}`} style={{width: '100%', height: '100%', position: 'relative'}}>
      <button
        onClick={() => dateInputRef.current?.showPicker()} 
        aria-label="date-btn"
      >
        <LuCalendarDays />
      </button>
      <input
        ref={dateInputRef}
        type="date"
        style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
        onChange={(e) => sendDataToParent(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;