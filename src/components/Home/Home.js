import React from 'react';
import HomepageServices from '../HomepageServices/HomepageServices';
import Stats from '../Stats/Stats';
import './Home.css';
import myImage from '../../Images/eye-care banner.jpg'
import Contact from '../Contact/Contact';



const Home = () => {
    return (
        <div>
            <h1 className="welcoming" >Welcome to our eye care center</h1>
            <img className="cover" src={myImage} alt=""/>
            <h3 className="welcoming">Eye is one of the most useful organs in the human body and we make sure that your eyes are perfectly fit, healthy and able to view all kinds of beauty of this world</h3>
            <HomepageServices></HomepageServices>
            <Stats></Stats>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;