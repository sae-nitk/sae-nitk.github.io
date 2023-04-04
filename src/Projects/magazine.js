//magazines
import React from "react";
import pdf1 from '../images/magazine1920.pdf';
import pdf2 from '../images/magazine2021.pdf';
import pdf3 from '../images/magazine2122.pdf';
import pdf4 from '../images/magazine2223.pdf';
import './magazine.css';


function Magazine1920(){
    return(
    <div className="magazine">
        <div className="mag-heading">
            <h1>Magazine 2019-20</h1>
        </div>
        <div className="magazine-section">   
          <iframe src={pdf1+'#toolbar=0'} width="100%" height="800px"></ iframe>
        </div>
    </div>        
    )
 
}

function Magazine2021(){
    return(
    <div className="magazine">
        <div className="mag-heading">
            <h1>Magazine 2020-21</h1>
        </div>
        <div className="magazine-section">   
          <iframe src={pdf2+'#toolbar=0'} width="100%" height="800px"></ iframe>
        </div>
    </div>        
    )
 
}

function Magazine2122(){
    return(
    <div className="magazine">
        <div className="mag-heading">
            <h1>Magazine 2021-22</h1>
        </div>
        <div className="magazine-section">   
          <iframe src={pdf3+'#toolbar=0'} width="100%" height="800px"></ iframe>
        </div>
    </div>        
    )
 
}
function Magazine2223(){
    return(
    <div className="magazine">
        <div className="mag-heading">
            <h1>Magazine 2022-23</h1>
        </div>
        <div className="magazine-section">   
          <iframe src={pdf4+'#toolbar=0'} width="100%" height="800px"></ iframe>
        </div>
    </div>        
    )
 
}
export {
 Magazine1920,
 Magazine2021,
 Magazine2122,
 Magazine2223
}