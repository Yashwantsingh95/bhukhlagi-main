import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BurgerScrollAnimation = () => {
    const containerRef = useRef(null);
    const topBunRef = useRef(null);
    const lettuceRef = useRef(null);
    const tomatoRef = useRef(null);
    const cheeseRef = useRef(null);
    const pattyRef = useRef(null);
    const bottomBunRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "center center",
                    end: "+=100%",
                    scrub: 1, // Smooth scrubbing
                    pin: true,
                }
            });

            // Start state (disassembled)
            gsap.set(topBunRef.current, { y: -300, opacity: 0 });
            gsap.set(lettuceRef.current, { y: -200, opacity: 0 });
            gsap.set(tomatoRef.current, { y: -100, opacity: 0 });
            gsap.set(cheeseRef.current, { y: -50, opacity: 0 });
            gsap.set(pattyRef.current, { y: 50, opacity: 0 });
            gsap.set(bottomBunRef.current, { y: 150, opacity: 0 });

            // Animate to assembled state
            tl.to(bottomBunRef.current, { y: 0, opacity: 1, duration: 1 })
              .to(pattyRef.current, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
              .to(cheeseRef.current, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
              .to(tomatoRef.current, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
              .to(lettuceRef.current, { y: 0, opacity: 1, duration: 1 }, "-=0.5")
              .to(topBunRef.current, { y: 0, opacity: 1, duration: 1 }, "-=0.5");
            
            // Disassemble again
            tl.to(topBunRef.current, { y: -300, opacity: 0, duration: 1 }, "+=1")
              .to(lettuceRef.current, { y: -200, opacity: 0, duration: 1 }, "-=0.8")
              .to(tomatoRef.current, { y: -100, opacity: 0, duration: 1 }, "-=0.8")
              .to(cheeseRef.current, { y: -50, opacity: 0, duration: 1 }, "-=0.8")
              .to(pattyRef.current, { y: 50, opacity: 0, duration: 1 }, "-=0.8")
              .to(bottomBunRef.current, { y: 150, opacity: 0, duration: 1 }, "-=0.8");
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="h-screen w-full flex items-center justify-center bg-transparent overflow-hidden relative">
            <div className="relative w-64 h-64 flex flex-col items-center justify-center">
                {/* SVG Parts of the Burger */}
                <svg viewBox="0 0 200 200" className="w-full h-full absolute overflow-visible">
                    {/* Top Bun */}
                    <g ref={topBunRef}>
                        <path d="M40 80 Q 100 20 160 80 Q 165 90 160 95 L 40 95 Q 35 90 40 80 Z" fill="#F5A623" />
                        {/* Sesame seeds */}
                        <ellipse cx="70" cy="50" rx="3" ry="1.5" fill="#FFF8E7" transform="rotate(-20 70 50)" />
                        <ellipse cx="100" cy="40" rx="3" ry="1.5" fill="#FFF8E7" />
                        <ellipse cx="130" cy="55" rx="3" ry="1.5" fill="#FFF8E7" transform="rotate(20 130 55)" />
                    </g>
                    
                    {/* Lettuce */}
                    <g ref={lettuceRef}>
                        <path d="M30 95 Q 45 85 60 95 T 90 95 T 120 95 T 150 95 T 170 95 L 165 105 L 35 105 Z" fill="#7ED321" />
                    </g>

                    {/* Tomato */}
                    <g ref={tomatoRef}>
                        <rect x="35" y="105" width="130" height="10" rx="5" fill="#D0021B" />
                    </g>

                    {/* Cheese */}
                    <g ref={cheeseRef}>
                        <path d="M35 115 L 165 115 L 150 130 L 135 115 L 120 125 L 105 115 L 90 125 L 75 115 L 60 130 L 45 115 Z" fill="#F8E71C" />
                    </g>

                    {/* Patty */}
                    <g ref={pattyRef}>
                        <rect x="38" y="125" width="124" height="20" rx="8" fill="#8B572A" />
                    </g>

                    {/* Bottom Bun */}
                    <g ref={bottomBunRef}>
                        <path d="M40 145 L 160 145 Q 165 170 140 170 L 60 170 Q 35 170 40 145 Z" fill="#F5A623" />
                    </g>
                </svg>
            </div>
            
            <div className="absolute w-full h-full flex flex-col items-center justify-center pointer-events-none z-10">
                 <h2 className="text-4xl md:text-6xl font-bold text-brown drop-shadow-md text-center opacity-80 mb-64 mix-blend-multiply">
                    Experience The Assembly
                 </h2>
            </div>
        </div>
    );
};

export default BurgerScrollAnimation;
