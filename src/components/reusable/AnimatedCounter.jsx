import { useState, useEffect, useRef } from "react";


// Use This Custom Component To Make an Animated Counter To Number
// targetNumber => Required
// duration => Optional => set as default 2000 MS

// Example =>  <h1>Counter {<AnimatedCounter targetNumber={5000} duration={5000} />}</h1>

const AnimatedCounter = ({ targetNumber, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    startCounting();
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) {
            observer.observe(counterRef.current);
        }

        return () => {
            if (counterRef.current) {
                observer.unobserve(counterRef.current);
            }
        };
    }, []);

    const startCounting = () => {
        let start = 0;
        const step = targetNumber / (duration / 16);

        const updateCounter = () => {
            start += step;
            if (start >= targetNumber) {
                setCount(targetNumber);
            } else {
                setCount(Math.floor(start));
                requestAnimationFrame(updateCounter);
            }
        };

        requestAnimationFrame(updateCounter);
    };

    return <span ref={counterRef}>{count}</span>;
};

export default AnimatedCounter;
