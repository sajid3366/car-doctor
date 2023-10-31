import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div className="mt-12 mb-12 text-center">
            <div className="max-w-2xl mx-auto">
                <h1 className='text-2xl font-semibold'>Services</h1>
                <h2 className="text-5xl font-bold mt-3 mb-2">Our Services</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eum. Eligendi, perferendis.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Services;