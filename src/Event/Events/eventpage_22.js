import React from "react";
import autocad from '../../images/Events/autocad.png';
import ansys from '../../images/Events/ansys.jpg';
import fusion360 from '../../images/Events/fusion360.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventTemplate from './event_page';

function Event1_22(){
    return(
    <div>
        <EventTemplate 
         title="AutoCAD KEP"
         img={autocad}
         desc="The KEP was conducted by Pradeep Singh Solanki, a third year mechanical engineering student part of SAE NITK. 
         A brief introduction of the software was given. The use of AutoCAD in architecture, civil engineering, interior design, automobile industry, aerospace industry, mechanical engineering and fashion designing was explained by the speaker.
         This was followed by a user tour of AutoCAD. Toggle keys like ortho, snap, dynamic input, polar tracking, dynamic UCS, workspace switching, etc. were discussed. The use of templates and plotting was also covered.
         2D modelling commands available in the draw panel and modify panel were explained. Dimensioning, introducing text elements, the use of layers, etc., were also discussed. An introduction to 3D modelling features such as extrude, sweep, revolve, etc was given. The attendees were able to understand various other aspects of the software such as visualization of spot, point, weblight, shadow effect of sun, location, material browser rendering, environment settings, etc.
         "
         date="July 31, 2021"
         speakers="Pradeep Singh Solanki"
         platform="Microsoft Teams"
         type="External" />
    </div>
    )
} 
function Event2_22(){
    return(
    <div>
        <EventTemplate 
         title="Ansys KEP"
         img={ansys}
         desc="The KEP was conducted by Sumit Sagar, a third year mechanical engineering student part of SAE NITK. 
         The KEP started with an introduction to ansys software. The different modules of the software such as static structural, thermal, fluent, Computational Fluid Dynamics (CFD), etc., were discussed. The attendees were given an overview of the prerequisite topics required to understand the analysis, such as the concepts of stress, strain, conservation laws, etc. A brief introduction to Finite Element Analysis (FEA) was given along with the details about the representation of Partial Differential Equations in the different modules.
         The concept of meshing was given separate focus. The speaker also emphasized on the correctness and validation of the results obtained. The demonstration of the different features of the software was done with the help of a real life problem statement. Analysis of a bicycle pedal crank was discussed in the KEP.
         "
         date="August 01, 2021"
         speakers="Sumit Sagar"
         platform="Microsoft Teams"
         type="External" />
    </div>
    )
} 
function Event3_22(){
    return(
    <div>
        <EventTemplate 
         title="Fusion 360 KEP"
         img={fusion360}
         desc="The KEP was conducted by Shunu PS and Guhan Sidharth M, third year mechanical engineering students part of SAE NITK. 
         It started with an introduction to the User Interface of the Fusion 360 software. Various 2D drafting and sketching features such as circles, rectangles, polygons, editing capabilities such as fillet, chamfer, and other options such as patterns, etc., were discussed. Different topics of 3D part modelling such as extrude, revolve, holes, shell, etc., were also covered. The attendees were given a question to solve and practice. 
         An introduction to assembly modelling was given, which was followed by a detailed demo of modelling a universal joint assembly and a simple slider joint. The concept of Add-ins and scripts was covered. The modelling of a simple gear drive was done, which included the implementation of revolute joints and motion links. Various other aspects such as animate joint, animate model, interference detection, component color cycling toggle, introduction of McMaster Carr components, section analysis and joint limits were also touched upon.
         "
         date="October 16, 2021"
         speakers="Shunu PS and Guhan Sidharth M"
         platform="Microsoft Teams"
         type="External" />
    </div>
    )
} 

export {
    EventTemplate,
    Event1_22,
    Event2_22,
    Event3_22,
  }