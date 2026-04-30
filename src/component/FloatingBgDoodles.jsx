function FloatingBgDoodles() {
    return (
        <>
            <div className="fixed inset-0 overflow-hidden pointer-events-none select-none">
                <span
                    className="material-symbols-outlined absolute z-0 pointer-events-none opacity-[0.15] text-[120px] top-[15%] left-[5%]"
                    style={{ transform: 'rotate(-15deg)', fontSize: '120px' }}
                >
                    local_pizza
                </span>

                <span
                    className="material-symbols-outlined absolute z-0 pointer-events-none opacity-[0.15] text-[80px] top-[40%] right-[10%]"
                    style={{ transform: 'rotate(20deg)', fontSize: '80px' }}
                >
                    lunch_dining
                </span>

                <span
                    className="material-symbols-outlined absolute z-0 pointer-events-none opacity-[0.15] text-[100px] bottom-[15%] left-[12%]"
                    style={{ transform: 'rotate(-5deg)', fontSize: '100px' }}
                >
                    bakery_dining
                </span>

                <span
                    className="material-symbols-outlined absolute z-0 pointer-events-none opacity-[0.15] text-[90px] bottom-[10%] right-[5%]"
                    style={{ transform: 'rotate(10deg)', fontSize: '90px' }}
                >
                    icecream
                </span>

                <span
                    className="material-symbols-outlined absolute z-0 pointer-events-none opacity-[0.15] text-[70px] top-[70%] left-[40%]"
                    style={{ transform: 'rotate(-25deg)', fontSize: '70px' }}
                >
                    skillet
                </span>
            </div>
        </>
    );
}

export default FloatingBgDoodles;