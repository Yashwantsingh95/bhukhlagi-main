import FarmToFeed from "../component/Bhukhlagi";
import PizzaScrollAnimation from "../component/PizzaScrollAnimation";
import '../fonts.css';

const HomePage = () => {
    return (
        <div className="w-full overflow-hidden">
            <section
                className="fade-up hero min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 relative">

                <div id="left-section" className="z-10 flex flex-col items-center max-w-4xl mx-auto w-full">
                    <div
                        className="absolute w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] rounded-full bg-gradient-to-tr from-white/10 to-transparent -top-12 sm:-top-20 md:-top-24 left-1/2 transform -translate-x-1/2 pointer-events-none blur-3xl">
                    </div>
                    <div
                        className="absolute w-48 sm:w-60 md:w-72 h-48 sm:h-60 md:h-72 rounded-full bg-brown/[0.04] bottom-12 sm:bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 pointer-events-none blur-2xl">
                    </div>

                    <h1
                        className="font-serif font-bold text-[clamp(50px,12vw,120px)] leading-[1.05] text-dark mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brown to-mid drop-shadow-sm">
                            <FarmToFeed />
                        </span>
                    </h1>
                    <p
                        className="font-sans text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-10 text-mid px-4 opacity-90 font-medium">
                        Pizza with coffee, sometimes a burger makes the day perfect.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center w-full sm:w-auto px-4 sm:px-0 relative z-10">
                        <a href="/menu" className="w-full sm:w-auto">
                            <button
                                className="bg-gradient-to-r from-brown to-darker text-cream font-sans font-bold text-sm px-10 py-4 rounded-full shadow-lg shadow-brown/30 cursor-pointer tracking-wide hover:-translate-y-1 hover:shadow-xl hover:shadow-brown/40 transition-all duration-300 w-full sm:w-auto">
                                See Our Menu
                            </button>
                        </a>
                        <a href="https://www.google.com/maps/dir//Bhukh+Lagi+!,+Bsnl+office,+78,+Allen+road,+Tagore+Nagar,+Sector+4,+Pooja+Nagar,+Hiran+Magri,+Udaipur,+Rajasthan+313001/@26.8220838,75.8650143,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3967ef007008315b:0xbc72749c16be6544!2m2!1d73.7248473!2d24.5709693?entry=ttu&g_ep=EgoyMDI2MDQyOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                            <button
                                className="bg-white/40 backdrop-blur-sm text-brown border-2 border-brown/20 font-sans font-bold text-sm px-10 py-4 rounded-full cursor-pointer tracking-wide hover:bg-brown hover:text-cream hover:border-brown hover:-translate-y-1 hover:shadow-xl hover:shadow-brown/30 transition-all duration-300 w-full sm:w-auto">
                                Find Us
                            </button>
                        </a>
                    </div>
                </div>
                
                <div id="scroll-indicator"
                    className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce hidden sm:block">
                    <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px"
                        fill="rgb(123 45 0)">
                        <path
                            d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                    </svg>
                </div>

            </section>

            {/* Scroll Animation Section */}
            <PizzaScrollAnimation />

        </div>
    );
};

export default HomePage;