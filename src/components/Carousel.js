import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function Carousel({ slides, autoSlide, autoSlideInterval }) {
    const [current, setCurrent] = useState(0);

    const previousSlide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
    };

    const nextSlide = () => {
        setCurrent(current === slides.length - 1 ? 0 : current + 1);
    };

    useEffect(() => {
        if (!autoSlide) return;

        const slideInterval = setInterval(nextSlide, autoSlideInterval);

        return () => clearInterval(slideInterval); // Cleanup interval on component unmount
    }, [current, autoSlide, autoSlideInterval]);

    return (
        <div className='overflow-hidden relative'>
            <div
                className='flex transition-transform ease-out duration-500'
                style={{
                    transform: `translateX(-${current * 100}%)`
                }}
            >
                {slides.map((s, index) => (
                    <img src={s} alt={`carousel-${index}`} className='min-w-full' key={index} />
                ))}
            </div>

            <div className='absolute top-0 h-full w-full flex justify-between items-center font-extralight text-white px-14 text-7xl'>
                <button onClick={previousSlide}>
                    <HiChevronLeft />
                </button>
                <button onClick={nextSlide}>
                    <HiChevronRight />
                </button>
            </div>

            <div className=' absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
                {slides.map((c, i) => <div key={i} className={`rounded-full w-3 h-3 ${i === current ? 'bg-white' : ' bg-gray-200'}`}></div>)}
            </div>
        </div>
    );
}

export default Carousel;
