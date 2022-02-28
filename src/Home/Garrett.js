import React from 'react';
import './Garrett.css'
import garrett from '../images/garrett.jpeg';

export default function Garrett(){
    return (
        <div className="garrett">
            <h1>Garrett Motion Competition</h1>
            <div className="garrett-info">
                <div>
                <p>The team representing SAE NITK has won the Garrett Motion Competition conducted in September 2021.</p> 
                <p>The competition was a part of a 1-day event organized by Garrett
                Motion. The competition was an inter-college project competition in which
                students were asked to efficiently use compressed hydrogen to give maximum
                power output to the shaft . Colleges across the country attended the event and
                participated in the competition.</p>
                </div>     
                <img src={garrett}/>
            </div>
            

        </div>
    )
}