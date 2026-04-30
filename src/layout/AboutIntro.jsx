import React from "react";

const AboutIntro = () => {
    return (
        <section className="relative pt-32 pb-20 px-4 md:px-8 flex items-center justify-center min-h-[70vh] bg-gradient-to-b from-[#f8f9ff] to-[#fbf4eb] overflow-hidden">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-orange/10 blur-3xl rounded-full pointer-events-none"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brown/5 blur-3xl rounded-full pointer-events-none"></div>

            <div className="max-w-[1200px] w-full bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[40px] p-8 md:p-16 shadow-[0_20px_50px_-15px_rgba(123,45,0,0.1)] relative z-10 transition-all duration-500 hover:shadow-[0_25px_60px_-15px_rgba(123,45,0,0.15)]">

                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

                    {/* LEFT SIDE */}
                    <div className="flex flex-col items-start">
                        {/* Eyebrow text */}
                        <span className="block text-xs md:text-sm tracking-[0.25em] uppercase text-orange font-bold mb-4 opacity-80">
                            Our Story
                        </span>
                        
                        {/* Heading */}
                        <h2 className="text-[clamp(3rem,6vw,5rem)] font-bold font-serif leading-[1.1] mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange to-brown">
                            Bhukh Lagi
                        </h2>

                        {/* Sub text */}
                        <p className="text-mid/80 text-lg md:text-xl font-medium mb-3 leading-relaxed">
                            We serve freshly brewed coffee made from handpicked beans and wood-fired pizzas.
                        </p>
                        <p className="text-mid/70 text-base md:text-lg mb-8 leading-relaxed">
                            Enjoy a cozy atmosphere where premium quality and extraordinary taste meet.
                        </p>

                        {/* Button */}
                        <a href="/locations" className="inline-block group">
                            <button className="bg-gradient-to-r from-brown to-darker text-cream px-10 py-4 rounded-full font-bold shadow-lg shadow-brown/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-brown/40 transition-all duration-300 flex items-center gap-3">
                                Explore Outlets
                                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </button>
                        </a>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="flex flex-col gap-6 md:pl-8 border-t md:border-t-0 md:border-l border-brown/10 pt-8 md:pt-0">
                        <p className="text-mid/80 leading-relaxed font-medium">
                            Our cafes are designed to give you a relaxing and comfortable
                            environment where you can genuinely enjoy your favorite meals and beverages.
                        </p>
                        <p className="text-mid/70 leading-relaxed">
                            From classic authentic espresso to modern iced brews and hand-stretched pizzas, we offer a carefully curated menu crafted with absolute precision and passion.
                        </p>
                        <p className="text-mid/70 leading-relaxed">
                            Visit us today and experience the perfect blend of taste, aroma, and
                            ambiance that keeps our community coming back for more.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default AboutIntro;