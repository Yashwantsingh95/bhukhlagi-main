import FloatingBgDoodles from "./FloatingBgDoodles";

const InternalError = () => {
    return (
        <>
            <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 relative overflow-hidden">
                <FloatingBgDoodles />
                <div className="text-center z-10 max-w-2xl">
                    <div className="mb-8">
                        <span className="text-9xl">🍳</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-dark mb-4">
                        500
                    </h1>

                    <h2 className="text-3xl md:text-4xl font-semibold text-brown mb-4">
                        Oops! Something Burned
                    </h2>

                    <p className="text-lg md:text-xl text-mid mb-8">
                        Our kitchen had a little accident. Don't worry, we're cleaning up the mess!
                    </p>

                    <div className="bg-bgColor/20 border-l-4 border-orange p-4 rounded mb-8 text-left">
                        <p className="text-dark font-semibold mb-2">What happened?</p>
                        <p className="text-mid text-sm">
                            An internal server error occurred. Our chefs (developers) have been notified and are working on fixing it.
                        </p>
                    </div>

                    <div className="flex gap-4 justify-center flex-wrap">
                        <button
                            onClick={() => window.location.reload()}
                            className="px-8 py-3 bg-brown text-cream rounded-lg font-semibold hover:bg-dark transition-colors"
                        >
                            Try Again
                        </button>
                        <a
                            href="/"
                            className="px-8 py-3 border-2 border-brown text-brown rounded-lg font-semibold hover:bg-brown hover:text-cream transition-colors"
                        >
                            Go Home
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default InternalError;