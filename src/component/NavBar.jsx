import React, { useState } from 'react';

const NavBar = ({ currentPage = '' }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navClass = (page) => {
        return currentPage === page
            ? 'text-brown font-bold relative after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-orange after:to-brown'
            : 'text-mid/80 font-medium hover:text-brown relative after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-orange after:transition-all after:duration-300 hover:after:w-full';
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navItems = [
        { name: 'Our Roasts', path: '/roasts', page: 'roasts', icon: 'fa-solid fa-house' },
        { name: 'Menu', path: '/menu', page: 'menu', icon: 'fa-solid fa-book-open' },
        { name: 'About', path: '/about', page: 'about', icon: 'fa-solid fa-circle-info' },
        { name: 'Join With Us', path: '/join', page: 'join', icon: 'fa-solid fa-handshake' },
        { name: 'Locations', path: '/locations', page: 'locations', icon: 'fa-solid fa-location-dot' }
    ];

    return (
        <nav className="nav top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/50 shadow-[0_4px_30px_rgba(123,45,0,0.05)] fixed transition-all duration-300">
            <div className="flex justify-between items-center px-6 md:px-10 py-4 max-w-[1400px] mx-auto">
                {/* Logo */}
                <a href="/" className="text-2xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange to-brown tracking-tight hover:scale-105 transition-transform duration-300">
                    Bhukh Lagi
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10">
                    {navItems.map((item) => (
                        <a
                            key={item.page}
                            href={item.path}
                            className={`font-sans text-[15px] transition-colors duration-300 ${navClass(item.page)}`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    id="mobile-menu-btn"
                    className="md:hidden text-[#9d4300] focus:outline-none focus:ring-2 focus:ring-[#9d4300] rounded p-2"
                    aria-label="Toggle menu"
                    onClick={toggleMobileMenu}
                >
                    <svg
                        className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                    <svg
                        className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out border-[#9d4300]/20 ${isMobileMenuOpen ? 'max-h-[500px]' : 'max-h-0'
                    }`}
            >
                <div className="px-8 py-6 space-y-4">
                    {navItems.map((item) => (
                        <a
                            key={item.page}
                            href={item.path}
                            className={`flex gap-5 font-headline font-bold text-base py-2 ${navClass(item.page)}`}
                        >
                            <div>
                                <i className={item.icon}></i>
                            </div>
                            <div>{item.name}</div>
                        </a>
                    ))}
                </div>
            </div >
        </nav >
    );
};

export default NavBar;