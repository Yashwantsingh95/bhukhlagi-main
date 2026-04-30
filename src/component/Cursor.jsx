import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
    const cursorRef = useRef();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        
        // Hide default cursor
        document.body.style.cursor = "none";
        
        // Track mouse movement
        const onMouseMove = (e) => {
            if (!visible) setVisible(true);
            
            // Move the custom cursor smoothly with GSAP
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15,
                ease: "power2.out"
            });
        };

        // Handle mouse leaving/entering window
        const onMouseLeave = () => setVisible(false);
        const onMouseEnter = () => setVisible(true);

        window.addEventListener("mousemove", onMouseMove);
        document.documentElement.addEventListener("mouseleave", onMouseLeave);
        document.documentElement.addEventListener("mouseenter", onMouseEnter);

        return () => {
            document.body.style.cursor = "auto";
            window.removeEventListener("mousemove", onMouseMove);
            document.documentElement.removeEventListener("mouseleave", onMouseLeave);
            document.documentElement.removeEventListener("mouseenter", onMouseEnter);
        };
    }, [visible]);

    return (
        <div
            ref={cursorRef}
            className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
            style={{ willChange: "transform", marginLeft: "-12px", marginTop: "-12px" }}
        >
            <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#7B2D00"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transform -rotate-45"
            >
                <path d="M5 19l14-14"></path>
                <path d="M14 6c0-2.2-1.8-4-4-4S6 3.8 6 6c0 1.9 1.3 3.5 3.1 3.9L14 6z"></path>
            </svg>
        </div>
    );
};

export default Cursor;