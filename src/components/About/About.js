import React from 'react';
import './About.css';
import aboutImage from '../../Images/Product-VARIO.jpg'

const About = () => {
    return (
        <div className='about-section'>
        <img className="about-image" src={aboutImage} alt=""/>  
            
                <div>
                <h1 className="about-title">About "OptiX"</h1>
                <h3>
                    "OptiX" is your first choice for considering eye care and treatment. Throughout the years, various revolutionary eye treatment technologies have been brought up and we make sure to get our hands on each of those. Not only new equipments and techs, we also ensure you get treated by the best doctors and eye surgeons. OptiX is determined to treat every eye it can find. We have: <br/> <br/> 1. Highly Professional Doctors. <br/><br/> 2. Over 20 types of surgical procedures. <br/> <br/> 3. Eye care center in around five cities. <br/> <br/> 4. Early Appointment System. <br/> <br/> And many more features.. </h3>
                </div>
                </div>
           
    );
};

export default About;