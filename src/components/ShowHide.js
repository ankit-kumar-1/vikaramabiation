import { useState } from "react";

const Section = ({ title, desc, isVisible, setIsvisible }) => {
    return (
        <div className="border border-black m-2 p-2">
            <h3 className="font-bold text-2xl">{title}</h3>
            {isVisible ? (
                <>
                    <p className=" text-lg"><span className=" text-lg font-bold" >Our journey began in 1996,</span>{desc}</p>
                </>
            ) : (
                <button onClick={() => setIsvisible(true)} className="cursor-pointer underline">
                    Show
                </button>
            )}
        </div>
    );
};


const ShowHide = () => {
    const [visibleSection, setIsvisibleSection] = useState("team");
    return (
        <div className="m-4">
            <Section className="text-2xl" title={"History"} desc={" founded by a group of seasoned aviation professionals who shared  a common vision of transforming the aviation landscape.We are also honored to hold the esteemed ISO 9001:2015 certification."}
                isVisible={visibleSection === "History"}
                setIsvisible={() => setIsvisibleSection("History")} />
            <Section title={"Approved Workshop"} desc={"VAPL boasts a Directorate General of Civil Aviation (DGCA)- approved workshop for Aviation Instruments Bench Check, Calibration & Repair, as well as an Electrical Repair & Testing facility. Our persistent focus on safety and quality ensures that every service we provide meets the most stringent standards."}
                isVisible={visibleSection === "Approved Workshop"}
                setIsvisible={() => setIsvisibleSection("Approved Workshop")}
            />
            <Section title={"Expansion"} desc={"We envision an exciting future for aviation, with plans to establish a Regional Airline, an Aircraft Maintenance Centre, and Avionics Repair and Overhaul (AMRO) & Non-Destructive Testing (NDT) Center, alongside an AME School, we are committed to elevating the aviation experience to new heights.."}
                isVisible={visibleSection === "Expansion"}
                setIsvisible={() => setIsvisibleSection("Expansion")}
            />
        </div>
    );
}
export default ShowHide;