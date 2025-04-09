import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import EventTemplate from './event_page';

import gate_webinar from '../../images/Events/gate-webinar.jpg';
import rspant from '../../images/Events/webinar-rspant.jpg';
import matlab from '../../images/Events/matlab.jpeg';
import simulink from '../../images/Events/simulink.jpeg';
import solidworks from '../../images/Events/solidworks.png';
import adobe from '../../images/Events/adobe.jpg';
import cosmol from '../../images/Events/cosmol.png';
import magazine from '../../images/Events/magazine2.jpeg';
import website from '../../images/Events/website.png';

function Event1_21(){
    return(
    <div>
        <EventTemplate 
         title="Webinar by Prof RS Pant"
         img={rspant}
         desc="The webinar was conducted by Dr. Rajkumar S Pant, a professor in the Department of Aerospace Engineering, Indian Institute of Technology, Bombay. It was focused on meditation and yoga which helps in handling anxiety especially in the pandemic scenario.
         It started off with a brief discussion about the COVID – 19 pandemic scenario until then: its causes, its effects on public health, effects on other sectors with a special focus on aerospace sector. “Equip or Enrich yourself” – a formula to gear up and make oneself future proof was discussed. A gist of how minds do actions and techniques to develop bare observations were covered. 
         Finally, all the participants performed a form of Buddhist meditation “Anapana Sati”, which translates to “mindfulness of breathing”. This 10 minute activity enabled the attendees to witness the real feeling of how effective meditation can produce a calm and relaxed mind.
         "
         date="May 31, 2020"
         speakers="Dr. Rajkumar S Pant"
         platform="Zoom"
         type="External" />
    </div>
    )
} 

function Event2_21(){
    return(
    <div>
        <EventTemplate 
         title="MATLAB KEP"
         img={matlab}
         desc="The KEP was conducted by Diwakar S Goud. The first phase focused on installation of Matlab. 
         The different sources to learn about the software were also explored. In the second phase basic 
         coding, the GUI and the different built-in apps in Matlab were covered.  The events was open to 
         members of the club."
         date="&emsp; &emsp; October 23, 2020 (Phase 1) &emsp; &emsp; 
         &emsp; &emsp;October 24, 2020 (Phase 2)"
         speakers="Diwakar S Goud"
         platform="MS Teams"
         type="Internal" />
    </div>
    )
}

function Event3_21(){
    return(
    <div>
        <EventTemplate 
         title="Simulink KEP"
         img={simulink}
         desc="The event was conducted by Rishu Kumar and Ankit Gupta. It was divided into two phases.
         The first phase dealt with the basics of Simulink. A general overview of the software, such as the types and models that can be made, was discussed along with a specific view of a blank Simulink model. The various toolboxes and the associated shortcuts were dealt with. Mathematical toolboxes such as sine, transfer functions, gain, display, etc., were also briefed. A simple step function was simulated in the model to find out the display functions of various trigonometric functions.
         The second phase dealt with certain advanced features and functionalities. PID controller and various tuning methods were discussed. The participants were introduced to various features of transfer functions of first and second order. Visualisation of graphs and optimization were also included in the KEP. 
         The event was open to the members of the club.         
         "
         date="&emsp; December 18, 2020 (Phase 1) &emsp; &emsp;
         &emsp;  January 17, 2021 (Phase 2)"
         speakers="Rishu Kumar, Ankit Gupta"
         platform="MS Teams"
         type="Internal"  />
    </div>
    )
}

function Event4_21(){
    return(
    <div>
        <EventTemplate 
         title="SolidWorks KEP"
         img={solidworks}
         desc="The KEP was conducted by Eshwar Sai Srinivas. It covered a wide range of topics in Solidworks from sketching to custom weldment. The basics of sketching such as drawing lines, circles, etc., along with applying suitable constraints such as tangent, horizontal, etc., was discussed with examples. Sketch patterns and section planes were also explained.
         The basics of 3D modelling such as extrusion, loft, sweep etc was dealt with. Edit features like trim, fillet, chamfer, etc., were discussed. Modelling problems associated with the conversion of orthographic views to isometric views and vice-versa were also covered. Multi-section solid, helix spring and weldments were briefed. 
         The event was open to the members of the club.                 
         "
         date="&emsp; &emsp; January 21, 2021 (Phase 1), &emsp; &emsp;
         &emsp; &emsp; January 23, 2021 (Phase 2)"
         speakers="Eshwar Sai Srinivas"
         platform="MS Teams"
         type="Internal" />
    </div>
    )
}

function Event5_21(){
    return(
    <div>
        <EventTemplate 
         title="Adobe Photoshop KEP"
         img={adobe}
         desc="The KEP was conducted by Islavath Manohar. It was mainly based on the tools used for editing photos in Adobe Photoshop. The usage of layers and filters was explained. Certain shortcuts were discussed. Editing of images captured in camera was also covered.
         The event was open to the members of the club.                            
         "
         date="February 06, 2021"
         speakers="Islavath Manohar"
         platform="MS Teams"
         type="Internal" />
    </div>
    )
}

function Event6_21(){
    return(
    <div>
        <EventTemplate 
         title="COMSOL KEP"
         img={cosmol}
         desc="A 2 hour KEP on Comsol was conducted by Rajat Shukla, Convenor of SAE NITK. Basics of modelling and analysis were covered along with battery modelling, heat transfer and fluid flow analysis. The event was open to the members of SAE NITK and other students of NITK as well.                            
         "
         date="February 28, 2021"
         speakers="Rajat Shukla"
         platform="Google Meet"
         type="External" />
    </div>
    )
}


function Event7_21(){
    return(
    <div>
        <EventTemplate 
         title="Internship Webinar"
         img=" "
         desc="The webinar was conducted in two phases.
         The first phase mainly dealt with internship opportunities in the fields of research and management. Rajat Shukla spoke about the various types of fellowships, their application processes, the perks associated, etc., with a special focus on internships in the core domain. He also spoke about his own internship experience. 
         Rishu Kumar and Ankit Gupta dealt with the topic of cold mailing. They shared detailed information about the content to include, making the right choice of professors and projects, and the general dos and don’ts in cold mailing. 
         Sagar talked about the Indian Academy of Sciences (IAS) fellowship with a special focus on SOPs and LORs. 
         Shuvam Senapati, a former convenor of SAE NITK was also present to talk about CAT, careers and internships in management and also shared a glimpse of his approach towards projects, internships and college life in general.
         The second phase was mainly focused on industrial internships. Kaustubh Sonawane and Eshwar Sai Srinivas spoke about bagging internships in the core domain from campus. Nisarg Shah and Karan Jain provided insights about earning internship opportunities in the non-core domains. Finally, Pradeep Kumar Modi spoke about off campus core internships in companies such as IOCL, SAIL, GARC, etc.,.
         All the speakers were very happy to answer the doubts and questions of the other participants. The event was open to all the students of NITK.                                    
         "
         date=" &emsp;March 13, 2021 (Phase 1),&emsp; &emsp; 
         &emsp; &emsp;&emsp; March 14, 2021 (Phase 2)"
         speakers="Rajat Shukla, Rishu Kumar, Ankit Gupta, Sagar, Shuvam Senapati, Kaustubh Sonawane, Eshwar Sai Srinivas and Pradeep Kumar Modi"
         platform="MS Teams"
         type="External" />
    </div>
    )
}

function Event8_21(){
    return(
    <div>
        <EventTemplate 
         title="Interactive Session on GATE"
         img={gate_webinar}
         desc="The event was conducted to enable the undergraduate students to learn about the experiences of GATE toppers in terms of building deep conceptual understanding, preparation strategies, time management both during preparation and in the exam scenario, along with a structured approach to attempting mock tests. The importance of GATE in securing PSU/Government jobs, research oriented jobs in prestigious institutions such as DRDO, BARC, etc., and higher studies opportunities in IITs, IISc, and foreign universities such as NUS, NTU (Singapore) was also discussed. The speakers actively answered the constructive questions posed by the attendees.
         The event was hosted by Diksha Negi and Pradeep Singh Solanki. One of the speakers Abhisheka Shetty, who secured AIR 05 in GATE 2021 mechanical engineering was sponsored by “Exergic”. The other speaker was an alumnus of NITK, Bharath Desikan who secured AIR 17 in GATE 2021 chemical engineering.  
         The event witnessed participation from students of NIT Surathkal, MNNIT Allahabad, NIT Silchar and various other colleges.
                                            
         "
         date="May 09, 2021"
         speakers="Abhisheka Shetty and Bharath Desikan"
         platform="MS Teams"
         type="External"
         />
    </div>
    )
}

function Event9_21(){
    return(
    <div>
        <EventTemplate 
         title="Magazine Release"
         img={magazine}
         desc="The second volume of SAE NITK’s annual magazine Techbuzz was released this year. The theme of the magazine was Electric Vehicles. A total of 14 articles covering the historical, technical, financial and environmental aspects of EVs have been published. The articles have been authored by various members of the club belonging to different SIGs.
         “Exergic” is the official sponsor for Techbuzz Vol 2.
         (List of articles of the magazine available in appendix – page 33)                                              
         "
         date="May 31, 2021"
         speakers="-"
         platform="-"
         type="-"/>
    </div>
    )
}

function Event10_21(){
    return(
    <div>
        <EventTemplate 
         title="Website release"
         img={website}
         desc="The revamp of the club website started in October 2020. A new website has been developed with the aim of making it more interactive for the users and simplifying the various procedures involved in the club. It has been built using React JS, unlike the previous website which was built using WordPress. It is a responsive website that has various front end and back end features for presenting valuable club information such as projects, blogs, members, etc., to the outside world. 
         A lot of dedicated effort from the web development team has gone into the development of this new website. Presently, it is under final stages of development and testing. The release is expected soon.                                            
         "
         date="-"
         speakers="-"
         platform="-"
         type="-" />
    </div>
    )
}


export {
    EventTemplate,
    Event1_21,
    Event2_21,
    Event3_21,
    Event4_21,
    Event5_21,
    Event6_21,
    Event7_21,
    Event8_21,
    Event9_21,
    Event10_21,
  }

