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

    return (
        <div className="flex justify-between m-14 p-6">
            <div className='border border-gray-300 rounded-lg p-7 ml-14 w-2/5'>
                <form onSubmit={handleSubmit} className="space-y-4 text-2xl">
                    <div className="flex space-x-4">
                        <select name="title" value={formData.title} onChange={handleChange} className="border p-2">
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
                            className="border p-2 flex-grow"
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
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            placeholder="Country*"
                            className="border p-2 w-1/2"
                            required
                        />
                        <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            placeholder="Contact Number"
                            className="border p-2 w-1/2"
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
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message*"
                        className="border p-2 w-full h-32"
                        required
                    />
                    <button type="submit" className="bg-yellow-400 text-black py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
            </div>

            <div className="border border-gray-300 rounded-lg p-7">
                <h2 className="text-2xl font-bold text-yellow-400 mb-2">Vikram Aviation Pvt Ltd</h2>
                <p className="text-sm mb-4">ISO 9001:2015 Certified</p>
                <div className="flex">
                    <div className="w-1/2">
                        <p>Vikram Aviation Pvt Ltd</p>
                        <p>Plot No. 02</p>
                        <p>Khasra No. 348/02</p>
                        <p>Vill Sahabad ,</p>
                        <p>Muhammadpur</p>
                        <p>Near Bansal Farm</p>
                        <p>New Delhi - 110061</p>
                    </div>
                    <div className="w-1/2">
                        <p>Civil Aviation (Marketing)</p>
                        <p>+91-9654282583</p>
                        <p>Defence Cordinator</p>
                        <p>+91- 9891404147</p>
                        <p>Quality Department</p>
                        <p>+91-9675180888</p>
                    </div>
                </div>
                <p className="mt-4 text-blue-500">info@vikramaviation.com</p>
            </div>

        </div>
    );
}

export default ContactForm;