import { useState } from "react";

const Outlets = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const allCities = [
        {
            name: 'Jaipur',
            image: '/images/jaipur.png',
            link: '/locations/jaipur'
        },
        {
            name: 'Udaipur',
            image: '/images/udaipur.png',
            link: '/locations/udaipur'
        },

    ];

    const render = (cities) => {
        let renderList = cities.map((city, index) => (
            <a
                key={index}
                href={city.link}
                className="group w-full max-w-[280px]"
            >
                <div className="relative w-full bg-white/60 backdrop-blur-xl border border-white/60 rounded-[32px] p-8 text-center transition-all duration-500 shadow-[0_8px_30px_rgba(123,45,0,0.04)] group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_rgba(123,45,0,0.12)] group-hover:border-orange/30 group-hover:bg-white/80 z-10 overflow-hidden flex flex-col items-center">
                    
                    {/* Hover subtle glow */}
                    <div className="absolute inset-0 bg-gradient-to-b from-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center overflow-visible">
                        {/* Circle background */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-orange/20 to-brown/10 rounded-full transform group-hover:scale-110 transition-transform duration-500"></div>
                        <img src={city.image} alt={city.name} className="object-contain relative z-10 drop-shadow-md transform group-hover:scale-110 transition-transform duration-500" style={{ transform: 'scale(1.8)' }} />
                    </div>

                    <h3 className="text-xl font-bold font-serif text-dark group-hover:text-orange transition-colors relative z-10">
                        {city.name}
                    </h3>
                    
                    <div className="mt-3 flex justify-center opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 relative z-10">
                        <span className="text-xs font-bold uppercase tracking-widest text-brown flex items-center gap-1">Explore <i className="fa-solid fa-arrow-right text-[10px]"></i></span>
                    </div>
                </div>
            </a>
        ));

        if (renderList.length === 0) {
            return (
                <div className="col-span-full flex flex-col items-center justify-center py-20">
                    <div className="w-24 h-24 mb-6 bg-white/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner border border-white/60">
                         <span className="text-4xl">🧑‍🍳</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange to-brown mb-4">
                        Coming Soon
                    </h2>
                    <p className="text-lg text-mid/80 font-medium">
                        We're on the way with something delicious.
                    </p>
                </div>
            );
        } else {
            return renderList;
        }
    }


    const filteredCities = () => {
        const filtered = allCities.filter(city =>
            city.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        return filtered;
    };

    return (
        <>
            {/* Premium Background */}
            <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#f8f9ff] to-[#fbf4eb] pb-20 pt-32 px-6">
                
                {/* Ambient Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange/10 blur-[100px] rounded-full pointer-events-none"></div>
                <div className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-brown/5 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="max-w-[1200px] mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="block text-xs md:text-sm tracking-[0.25em] uppercase text-orange font-bold mb-4 opacity-80">
                            Find Us
                        </span>
                        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold font-serif leading-[1.1] mb-10 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange to-brown">
                            Outlets Near You
                        </h1>

                        {/* Premium Search Bar */}
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="relative max-w-2xl mx-auto group">
                                <div className="absolute inset-0 bg-gradient-to-r from-orange/20 to-brown/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20">
                                    <svg className="w-6 h-6 text-mid/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>

                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search by City"
                                    className="w-full pl-16 pr-16 py-4 md:py-5 rounded-full border border-white/60 bg-white/60 backdrop-blur-xl focus:bg-white focus:border-orange focus:ring-4 focus:ring-orange/10 focus:outline-none text-lg relative z-10 shadow-[0_8px_32px_rgba(123,45,0,0.05)] transition-all duration-300 text-dark placeholder:text-mid/50 font-medium"
                                />

                                <button type="submit" className="absolute right-6 top-1/2 -translate-y-1/2 hover:scale-110 transition-transform z-20">
                                    <svg className="w-6 h-6 text-mid/50 hover:text-orange transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* City Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8 justify-items-center">
                        {render(filteredCities())}
                    </div>
                </div>
            </div>
        </>

    );

}
export default Outlets;