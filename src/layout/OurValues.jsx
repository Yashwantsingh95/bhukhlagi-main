const OurValues = () => {
    return (
        <section className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-brown text-center mb-12">
                    What We Stand For
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Value 1 */}
                    <div className="text-center bg-bgColor/20 p-8 md:bg-color/20 rounded-2xl transition-colors">
                        <div className="text-6xl mb-4">🌱</div>
                        <h3 className="text-2xl font-bold text-dark mb-3">Fresh Ingredients</h3>
                        <p className="text-mid">
                            We source locally and seasonally to ensure every bite is bursting with flavor and nutrition.
                        </p>
                    </div>

                    {/* Value 2 */}
                    <div className="text-center bg-bgColor/20 p-8 md:bg-color/20 rounded-2xl transition-colors">
                        <div className="text-6xl mb-4">❤️</div>
                        <h3 className="text-2xl font-bold text-dark mb-3">Made with Love</h3>
                        <p className="text-mid">
                            Every dish is prepared with care, attention to detail, and a genuine passion for great food.
                        </p>
                    </div>

                    {/* Value 3 */}
                    <div className="text-center bg-bgColor/20 p-8 md:bg-color/20 rounded-2xl transition-colors">
                        <div className="text-6xl mb-4">🤝</div>
                        <h3 className="text-2xl font-bold text-dark mb-3">Community First</h3>
                        <p className="text-mid">
                            We're more than a restaurant—we're a gathering place where neighbors become friends.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurValues;