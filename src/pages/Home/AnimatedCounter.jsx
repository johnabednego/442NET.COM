import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ targetNumber }) => {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5, // Adjust based on when you want the animation to start
    });

    useEffect(() => {
        if (inView) {
            let start = 0;
            let duration = 3000; // Total duration of the counter animation in milliseconds
            const stepTime = duration / targetNumber;

            if (targetNumber < 10) {
                duration = 500;
            }
            else if (targetNumber < 20) {
                duration = 1000;
            }

            // Clear previous interval if exists
            const interval = setInterval(() => {
                start = start < targetNumber ? start + 1 : 0; // Increment or reset to 0 if target reached
                setCount(start);
                if (start === targetNumber) {
                    clearInterval(interval);
                }
            }, stepTime);

            // Cleanup function to clear interval when the component unmounts or leaves view
            return () => clearInterval(interval);
        }
        // Optionally reset count to 0 immediately when out of view
        else {
            setCount(0);
        }
    }, [inView, targetNumber]);

    return (
        <div className=' mt-[30px] md:mt-[28px] xl:mt-[32px] w-full pb-4 border-dashed border-b-[2px] border-b-[#01FFFF]'>
            <h1 ref={ref} className='text-[#01FFFF]'>{count}</h1>
        </div>
    );
};

export default AnimatedCounter;
