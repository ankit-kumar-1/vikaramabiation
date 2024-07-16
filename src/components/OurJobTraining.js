import React, { useState, useEffect, useCallback } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function OurJobTraining({ trainingList }) {
    const [current, setCurrent] = useState(0);

    const previousSlide = useCallback(() => {
        setCurrent(current => current === 0 ? trainingList.length - 1 : current - 1);
    }, [trainingList.length]);

    const nextSlide = useCallback(() => {
        setCurrent(current => current === trainingList.length - 1 ? 0 : current + 1);
    }, [trainingList.length]);

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <div className=' m-16'>
            <div className='text-center'>
                <h1 className='text-6xl font-bold border-b-2 border-gray-500 inline-block pb-4'>
                    On Job <span className='text-yellow-500'>Training</span>
                </h1>
            </div>
            <div className='flex justify-between items-center m-16 gap-10'>
                <div className='w-1/2 p-5 border border-gray-300 rounded-lg py-44 text-center'>
                    <h1 className='text-2xl font-bold'>
                        VAPL On-The-Job <span className='text-yellow-500'>Training</span>
                    </h1>
                    <p className='text-xl mt-4'>
                        At VAPL, we offer exceptional On-The-Job Training programs that pave the way for a successful career in the aviation industry. As a student in our AME (Aircraft Maintenance Engineering) training, you will delve into the captivating world of aviation, gaining hands-on experience and practical knowledge that sets you apart. During the six-month training period, you will actively participate in various activities conducted by VAPL, immersing yourself in real-world scenarios and challenges.
                    </p>
                    <button className='bg-yellow-400 text-black text-2xl p-2 rounded-lg px-4 mt-4'>
                        Apply
                    </button>
                </div>
                <div className='w-1/2 relative'>
                    <div className='overflow-hidden rounded-lg '>
                        <div
                            className='flex transition-transform ease-out duration-500 '
                            style={{ transform: `translateX(-${current * 100}%)` }}
                        >
                            {trainingList.map((t, i) => (
                                <img
                                    key={i}
                                    src={t}
                                    alt={`On-The-Job Training ${i + 1}`}
                                    className='h-auto flex-shrink-0 rounded-lg'
                                />
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={previousSlide}
                        className='absolute top-1/2 left-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'
                    >
                        <HiChevronLeft size={24} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className='absolute top-1/2 right-2 -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full'
                    >
                        <HiChevronRight size={24} />
                    </button>
                    <div className='absolute bottom-4 right-0 left-0'>
                        <div className='flex items-center justify-center gap-2'>
                            {trainingList.map((_, i) => (
                                <div
                                    key={i}
                                    className={`
                                        transition-all w-3 h-3 bg-white rounded-full
                                        ${current === i ? "p-2" : "bg-opacity-50"}
                                    `}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurJobTraining;