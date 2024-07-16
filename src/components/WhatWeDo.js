import React from 'react'
import { BsCheck2 } from "react-icons/bs";
import { FaRegHandPeace, FaRegLightbulb, FaCartArrowDown } from "react-icons/fa";
import { MdElectricBolt } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";


function WhatWeDo() {
  return (
    <div className=' mt-16 bg-gray-100'>
      <div className=' text-center'>
        <h1 className='text-6xl font-bold border-b-2 border-gray-500 inline-block pb-4 pt-5'>
          What <span className='text-yellow-500'>We Do</span>
        </h1>
        <p className=' text-2xl p-5'>We offer a comprehensive range of aircraft interior products and services, <br />
          including upholstery, leather, seat cushion & headset repairs, as well as the supply of ready-to-install components, meeting FAA standards.</p>
      </div>
      <div className=' flex items-center justify-between m-8'>
        <div>
          <div className='bg-white m-5 p-5 rounded-lg hover:shadow-2xl'>
            <h1 className=' text-2xl pb-2 flex'> <span className=' text-4xl pr-10 text-yellow-500'><BsCheck2 /></span>PRECISION CALIBRATION & GSE</h1>
            <p className=' text-xl pl-16'>Elevate your aviation experience with our meticulous calibration services. From altimeters to airspeed indicators, our expert technicians fine-tune your instruments to ensure optimal performance. Our commitment extends to Ground Support Equipment (GSE) Calibration & Repairs, where we meticulously inspect, calibrate, and repair hydraulic test stands, aircraft jacks, and essential GSE, contributing to the seamless efficiency of your ground operations</p>
          </div>
          <div className='bg-white m-5 p-5 rounded-lg hover:shadow-2xl'>
            <h1 className=' text-2xl pb-2 flex'><span className=' text-4xl pr-10 text-yellow-500'><FaRegHandPeace /></span>AIRCRAFT BLANKING</h1>
            <p className=' text-xl pl-16'>We offer a comprehensive range of services designed to protect and enhance the functionality of your aviation equipment. Our services encompass steamers for efficient cleaning and maintenance, Pitot covers to safeguard critical instrumentation, engine covers to shield engines from environmental factors, rotor covers for added protection, various inlet and outlet covers to maintain peak performance, body covers for all-around protection, and front glass shield covers to ensure visibility and safety. With our extensive array of services, we provide top-notch solutions for the aviation industry, ensuring the longevity and reliability of your aircraft components..</p>
          </div>
          <div className='bg-white m-5 p-5 rounded-lg hover:shadow-2xl'>
            <h1 className=' text-2xl pb-2 flex'><span className=' text-4xl pr-10 text-yellow-500'><MdElectricBolt /></span>REPAIR & MAINTENANCE OF HEADSETS</h1>
            <p className=' text-xl pl-16'>We are specialized in the repair and maintenance of aircraft headsets. Our comprehensive expertise enables us to pinpoint and address a myriad of headset issues, from electrical malfunctions to mechanical intricacies. Our skilled technicians possess the acumen to diagnose faults accurately, ensuring swift and precise repairs that reinstate optimal functionality and reliability to each headset. Trust to navigate the complexities of headset intricacies with unmatched proficiency, ensuring seamless communication in aviation operations.</p>
          </div>
          <div className='bg-white m-5 p-5 rounded-lg hover:shadow-2xl'>
            <h1 className=' text-2xl pb-2 flex'><span className=' text-4xl pr-10 text-yellow-500'><FaRegHandPeace /></span>AIRCRAFT INTERIOR CLEANING</h1>
            <p className=' text-xl pl-16'>The purpose of cleaning standards in commercial aircraft is to ensure the health and safety of passengers and crew. Aircraft cleaning standards are regulatory requirements that civil aviation authorities impose on the airline operators to ensure the minimum level of cleanliness onboard. For making an Aircraft dust, dirt and insect free through aircraft cleaning process is performed. The interior cleaning involves the following sub process;
              Vacuum Cleaning , Deep Cleaning & Dry Cleaning.</p>
          </div>
        </div>
        <div>
          <div className='bg-white m-5 p-5 rounded-lg hover:shadow-2xl'>
            <h1 className=' text-2xl pb-2 flex'><span className=' text-4xl pr-10 text-yellow-500'><MdElectricBolt /></span>ELECTRICAL BENCH CHECKS & REPAIRS</h1>
            <p className=' text-xl pl-16'>Experience top-tier avionics reliability through our exhaustive bench checks and advanced repair techniques. We meticulously assess and repair your aircraft's electrical systems, ensuring flawless functionality. Examples include precision diagnostics for navigation systems, thorough testing of communication equipment, and advanced repairs on critical electrical components for optimal in-flight performance.</p>
          </div>
          <div className='bg-white m-5 p-5 rounded-lg hover:shadow-2xl'>
            <h1 className=' text-2xl pb-2 flex'><span className=' text-4xl pr-10 text-yellow-500'><FaRegLightbulb /></span>AIRCRAFT FUMIGATION</h1>
            <p className=' text-xl pl-16'>Operators have reported aircraft infestations by rodents, including mice and rats, as well as reptiles like snakes and lizards, causing passenger and crew discomfort, potential damage, and grounding in extreme cases, especially when electrical wiring is affected. These pests are often attracted to the odor emitted by wire insulation. Our in-service experience reveals that rodents and reptiles tend to access aircraft through open doors and access panels during extended parked periods. Beyond fumigation, we offer comprehensive aircraft disinfection services to eliminate viruses and harmful bacteria, covering specific areas or providing full aircraft disinfection.</p>
          </div>
          <div className='bg-white m-5 p-5 rounded-lg hover:shadow-2xl'>
            <h1 className=' text-2xl pb-2 flex'><span className=' text-4xl pr-10 text-yellow-500'><FaCartArrowDown /></span>CONSUMABLES AND SPARE PARTS</h1>
            <p className=' text-xl pl-16'>In the realm of Aircraft Consumables and Spare Parts, we offer an extensive array of essential products and components that ensure the uninterrupted operation of your aircraft. Our services encompass a wide range of consumables and spare parts, from critical safety equipment to routine maintenance supplies, all designed to meet the stringent standards and requirements of the aviation industry. We are dedicated to providing reliable, top-quality solutions to keep your aircraft flying safely and efficiently.</p>
          </div>
          <div className='bg-white m-5 p-5 rounded-lg hover:shadow-2xl'>
            <h1 className=' text-2xl pb-2 flex'><span className=' text-4xl pr-10 text-yellow-500'><HiOutlineSpeakerphone /></span>AIRCRAFT EXTERIOR CLEANING</h1>
            <p className=' text-xl pl-16'>This cleaning is a light exterior cleaning intended to maintain a favorable appearance of the aircraft's exterior between major detailed cleaning events. It is intended to address areas of the exterior that need immediate attention and plainly visible to owners. When it comes to washing an aircraft's exterior, there are two basic types of methods;
              Wet Method & Dry Method The wet wash is the most familiar:
              Spray on water and cleaning agent (soap), scrub the surface, rinse and dry.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default WhatWeDo
