import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
    return (
        <div className="border border-yellow-500 p-2 shadow-xl mb-2">
            <div className="flex justify-between items-center">
                <h3 className="font-bold text-2xl p-5">{title}</h3>
                <button onClick={setIsVisible} className="cursor-pointer">
                    {isVisible ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    )}
                </button>
            </div>
            {isVisible && (
                <p className="text-lg mt-2">
                    <span className="text-xl font-bold">Our journey began in 1996,</span>{desc}
                </p>
            )}
        </div>
    );
};

const ShowHide = () => {
    const [visibleSection, setVisibleSection] = useState(null);

    const toggleSection = (sectionName) => {
        setVisibleSection(prevSection => prevSection === sectionName ? null : sectionName);
    };

    return (
        <div className="m-4 shadow-xl">
            <Section
                className="text-2xl"
                title="History"
                desc=" founded by a group of seasoned aviation professionals who shared a common vision of transforming the aviation landscape. We are also honored to hold the esteemed ISO 9001:2015 certification."
                isVisible={visibleSection === "History"}
                setIsVisible={() => toggleSection("History")}
            />
            <Section
                title="Approved Workshop"
                desc="VAPL boasts a Directorate General of Civil Aviation (DGCA)- approved workshop for Aviation Instruments Bench Check, Calibration & Repair, as well as an Electrical Repair & Testing facility. Our persistent focus on safety and quality ensures that every service we provide meets the most stringent standards."
                isVisible={visibleSection === "Approved Workshop"}
                setIsVisible={() => toggleSection("Approved Workshop")}
            />
            <Section
                title="Expansion"
                desc="We envision an exciting future for aviation, with plans to establish a Regional Airline, an Aircraft Maintenance Centre, and Avionics Repair and Overhaul (AMRO) & Non-Destructive Testing (NDT) Center, alongside an AME School, we are committed to elevating the aviation experience to new heights."
                isVisible={visibleSection === "Expansion"}
                setIsVisible={() => toggleSection("Expansion")}
            />
        </div>
    );
}

export default ShowHide;