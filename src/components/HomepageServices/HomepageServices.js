import React, { useEffect, useState } from 'react';
import HomepageSingleService from '../HomepageSingleService/HomepageSingleService';
import "./HomepageServices.css"

const HomepageServices = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./ServicesData.json')
        .then(res => res.json())
        .then(data=>setServices(data)); 
    },[])
    return (
        <div>
            <h1 className="homeservice-title"> Services</h1>
            <h4>We provide numerous services including some critical surgeries. Check them out!</h4>
            <div className="homepage-service-container">
            {
                services.map(service=><HomepageSingleService key={service.id} service={service}></HomepageSingleService>)
            }
            </div>
        </div>
    );
};

export default HomepageServices;