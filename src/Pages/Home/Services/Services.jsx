// import { data } from "autoprefixer";
// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

// DRY --> Donot Repeat Yourself
const Services = () => {
    const services = useServices();

    // const [services, setServices] = useState([]);

    // useEffect(() =>{
    //     fetch('http://localhost:5000/services')
    //     .then(res => res.json())
    //     .then(data => {
    //        setServices(data);
    //     })
    // }, [])

    return (
        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-3xl text-orange-600 font-semibold">Our Services</h3>
                <h2 className="text-5xl font-bold mt-4 mb-4">Our Services Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard 
                        key={ServiceCard._id}
                        service={service}
                        ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;