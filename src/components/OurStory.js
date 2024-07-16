import React from 'react';
import img from '../img/098.jpg';
import ShowHide from './ShowHide';

function OurStory() {
    return (
        <div className='text-center'>
            <h1 className='text-6xl font-bold border-b-2 border-gray-500 inline-block pb-4'>
                Our <span className='text-yellow-500'>Story</span>
            </h1>

            <div className='flex mt-14 justify-between items-center mx-14'>
                <div className='w-1/2 pr-8'>
                    <h1 className='text-4xl font-bold'>
                        What Do You <span className='text-yellow-500'>Want To Know</span>
                    </h1>
                    <p className='text-xl mt-4'>
                        Welcome to Vikram Aviation Pvt Ltd (VAPL), where we take immense pride in our rich heritage and
                        commitment to excellence in aviation.
                    </p>
                    <button className='bg-yellow-400 text-black text-xl p-2 rounded-lg px-3 mt-4'>Know More</button>
                    <div className='mt-4'>
                        <ShowHide />
                    </div>
                </div>

                <div className='w-1/2 pl-8 mt-6'>
                    <img src={img} alt="Our Story" className='w-full h-auto shadow-lg rounded-lg hover:shadow-xl' />
                </div>
            </div>
        </div>
    );
}

export default OurStory;
