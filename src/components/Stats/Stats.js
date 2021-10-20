import React from 'react';
import './Stats.css'
import {Card, CardGroup} from 'react-bootstrap'

const Stats = () => {
    return (
        <div className="stats">
            <h1 className="stats-title"> Stats regarding our platform</h1>
           
            <CardGroup className='stat-card-groups'>
                <Card className='stat-single-card'>
                    
                    <Card.Body>
                    <Card.Title>Doctors</Card.Title>
                    <br/>
                    
                    <Card.Text className="stat-text">
                        25
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card>
                    
                    <Card.Body>
                    <Card.Title>Patients Treated</Card.Title>
                    <br/>
                    
                    <Card.Text className="stat-text">
                         1700+
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
                <Card>
                    
                    <Card.Body>
                    <Card.Title>Recommendations</Card.Title>
                    <br/>
                    
                    <Card.Text className="stat-text">
                       117+
                    </Card.Text>
                    </Card.Body>
                   
                </Card>
               
            </CardGroup>
            </div>
        
    );
};

export default Stats;