


import { useRef, useState } from "react";

const Tabs = ({ additionalClassNames = "", width = 100, tabs, type = "tab", sendDataToParent, active }) => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2.5;
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    return (
        <div
            ref={scrollRef}
            className={`tabs-container ${additionalClassNames}`}
            style={{ width: `${width}%`}}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseUp}
            onMouseUp={handleMouseUp}
        >
            {tabs.map((e, key) => (
                <button key={key} className={active === e || active === key ? "active-tab" : ""} onClick={() => (type === "tab" ? sendDataToParent(e) : sendDataToParent(key))}>
                    {e}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
