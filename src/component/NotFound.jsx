import React from 'react';
import FloatingBgDoodles from './FloatingBgDoodles';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
            <FloatingBgDoodles />
            <div className="text-center z-10 max-w-2xl">
                <div className="mb-8 relative">
                    {/* <div className="text-9xl">🍽️</div> */}
                    {/* <div className="absolute -top-2 -right-2 text-6xl">❌</div> */}
                </div>

                <h1 className="text-6xl md:text-8xl font-bold text-dark mb-4">
                    404
                </h1>

                <h2 className="text-3xl md:text-4xl font-semibold text-brown mb-4">
                    Food not found
                </h2>

                <p className="text-lg md:text-xl text-mid mb-8">
                    Sorry, this item is not on our menu. Let's get you back to something tasty!
                </p>

                <div className="bg-bgColor/20 rounded-lg p-6 mb-8">
                    <p className="text-dark font-semibold mb-3">Looking for something specific?</p>
                    <div className="flex gap-3 justify-center flex-wrap text-sm">
                        <a href="/roasts" className="text-brown hover:text-dark underline">Roasts</a>
                        <span className="text-mid">•</span>
                        <a href="/menu" className="text-brown hover:text-dark underline">Our Menu</a>
                        <span className="text-mid">•</span>
                        <a href="/locations" className="text-brown hover:text-dark underline">Locations</a>
                        <span className="text-mid">•</span>
                        <a href="/about" className="text-brown hover:text-dark underline">About Us</a>
                    </div>
                </div>

                <div className="flex gap-4 justify-center">
                    <a
                        href="/roasts"
                        className="px-8 py-3 bg-brown text-cream rounded-lg font-semibold hover:bg-dark transition-colors"
                    >
                        Go Home
                    </a>
                    <button
                        onClick={() => window.history.back()}
                        className="px-8 py-3 border-2 border-brown text-brown rounded-lg font-semibold hover:bg-brown hover:text-cream transition-colors"
                    >
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;