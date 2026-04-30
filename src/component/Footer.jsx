
function Footer() {
    return (
        <>
            {/* Font Awesome CDN */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            <footer className="footer bg-gradient-to-t from-[#fbf4eb] to-white py-16 px-6 md:px-12 lg:px-16 relative z-10 border-t border-brown/5">
                <div className="max-w-[1400px] mx-auto">
                    <div className="md:flex md:justify-between md:px-10">
                        {/* Left Section - Brand & Social */}
                        <div className="md:flex md:flex-col mb-10 md:mb-0">
                            <h2 className="text-[clamp(2rem,4vw,2.5rem)] font-bold font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange to-brown mb-4 tracking-tight">
                                Bhukh Lagi
                            </h2>
                            <p className="text-mid/70 font-medium text-sm mb-6 max-w-xs">
                                Serving premium wood-fired pizzas and artisan coffee since 2025.
                            </p>

                            {/* Social Icons */}
                            <div className="flex gap-4">
                                <a
                                    href="#whatsapp"
                                    className="w-10 h-10 rounded-full bg-white border border-brown/10 flex items-center justify-center text-brown hover:text-white hover:bg-orange hover:border-orange hover:-translate-y-1 hover:shadow-lg hover:shadow-orange/20 transition-all duration-300"
                                    aria-label="Whatsapp"
                                >
                                    <i className="fa-brands fa-whatsapp text-lg"></i>
                                </a>
                                <a
                                    href="#instagram"
                                    className="w-10 h-10 rounded-full bg-white border border-brown/10 flex items-center justify-center text-brown hover:text-white hover:bg-orange hover:border-orange hover:-translate-y-1 hover:shadow-lg hover:shadow-orange/20 transition-all duration-300"
                                    aria-label="Instagram"
                                >
                                    <i className="fab fa-instagram text-lg"></i>
                                </a>
                                <a
                                    href="#mail"
                                    className="w-10 h-10 rounded-full bg-white border border-brown/10 flex items-center justify-center text-brown hover:text-white hover:bg-orange hover:border-orange hover:-translate-y-1 hover:shadow-lg hover:shadow-orange/20 transition-all duration-300"
                                    aria-label="Mail"
                                >
                                    <i className="fa-regular fa-envelope text-lg"></i>
                                </a>
                            </div>
                            <p className="text-mid/50 text-xs mt-8 font-medium">
                                Copyright © 2026 all rights reserved
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className='grid grid-cols-2 gap-12 md:gap-24'>
                            {/* About Column */}
                            <div className="flex flex-col">
                                <h3 className="text-dark font-bold text-sm uppercase tracking-widest mb-6 opacity-80">
                                    About
                                </h3>
                                <nav className="flex flex-col gap-4">
                                    <a
                                        href="#founders"
                                        className="text-mid/80 font-medium text-[15px] hover:text-orange hover:translate-x-1 transition-all duration-300"
                                    >
                                        Our Founders
                                    </a>
                                    <a
                                        href="#contact"
                                        className="text-mid/80 font-medium text-[15px] hover:text-orange hover:translate-x-1 transition-all duration-300"
                                    >
                                        Contact
                                    </a>
                                </nav>
                            </div>

                            {/* Resources Column */}
                            <div className="flex flex-col">
                                <h3 className="text-dark font-bold text-sm uppercase tracking-widest mb-6 opacity-80 whitespace-nowrap">
                                    Craving Something?
                                </h3>
                                <nav className="flex flex-col gap-4">
                                    <a
                                        href="#zomato"
                                        className="text-mid/80 font-medium text-[15px] hover:text-orange hover:translate-x-1 transition-all duration-300"
                                    >
                                        Zomato
                                    </a>
                                    <a
                                        href="#swiggy"
                                        className="text-mid/80 font-medium text-[15px] hover:text-orange hover:translate-x-1 transition-all duration-300"
                                    >
                                        Swiggy
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;