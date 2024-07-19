import React, { useState, useEffect, useRef } from 'react';

function ApplicationForm({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        education: '',
        experience: '',
        whyJoin: ''
    });

    const formRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Application submitted successfully!');
        onClose();
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (formRef.current && !formRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
            <div ref={formRef} className="p-5 border w-11/12 max-w-md h-auto max-h-[90vh] overflow-auto shadow-lg rounded-md bg-white">
                <div className="text-center">
                    <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Apply for Vikram Aviation Job Training</h3>
                    <form className="text-left" onSubmit={handleSubmit}>
                        {['name', 'email', 'phone', 'education'].map((field) => (
                            <div className="mb-3" key={field}>
                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor={field}>
                                    {field.charAt(0).toUpperCase() + field.slice(1)}
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id={field}
                                    type={field === 'email' ? 'email' : 'text'}
                                    placeholder={field === 'name' ? 'John Doe' : field === 'email' ? 'johndoe@example.com' : field === 'phone' ? '123-456-7890' : "Bachelor's in Aviation"}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        ))}
                        {['experience', 'whyJoin'].map((field) => (
                            <div className="mb-3" key={field}>
                                <label className="block text-gray-700 text-sm font-bold mb-1" htmlFor={field}>
                                    {field === 'experience' ? 'Relevant Experience' : 'Why do you want to join?'}
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id={field}
                                    placeholder={field === 'experience' ? 'Describe your relevant experience...' : 'Tell us why you are interested...'}
                                    name={field}
                                    value={formData[field]}
                                    onChange={handleChange}
                                    rows="2">
                                </textarea>
                            </div>
                        ))}
                        <div className="flex items-center justify-between mt-4">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline text-sm"
                                type="submit"
                            >
                                Submit
                            </button>
                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded focus:outline-none focus:shadow-outline text-sm"
                                type="button"
                                onClick={onClose}
                            >
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    );
}

export default ApplicationForm;