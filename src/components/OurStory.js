import React from 'react';
import img from '../img/098.jpg'
import ShowHide from './ShowHide';

function OurStory() {
    return (
        <div className='text-center'>
            <h1 className='text-6xl font-bold border-b-2 border-gray-500 inline-block pb-4'>
                Our <span className='text-yellow-500'>Story</span>
            </h1>

            <div className=' flex mt-20 justify-between items-center mx-24'>
                <div>
                    <h1 className=' text-4xl font-bold'>What Do You <span className=' text-yellow-500'>Want To Know</span> </h1>
                    <p className=' text-xl'>Welcome to Vikram Aviation Pvt Ltd (VAPL), where we take immense pride in our rich heritage and <br /> commitment to excellence in aviation.</p>
                    <button className=' bg-yellow-400 text-black text-xl p-2 rounded-lg px-3'>Know More</button>
                    <div className=''>
                        <ShowHide />
                    </div>
                </div>

                <div>
                    <img src={img} alt="our story" />
                </div>
            </div>
        </div>
    );
}

export default OurStory;
