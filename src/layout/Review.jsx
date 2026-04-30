import { useEffect, useRef } from "react";
import gsap from "gsap";

function Review() {
    const trackRef = useRef(null);

    const reviews = [
        { name: "Riya Sharma", initials: "RS", bg: "#fef3c7", accent: "#b45309", stars: 5, text: "Absolutely incredible food!" },
        { name: "Arjun Mehta", initials: "AM", bg: "#dcfce7", accent: "#15803d", stars: 5, text: "Amazing ambiance and taste." },
        { name: "Pooja Verma", initials: "PV", bg: "#ede9fe", accent: "#6d28d9", stars: 5, text: "Paneer dishes are ridiculously good." },
        { name: "Sahil Kapoor", initials: "SK", bg: "#dbeafe", accent: "#1d4ed8", stars: 4, text: "Fast delivery and hot food." },
    ];

    useEffect(() => {
        const track = trackRef.current;

        const singleSetWidth = reviews.length * (300 + 14);

        const tween = gsap.to(track, {
            x: `-=${singleSetWidth}`,
            duration: 40, // 👈 speed control (kam = fast, zyada = slow)
            ease: "none",
            repeat: -1,
            modifiers: {
                x: gsap.utils.unitize(
                    (val) =>
                        ((parseFloat(val) % singleSetWidth) - singleSetWidth) %
                        -singleSetWidth
                ),
            },
        });

        // 🔥 Pause on hover
        track.addEventListener("mouseenter", () => tween.pause());
        track.addEventListener("mouseleave", () => tween.resume());

        return () => {
            tween.kill();
        };
    }, []);

    return (
        <div className="relative overflow-hidden py-24 flex flex-col justify-center bg-gradient-to-b from-[#fcf5ef] to-[#f8f9ff]">

            {/* Background gradient */}
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_50%_at_50%_50%,rgba(249,168,37,0.05)_0%,transparent_70%)]" />

            {/* Heading */}
            <div className="text-center mb-16 relative z-10">
                <span className="block text-xs tracking-[0.25em] uppercase text-orange font-bold mb-3 opacity-80">
                    What people say
                </span>

                <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-dark font-serif tracking-tight leading-tight">
                    Loved by <em className="italic text-transparent bg-clip-text bg-gradient-to-r from-orange to-brown pr-2">food lovers</em>
                </h2>

                <p className="mt-4 text-base md:text-lg text-mid/70 font-medium max-w-md mx-auto">
                    Real reviews from real customers who enjoyed every bite.
                </p>
            </div>

            {/* Marquee */}
            <div
                className="flex gap-[16px] overflow-hidden py-4"
                style={{
                    maskImage:
                        "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                    WebkitMaskImage:
                        "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
                }}
            >
                <div
                    className="flex gap-[16px] flex-shrink-0 will-change-transform cursor-grab active:cursor-grabbing"
                    ref={trackRef}
                >
                    {[...reviews, ...reviews, ...reviews].map((r, i) => (
                        <div
                            key={i}
                            className="w-[340px] flex-shrink-0 bg-white/70 backdrop-blur-xl border border-white/80 rounded-[24px] p-7 relative transition-all duration-500 hover:border-orange/40 hover:shadow-[0_15px_40px_-10px_rgba(123,45,0,0.1)] hover:-translate-y-1"
                        >
                            {/* Elegant Quote */}
                            <div className="absolute top-4 right-6 text-[80px] font-serif text-brown/5 leading-none select-none">
                                "
                            </div>

                            {/* Stars */}
                            <div className="text-[15px] mb-4 text-orange tracking-widest drop-shadow-sm">
                                {"★".repeat(r.stars)}
                            </div>

                            {/* Text */}
                            <p className="text-[15px] leading-[1.7] text-mid font-medium mb-6 relative z-10">
                                "{r.text}"
                            </p>

                            {/* User */}
                            <div className="flex items-center gap-3 relative z-10">
                                <div
                                    className="w-11 h-11 rounded-full flex items-center justify-center font-bold text-sm shadow-sm"
                                    style={{ background: r.bg, color: r.accent }}
                                >
                                    {r.initials}
                                </div>

                                <div>
                                    <p className="text-[14px] font-bold text-dark">
                                        {r.name}
                                    </p>
                                    <p className="text-[12px] text-mid/60 font-medium flex items-center gap-1 mt-0.5">
                                        via Google <span className="text-orange">★</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Review;