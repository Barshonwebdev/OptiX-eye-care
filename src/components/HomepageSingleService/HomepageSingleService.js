import React from 'react';
import './HomepageSingleService.css'
import {Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';


const HomepageSingleService = (props) => {
    const{ id,Name, image, Description}= props.service;
    const HomepageServiceStyle={border: '3px solid grey', padding:'10px', borderRadius: "10px"}
    return (
        <div style={HomepageServiceStyle}>
            <img src={image} alt=""/>
            <h3>Service Name: {Name}</h3>
            <h3>Description: {Description}</h3>
            <Button className="btn-div" variant="primary" ><NavLink className="btn" to={`/home/${id}`}>Details</NavLink> </Button>
        </div>
    );
};

export default HomepageSingleService;