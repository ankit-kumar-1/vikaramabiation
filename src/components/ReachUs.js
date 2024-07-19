import React, { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({
        title: 'Mr.',
        fullName: '',
        companyName: '',
        country: '',
        contactNumber: '',
        email: '',
        message: ''
    });
    const [step, setStep] = useState(1);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <select name="title" value={formData.title} onChange={handleChange} className="border p-2 w-full sm:w-1/4">
                                <option value="Mr.">Mr.</option>
                                <option value="Mrs.">Mrs.</option>
                                <option value="Ms.">Ms.</option>
                            </select>
                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="Full Name*"
                                className="border p-2 w-full sm:flex-grow"
                                required
                            />
                        </div>
                        <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            placeholder="Name of the Company"
                            className="border p-2 w-full"
                        />
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                placeholder="Country*"
                                className="border p-2 w-full sm:w-1/2"
                                required
                            />
                            <input
                                type="tel"
                                name="contactNumber"
                                value={formData.contactNumber}
                                onChange={handleChange}
                                placeholder="Contact Number"
                                className="border p-2 w-full sm:w-1/2"
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email*"
                            className="border p-2 w-full"
                            required
                        />
                    </>
                );
            case 3:
                return (
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message*"
                        className="border p-2 w-full h-32"
                        required
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="container px-4">
            <div className='text-center mt-10 sm:mt-20'>
                <h1 className='text-8xl sm:text-5xl font-bold border-b-2 border-gray-500 inline-block pb-4'>
                    Reach <span className='text-yellow-500'>Us</span>
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-between my-6 sm:my-10 mx-12">
                <div className='border border-gray-300 rounded-lg p-4 sm:p-7 w-full lg:w-1/2 mb-6 lg:mb-0'>
                    <h2 className="text-xl sm:text-2xl font-semibold mb-2 mt-4">Please Provide Your Details*</h2>

                    <form onSubmit={handleSubmit} className="space-y-4 text-base sm:text-lg mt-6 sm:mt-10">
                        {renderStep()}
                        <div className="flex justify-between mt-4">
                            {step > 1 && (
                                <button type="button" onClick={prevStep} className="bg-gray-300 text-black py-2 px-4 rounded">
                                    Previous
                                </button>
                            )}
                            {step < 3 ? (
                                <button type="button" onClick={nextStep} className="bg-blue-500 text-white py-2 px-4 rounded">
                                    Next
                                </button>
                            ) : (
                                <button type="submit" className="bg-yellow-400 text-black py-2 px-4 rounded">
                                    Submit
                                </button>
                            )}
                        </div>
                    </form>
                </div>

                <div className="border border-gray-300 rounded-lg p-4 sm:p-7 w-full lg:w-1/2 lg:ml-8 text-center">
                    <div className='flex flex-col sm:flex-row gap-6 sm:gap-10'>
                        <div className='mt-3 hover:shadow-xl w-full sm:w-1/2'>
                            <iframe
                                title="map"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5498959246556!2d77.07244577528603!3d28.553245775708056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b4eb9c0e9b9%3A0xa27c7ba6f040a5c1!2sVIKRAM%20AVIATION%20PVT.LTD.!5e0!3m2!1sen!2sin!4v1721133379162!5m2!1sen!2sin"
                                className="w-full h-64 sm:h-80"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>

                        <div className='mt-2 hover:shadow-xl w-72 sm:w-1/2'>
                            <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl font-bold text-yellow-500 mb-2 sm:mb-4">Vikram Aviation Pvt Ltd</h2>
                            <p className="text-sm text-start px-5">ISO 9001:2015 Certified</p>
                            <div className="flex flex-col md:flex-row justify-between p-2 gap-2">
                                <div className=' text-start p-3'>
                                    <p>Vikram Aviation Pvt Ltd
                                        Plot No. 02
                                        Khasra No. 348/02
                                        Vill Sahabad,
                                        Muhammadpur
                                        Near Bansal Farm
                                        New Delhi - 110061</p>
                                </div>

                            </div>
                            <p className="mt-4 text-blue-500 text-start px-4">info@vikramaviation.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;