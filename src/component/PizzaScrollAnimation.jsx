import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PizzaPeel from "./PizzaPeel";

gsap.registerPlugin(ScrollTrigger);

const PizzaScrollAnimation = () => {
    const containerRef = useRef(null);
    const assemblyRef = useRef(null);
    const peelAndCrustRef = useRef(null);
    const sauceRef = useRef(null);
    const cheeseRef = useRef(null);
    const pepperoniRef = useRef(null);
    const basilRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "center center", // Changed from "top center" to delay animation until fully in view
                    end: "+=120%", 
                    scrub: 1.5, 
                    pin: true,
                }
            });

            // Start state
            // Peel and Crust come from far left, slightly rotated and scaled down
            gsap.set(peelAndCrustRef.current, { x: "-120vw", opacity: 0, rotation: -10, scale: 0.8 });
            
            // Assembly container starts small
            gsap.set(assemblyRef.current, { scale: 0.85 });

            // Toppings drop down from above with exaggerated distance and zero scale
            gsap.set(sauceRef.current, { y: -400, opacity: 0, scale: 0 });
            gsap.set(cheeseRef.current, { y: -500, opacity: 0, scale: 0 });
            gsap.set(pepperoniRef.current, { y: -600, opacity: 0, scale: 0, rotation: -45 });
            gsap.set(basilRef.current, { y: -700, opacity: 0, scale: 0, rotation: 45 });

            // Animate to assembled state (center)
            // 1. Peel and base slide in dynamically
            tl.to(peelAndCrustRef.current, { x: 0, opacity: 1, rotation: 0, scale: 1, duration: 1.5, ease: "back.out(1.2)" })
            
            // 2. Assembly pops out slightly
              .to(assemblyRef.current, { scale: 1.1, duration: 2, ease: "power1.inOut" }, "-=1.5")
            
            // 3. Toppings drop in sequence with a bouncy back ease
              .to(sauceRef.current, { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(2)" }, "-=0.5")
              .to(cheeseRef.current, { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: "back.out(2.5)" }, "-=0.6")
              .to(pepperoniRef.current, { y: 0, opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(3)" }, "-=0.6")
              .to(basilRef.current, { y: 0, opacity: 1, scale: 1, rotation: 0, duration: 0.8, ease: "back.out(3)" }, "-=0.6");
            
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="w-full bg-transparent overflow-hidden relative z-10 px-4 md:px-10 py-10">
            {/* Premium orange background container with gradient, responsive rounded corners, and soft inner shadow */}
            <div className="w-full flex items-center justify-center min-h-[500px] md:min-h-[600px] bg-gradient-to-br from-[#ffa666] via-[#ff8f40] to-[#e67520] shadow-[inset_0_4px_30px_rgba(123,45,0,0.15)] rounded-[50px] md:rounded-[90px] py-20 relative overflow-hidden">
                
                {/* Background ambient glow behind the pizza */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-white/20 blur-3xl rounded-full pointer-events-none"></div>

                {/* The main container is now anchored to the size of the PIZZA (260x260), so the pizza stays perfectly centered while the peel overflows to the right! */}
                <div ref={assemblyRef} className="relative w-[260px] h-[260px] z-10">
                    
                    {/* Peel and Crust Group (Sliding from left) */}
                    <div ref={peelAndCrustRef} className="absolute inset-0 origin-center">
                        
                        {/* Pizza Peel - Positioned so the blade is directly under the 260x260 pizza container */}
                        <div className="absolute w-[680px] h-[300px] drop-shadow-2xl" style={{ left: '-58px', top: '-20px' }}>
                            <PizzaPeel />
                        </div>
                        
                        {/* Crust Base fits perfectly in the 260x260 container */}
                        <svg viewBox="0 0 300 300" className="absolute inset-0 w-[260px] h-[260px] drop-shadow-2xl z-10">
                            <circle cx="150" cy="150" r="140" fill="#E8A855" stroke="#C47E24" strokeWidth="8" />
                            <circle cx="150" cy="150" r="130" fill="#F4C27A" />
                            <path d="M40 150 A110 110 0 0 1 260 150" stroke="#E8A855" strokeWidth="4" fill="none" opacity="0.5" />
                        </svg>
                    </div>

                    {/* Toppings Group (Dropping from top) fits perfectly in the 260x260 container */}
                    <svg viewBox="0 0 300 300" className="absolute inset-0 w-[260px] h-[260px] z-20 drop-shadow-xl">
                        
                        {/* Sauce */}
                        <g ref={sauceRef} className="origin-center">
                            <circle cx="150" cy="150" r="120" fill="#D32F2F" />
                            <path d="M60 120 Q 90 90 150 110 T 240 130 Q 250 180 200 220 T 90 210 Q 50 160 60 120 Z" fill="#B71C1C" opacity="0.6" />
                        </g>

                        {/* Cheese */}
                        <g ref={cheeseRef} className="origin-center">
                            <circle cx="150" cy="150" r="110" fill="#FFCA28" />
                            <path d="M70 120 Q 100 80 150 90 T 230 110 Q 240 160 190 210 T 80 190 Q 50 160 70 120 Z" fill="#FFE082" />
                            <circle cx="110" cy="110" r="15" fill="#FFD54F" />
                            <circle cx="180" cy="160" r="20" fill="#FFD54F" />
                            <circle cx="130" cy="190" r="12" fill="#FFD54F" />
                        </g>

                        {/* Pepperoni */}
                        <g ref={pepperoniRef} className="origin-center">
                            {[
                                [100, 100], [150, 70], [200, 110], [120, 150],
                                [180, 170], [150, 210], [90, 170]
                            ].map(([cx, cy], i) => (
                                <g key={i}>
                                    <circle cx={cx} cy={cy} r="18" fill="#D84315" />
                                    <circle cx={cx - 4} cy={cy - 4} r="3" fill="#BF360C" opacity="0.5" />
                                    <circle cx={cx + 5} cy={cy + 2} r="2" fill="#BF360C" opacity="0.5" />
                                    <circle cx={cx - 1} cy={cy + 6} r="2.5" fill="#BF360C" opacity="0.5" />
                                </g>
                            ))}
                        </g>

                        {/* Basil */}
                        <g ref={basilRef} className="origin-center">
                            {[
                                [130, 90, 20], [170, 130, -45], [110, 180, 60], [190, 190, -10]
                            ].map(([cx, cy, rot], i) => (
                                <path 
                                    key={i}
                                    d={`M${cx} ${cy} Q ${cx-10} ${cy-15} ${cx} ${cy-25} Q ${cx+10} ${cy-15} ${cx} ${cy}`} 
                                    fill="#2E7D32" 
                                    transform={`rotate(${rot} ${cx} ${cy})`}
                                />
                            ))}
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default PizzaScrollAnimation;
