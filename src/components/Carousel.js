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

        return () => clearInterval(slideInterval); // Cleanup interval on component unmount
    }, [current, autoSlide, autoSlideInterval]);

    return (
        <div className='overflow-hidden relative mt-24 h-3/5'> {/* Adjust the margin-top value if needed */}
            <div
                className='flex transition-transform ease-out duration-500'
                style={{
                    transform: `translateX(-${current * 100}%)`
                }}
            >
                {slides.map((s, index) => (
                    <div className='relative min-w-full' key={index}>
                        <img src={s} alt={`carousel-${index}`} className='w-full' />
                        {index === 0 && (
                            <div className='absolute inset-x-0 top-0 flex flex-col justify-start items-center text-white p-4'>
                                <h1 className='text-2xl font-bold mb-2'>An ISO 9001:2015 Certified Company</h1>
                                <h2 className='text-5xl font-bold mb-2 text-yellow-500'>Aviation Services</h2> <br />
                                <h2 className='text-5xl font-bold mb-2'>Creative & Professional</h2> <br />
                                <p className='text-2xl font-bold text-center'>
                                    Unlocking Skies with Certified Engineering Excellence - Elevating Aviation Services through <br /> Creativity and Professionalism.
                                    Take your flight experience to new heights with our innovative <br /> and expert solutions.
                                </p>
                            </div>
                        )}
                        {index === 1 && (
                            <div className='absolute inset-x-0 top-0 flex flex-col justify-start items-center text-white p-4'>
                                <h1 className='text-2xl font-bold mb-2'>An ISO 9001:2015 Certified Company</h1>
                                <h2 className=' text-5xl font-bold mb-2 text-yellow-500'>Maintenance Experts</h2> <br />
                                <h2 className='text-5xl font-bold mb-2'>Precision and Excellence</h2>
                                <br />
                                <p className='text-2xl font-bold text-center'>
                                    Welcome to Your Trusted Aviation Maintenance Experts! With a relentless commitment to <br /> precision and excellence, we ensure the skies remain safe for all. Count on our expertise to keep <br />your aircraft soaring with utmost reliability and performance.
                                </p>
                            </div>
                        )}
                        {index === 2 && (
                            <div className='absolute inset-x-0 top-0 flex flex-col justify-start items-center text-white p-4'>
                                <h1 className='text-2xl font-bold mb-2'>An ISO 9001:2015 Certified Company</h1>
                                <h2 className='text-5xl font-bold mb-2 text-yellow-500'>High-Flying Support</h2> <br />
                                <h2 className='text-5xl font-bold mb-2'>Innovative & Expertise</h2> <br />
                                <p className='text-2xl font-bold text-center'>
                                    Welcome to High Flying Aviation Maintenance Support - Where Innovation Meets Expertise! Trust <br /> us to keep your aircraft soaring with precision and creativity, ensuring safe and efficient <br /> operations for your journey ahead.
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className='absolute top-0 h-full w-full flex justify-between items-center font-extralight text-white px-14 text-7xl '>
                <button onClick={previousSlide} className='transition-all duration-300 ease-in-out transform hover:scale-x-125'>
                    <HiChevronLeft />
                </button>
                <button onClick={nextSlide} className='transition-all duration-300 ease-in-out transform hover:scale-x-125'>
                    <HiChevronRight />
                </button>
            </div>

            <div className='absolute bottom-0 py-4 mb-20 flex justify-center gap-3 w-full'>
                {slides.map((c, i) => (
                    <div onClick={() => setCurrent(i)} key={i} className={`cursor-pointer rounded-full w-3 h-3 ${i === current ? 'bg-white' : ' bg-gray-300'}`}></div>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
