import { useEffect, useState } from "react";

const posts = [
    { img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=500&fit=crop" },
];

const postsMobile = [
    { img: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=500&fit=crop" },
    { img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=500&fit=crop" },
];

const instaUrl = "https://www.instagram.com/yourusername";

function GetSocial() {
    const [data, setData] = useState(posts);

    useEffect(() => {
        if (window.innerWidth < 786) {
            setData(postsMobile);
        } else {
            setData(posts);
        }
    }, []);

    return (
        <div className="bg-gradient-to-b from-[#fffcf8] to-[#fcf5ef] relative py-12 md:py-24">
            <div
                className="grid gap-4 md:gap-6 justify-center content-center px-4 md:px-10 max-w-[1400px] mx-auto"
                style={{
                    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 240px))",
                    gridAutoRows: "300px",
                }}
            >
                {/* Label */}
                <div className="flex items-center md:pl-4 text-[clamp(48px,6vw,72px)] leading-[1.05] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-br from-brown to-mid drop-shadow-sm tracking-tight z-10 mb-8 md:mb-0">
                    Let's <br className="hidden md:block" /> Get <br className="hidden md:block" /> Social
                </div>

                {/* Cards */}
                {data.map((post, index) => (
                    <a
                        key={index}
                        href={instaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden rounded-[30px] group shadow-md hover:shadow-[0_20px_40px_rgba(123,45,0,0.15)] hover:-translate-y-2 transition-all duration-500 border border-white/60 bg-white/40"
                    >
                        <img
                            src={post.img}
                            alt="Instagram post"
                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                        />

                        {/* Premium Hover Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/40 to-transparent flex justify-center items-end pb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <div className="flex flex-col items-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <i className="fa-brands fa-instagram text-white text-3xl mb-2 drop-shadow-md"></i>
                                <span className="text-white/90 font-medium tracking-wide text-sm">@bhukhlagi</span>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default GetSocial;