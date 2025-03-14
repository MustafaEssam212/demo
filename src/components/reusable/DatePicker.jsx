import { useRef, useEffect } from "react";
import { LuCalendarDays } from "react-icons/lu";

const DatePicker = ({ sendDataToParent, additionalClassNames = "" }) => {
  const dateInputRef = useRef(null);
  const wrapperRef = useRef(null);

  const openDatePicker = () => {
    if (dateInputRef.current) {
      dateInputRef.current.showPicker();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        dateInputRef.current?.blur();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`date-picker ${additionalClassNames}`}
      style={{ width: "100%", height: "100%", position: "relative" }}
    >
      <button onClick={openDatePicker} aria-label="date-btn">
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
