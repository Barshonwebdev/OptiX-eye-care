import React from 'react';
import { useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import './ServiceDetails.css'
const ServiceDetails = () => {
    const{serviceId} = useParams();

    const[detail,setDetail] = useState([])

    const [allData, setAllData]= useState({})





    useEffect(()=>{
        fetch('/ServiceDetailData.json')
        .then(res=> res.json())
        .then(data => setDetail(data) )
    },[])

    useEffect(()=>{
      const foundDetail=  detail.find(serviceDetail=> serviceDetail.id == serviceId)
      setAllData(foundDetail);
    },[detail]) 

    return (
        <div className="details-div">
            <h2>Procedure Name: {allData?.Name}</h2>
            <img src={allData?.image} 
            alt=""/>
        <div className="description">
        <h4  >Details: {allData?.Description}</h4>
        </div>
    
        </div>
    );
};

export default ServiceDetails;