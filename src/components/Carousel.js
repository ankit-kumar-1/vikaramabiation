import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function Carousel({ slides, autoSlide = true, autoSlideInterval = 3000 }) {
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
        return () => clearInterval(slideInterval);
    }, [current, autoSlide, autoSlideInterval]);

    return (
        <div className='relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden mt-14 sm:mt-20'>
            <div
                className='flex h-full transition-transform ease-out duration-500'
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((s, index) => (
                    <div className='relative w-full h-full flex-shrink-0' key={index}>
                        <img src={s} alt={`carousel-${index}`} className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                        <div className='absolute inset-x-0 top-0 flex flex-col justify-start items-center text-white p-4 text-center'>
                            <h1 className='text-sm sm:text-lg md:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2 md:mb-4'>An ISO 9001:2015 Certified Company</h1>
                            <h2 className='text-xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-1 sm:mb-2 md:mb-4 text-yellow-500'>
                                {index === 0 && 'Aviation Services'}
                                {index === 1 && 'Maintenance Experts'}
                                {index === 2 && 'High-Flying Support'}
                            </h2>
                            <h2 className='text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2 md:mb-4'>
                                {index === 0 && 'Creative & Professional'}
                                {index === 1 && 'Precision and Excellence'}
                                {index === 2 && 'Innovative & Expertise'}
                            </h2>
                            <p className='text-xs sm:text-sm md:text-lg lg:text-2xl font-bold max-w-4xl'>
                                {index === 0 && 'Unlocking Skies with Certified Engineering Excellence - Elevating Aviation Services through Creativity and Professionalism.'}
                                {index === 1 && 'Welcome to Your Trusted Aviation Maintenance Experts! With a relentless commitment to precision and excellence, we ensure the skies remain safe for all.'}
                                {index === 2 && 'Welcome to High Flying Aviation Maintenance Support - Where Innovation Meets Expertise! Trust us to keep your aircraft soaring with precision and creativity.'}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button onClick={previousSlide} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <HiChevronLeft size={30} />
                </button>
                <button onClick={nextSlide} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <HiChevronRight size={30} />
                </button>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_, i) => (
                        <div
                            onClick={() => setCurrent(i)}
                            key={i}
                            className={`
                              transition-all w-2 h-2 bg-white rounded-full
                              ${current === i ? "p-2" : "bg-opacity-50"}
                            `}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Carousel;