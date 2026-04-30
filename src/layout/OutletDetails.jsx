import React from 'react';
import { useParams } from "react-router-dom";

const OutletDetails = () => {
    const { city } = useParams();

    const cafes = [
        {
            city: "jaipur",
            name: 'The Golden Crema',
            image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800',
            address: '124 Artisan Ave, East Village, New York, NY 10003',
            phone: '(212) 555-0192',
            tags: ['Artisan', 'Laptop Friendly'],
            map: "https://www.google.com/maps/place/Bhukh+Lagi+!/@24.5709693,73.7222724,17z/data=!3m1!4b1!4m6!3m5!1s0x3967ef007008315b:0xbc72749c16be6544!8m2!3d24.5709693!4d73.7248473!16s%2Fg%2F11ld38xgnj?hl=en&entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            city: "jaipur",
            name: 'Velvet Roast',
            image: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800',
            address: '88 Heritage Lane, Old Town, Chicago, IL 60610',
            phone: '(312) 555-0843',
            tags: ['Roastery', 'Quiet Zone'],
            map: "https://www.google.com/maps/place/Bhukh+Lagi+!/@24.5709693,73.7222724,17z/data=!3m1!4b1!4m6!3m5!1s0x3967ef007008315b:0xbc72749c16be6544!8m2!3d24.5709693!4d73.7248473!16s%2Fg%2F11ld38xgnj?hl=en&entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            city: "jaipur",
            name: 'Urban Bloom',
            image: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800',
            address: '45 Garden Way, Silicon Hills, Austin, TX 78701',
            phone: '(512) 555-0211',
            tags: ['Bakery', 'Outdoor'],
            map: "https://www.google.com/maps/place/Bhukh+Lagi+!/@24.5709693,73.7222724,17z/data=!3m1!4b1!4m6!3m5!1s0x3967ef007008315b:0xbc72749c16be6544!8m2!3d24.5709693!4d73.7248473!16s%2Fg%2F11ld38xgnj?hl=en&entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            city: "udaipur",
            name: 'Pure Pour',
            image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800',
            address: '22 Minimalist St, Mission Dist, San Francisco, CA 94110',
            phone: '(415) 555-0922',
            tags: ['Vegan', 'Specialty'],
            map: "https://www.google.com/maps/place/Bhukh+Lagi+!/@24.5709693,73.7222724,17z/data=!3m1!4b1!4m6!3m5!1s0x3967ef007008315b:0xbc72749c16be6544!8m2!3d24.5709693!4d73.7248473!16s%2Fg%2F11ld38xgnj?hl=en&entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            city: "udaipur",
            name: 'Nordic Brew',
            image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800',
            address: '5 Nordic Way, Ballard, Seattle, WA 98107',
            phone: '(206) 555-0433',
            tags: ['Hygge', 'Eco-Friendly'],
            map: "https://www.google.com/maps/place/Bhukh+Lagi+!/@24.5709693,73.7222724,17z/data=!3m1!4b1!4m6!3m5!1s0x3967ef007008315b:0xbc72749c16be6544!8m2!3d24.5709693!4d73.7248473!16s%2Fg%2F11ld38xgnj?hl=en&entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            city: "udaipur",
            name: 'Petit Palais',
            image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800',
            address: '101 French Quarter, New Orleans, LA 70130',
            phone: '(504) 555-0761',
            tags: ['Patisserie', 'Romantic'],
            map: "https://www.google.com/maps/place/Bhukh+Lagi+!/@24.5709693,73.7222724,17z/data=!3m1!4b1!4m6!3m5!1s0x3967ef007008315b:0xbc72749c16be6544!8m2!3d24.5709693!4d73.7248473!16s%2Fg%2F11ld38xgnj?hl=en&entry=ttu&g_ep=EgoyMDI2MDQyMi4wIKXMDSoASAFQAw%3D%3D",
        }
    ];

    const filteredCafes = cafes.filter(cafe => cafe.city === city);
    console.log(filteredCafes);

    const handleShare = async (cafe) => {

        if (navigator.share) {
            try {
                await navigator.share({
                    title: "Bhuk lagi - Food for soul",
                    text: `${cafe.name} : `,
                    url: cafe.map,
                });
            } catch (err) {
                console.log("Share cancelled", err);
            }
        } else {
            try {
                await navigator.clipboard.writeText(url);
                alert("Done");
                toast.success("Link copied! 🔥");
            } catch (err) {
                prompt("Copy this link:", cafe.map);
            }
        }
    };

    return (
        <>
            <div className="absolute left-6 top-25 -translate-y-1/2 w-6 h-6 rounded-[100px] flex flex-col items-center justify-center">
                <a href="/locations">
                    <i className="fa-solid fa-angle-left text-brown text-md md:text-2xl"></i>
                </a>
            </div>

            <div className="pb-20 pt-30 px-6 md:pb-20  md:pt-30  md:px-6">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h1 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">
                            Outlets Near You
                        </h1>

                        <form>
                            <div className="relative max-w-2xl mx-auto">

                                <div className="absolute left-6 top-1/2 -translate-y-1/2">
                                    <svg
                                        className="w-6 h-6 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>

                                <input
                                    type="text"
                                    value={city}
                                    disabled
                                    placeholder="Search by City"
                                    className="w-full pl-16 pr-16 py-3 rounded-full border-2 border-gray-300 focus:border-gray-500 focus:outline-none text-lg cursor-not-allowed text-[rgba(0,0,0,0.5)]"
                                />

                                <button className="absolute right-6 top-1/2 -translate-y-1/2 hover:opacity-70 transition-opacity" >
                                    <svg
                                        className="w-6 h-6 text-gray-400"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Cafe Listings Grid */}
            <section className="max-w-7xl mx-auto px-6 pb-24">
                {
                    filteredCafes.length > 0 ? (
                        <div className="relative grid grid-cols-1 gap-6 z-10 md:grid-cols-2 lg:grid-cols-3 md:relative md:z-10">
                            {cafes.map((cafe, index) => (
                                cafe.city === city && (
                                    <div
                                        key={index}
                                        className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className="relative aspect-[16/10] overflow-hidden">
                                            <img
                                                src={cafe.image}
                                                alt={cafe.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="p-6">
                                            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{cafe.name}</h3>

                                            <div className="space-y-2 mb-6">
                                                <div className="flex items-start gap-2 text-slate-600">
                                                    <svg className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    <p className="text-sm">{cafe.address}</p>
                                                </div>

                                                <div className="flex items-center gap-2 text-slate-600">
                                                    <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                    </svg>
                                                    <p className="text-sm">{cafe.phone}</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                                                <div className="flex gap-2">
                                                    {cafe.tags.map((tag, tagIndex) => (
                                                        <span
                                                            key={tagIndex}
                                                            className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex gap-2">
                                                    <a className="p-2 rounded-lg text-amber-700 hover:bg-amber-50 active:scale-90 transition-all" href={cafe.map} target='_blank'>
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                                        </svg>
                                                    </a>
                                                    <button className="p-2 rounded-lg text-amber-700 hover:bg-amber-50 active:scale-90 transition-all" onClick={() => handleShare(cafe)} >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )

                            ))}
                        </div>
                    ) : (

                        <>
                            <div className='flex flex-col gap-5'>
                                <div className=' text-2xl md:text-3xl text-brown flex items-center justify-center'>
                                    Sorry ! We are not serviceable here.
                                </div>
                            </div>
                        </>

                    )
                }
            </section>

        </>
    );
};

export default OutletDetails;