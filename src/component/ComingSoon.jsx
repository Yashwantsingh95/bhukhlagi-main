import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import FloatingBgDoodles from './FloatingBgDoodles';

const ComingSoon = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden bg-gradient-to-b from-[#f8f9ff] to-[#fbf4eb]">
                
                {/* Ambient Glows */}
                <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-orange/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brown/5 blur-[100px] rounded-full pointer-events-none"></div>

                <FloatingBgDoodles />

                <div className="text-center z-10 max-w-2xl bg-white/50 backdrop-blur-xl border border-white/60 p-10 md:p-16 rounded-[40px] shadow-[0_20px_50px_-15px_rgba(123,45,0,0.1)] flex flex-col items-center">
                    <div style={{ width: "250px", height: "250px" }} className="mb-2">
                        <DotLottieReact src="/scoter.json" autoplay loop />
                    </div>

                    <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold font-serif leading-[1.1] mb-4 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange to-brown">
                        Coming Soon
                    </h2>

                    <p className="text-lg md:text-xl text-mid/80 mb-10 font-medium">
                        We're on the way with something delicious.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
                        <a
                            href="/roasts"
                            className="bg-gradient-to-r from-brown to-darker text-cream font-sans font-bold text-[15px] px-8 py-4 rounded-2xl shadow-lg shadow-brown/30 hover:-translate-y-1 hover:shadow-xl hover:shadow-brown/40 transition-all duration-300 text-center w-full sm:w-auto"
                        >
                            Go Home
                        </a>
                        <a
                            href="/join"
                            className="bg-white/60 backdrop-blur-sm text-brown border border-white/80 font-sans font-bold text-[15px] px-8 py-4 rounded-2xl hover:bg-white hover:-translate-y-1 hover:shadow-xl hover:shadow-brown/10 transition-all duration-300 text-center w-full sm:w-auto shadow-[0_4px_20px_rgba(123,45,0,0.05)]"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ComingSoon;