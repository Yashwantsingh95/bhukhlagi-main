import React from 'react';
import Footer from '../component/Footer';

const   Founders = () => {

    const demoData = [
        {
            id: 1,
            title: "Divyanshu suthar",
            desc: "Strong and bold espresso made from premium beans Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odio itaque neque corrupti pariatur tenetur fugit modi. Beatae dicta ea obcaecati dignissimos deleniti ad nemo cumque, facilis voluptatibus, repellat ipsa?.",
            image: "https://img.freepik.com/free-photo/close-up-portrait-handsome-male-model-with-crisp-hair_176532-8160.jpg?semt=ais_hybrid&w=740&q=80"
        },
        {
            id: 2,
            title: "DK",
            desc: "Smooth and refreshing cold brew coffee. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem odio itaque neque corrupti pariatur tenetur fugit modi. Beatae dicta ea obcaecati dignissimos deleniti ad nemo cumque, facilis voluptatibus, repellat ipsa? ",
            image: "https://media.istockphoto.com/id/1489222243/video/business-man-portrait-and-smile-outdoor-in-a-city-with-positive-mindset-and-face-funny-male.jpg?s=640x640&k=20&c=borvhCat9drjSiCFcbi3HO8r7lsaUoVBlb8_eUohoQM="
        },
    ];

    return (
        <>
            <div className="min-h-screen flex items-center justify-center md:px-6 pt-30" id='founders'>
                <div className="max-w-6xl w-full">

                    {/* Top Heading */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-800">
                            Meet Founders
                        </h1>
                        <div className="w-24 h-2 bg-gray-300 mx-auto mb-4 rounded-full"></div>
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 gap-15 md:grid-cols-2 md:gap-8">

                        {demoData.map((item) => (
                            <div
                                key={item.id}
                                className="rounded-2xl md:p-6 text-center  transition-all duration-[1s] ease-[ease]"
                            >
                                {/* Image */}
                                <div className="w-50 h-50 mx-auto mb-4">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>

                                {/* Title */}
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                                    {item.title}
                                </h2>

                                {/* Description */}
                                <p className="text-gray-600 text-sm px-15 py-7">
                                    {item.desc}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>

    );
};

export default Founders;