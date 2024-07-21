import React, { useState } from 'react';
import img from '../img/098.jpg';
import ShowHide from './ShowHide';


function OurStory() {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <div className='text-center'>
            <h1 className='text-4xl font-bold border-b-2 border-gray-500 inline-block pb-4 mt-10'>
                Our <span className='text-yellow-500'>Story</span>
            </h1>

            <div className='flex flex-col md:flex-row mt-14 justify-between items-center mx-4 md:mx-14'>
                <div className='w-full md:w-1/2 md:pr-8'>
                    <h1 className='text-2xl font-bold'>
                        What Do You <span className='text-yellow-500'>Want To Know</span>
                    </h1>
                    <p className='text-md mt-4 text-start'>
                        Welcome to Vikram Aviation Pvt Ltd (VAPL), where we take immense pride in our rich heritage and
                        commitment to excellence in aviation.
                    </p>
                    {!showMore && (
                        <button
                            className='bg-yellow-400 text-black text-md p-2 rounded-lg px-3 mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '
                            onClick={toggleShowMore}
                        >
                            Know More
                        </button>
                    )}
                    {showMore && (
                        <div className='text-md relative'>
                            <div className=' text-start'>
                                <p>
                                    At VAPL, we believe in providing top-notch training and services to aspiring aviation professionals. Our journey began with a vision to create a premier institution that nurtures talent and fosters growth in the aviation industry. Over the years, we have grown and evolved, staying true to our mission of delivering excellence and innovation.
                                </p>
                            </div>
                            <button
                                className='bg-yellow-400 text-black text-md p-2 rounded-lg px-3 absolute -bottom-10 right-2 m-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '
                                onClick={toggleShowMore}
                            >
                                Show Less
                            </button>
                        </div>
                    )}
                    <div className='mt-8'>
                        <ShowHide />
                    </div>
                </div>

                <div className='w-full md:w-1/2 md:pl-8 mt-6'>
                    <img src={img} alt="Our Story" className='w-full h-auto shadow-lg rounded-lg hover:shadow-xl' />
                </div>
            </div>
        </div>
    );
}

export default OurStory;
