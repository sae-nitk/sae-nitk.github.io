import React, {useEffect,useState} from "react";
import './smp.css';
// import DescriptionIcon from '@material-ui/icons/Description';
// import YouTubeIcon from '@material-ui/icons/YouTube';
import AOS from 'aos';
// import img_comp_vis from '../images/smps/computer_vision.png';
import rm_cv from '../images/smps/Computer_vision_sae.jpg';
// import img_aero_dyn from './../images/smps/aero_dynamics.jpg';
import rm_an_fl from '../images/smps/Ansys fluent sae.jpeg';
// import img_veh_dyn from '../images/smps/vehicle_dynamics.png';
import rm_mach_lear from '../images/smps/machine learning sae.jpg';
import rm_web_dev from '../images/smps/web development sae.jpeg';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';


const Smp_info = ({image_link,description,title, reg_link}) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
      <div className="info3">
          <div className="desc_info" data-aos="fade-in" data-aos-once="true">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="info-button" >
             <button className="info-btn" onClick={()=> window.open(reg_link, "_blank")}>REGISTER!</button>
            </div>
          </div>
          <img className="img_info3" src={image_link} data-aos="fade-in" data-aos-once="true" alt=""/> 
      </div>
  )
}

function Smp() {

    return (
        <div className="project">
            <div className="head_p">
                <h1 className="pp1">Summer Mentorship Program</h1>
                <h1 className="pp2" >2023</h1>
            </div>
            <div className="slider">
            <AwesomeSlider >

              <div>
                <Smp_info 
                  image_link = {rm_cv}
                  description="is it possible to drive a car without a driver? The answer is yes. Lets find out more about these and concepts behind."
                  title = "COMPUTER VISION"
                  reg_link="https://docs.google.com/forms/d/e/1FAIpQLSfhksxra28Vyicwf6Jn8jYHNM4xPnao70KfjseRza8ma530vQ/viewform"
                  />
                
                </div>
              <div>
                <Smp_info 
                  image_link = {rm_an_fl}
                  description="Diving into the world of simulation environment using Ansys software. Join us to learn more."
                  title = "ANSYS FLUENT"
                  reg_link="https://docs.google.com/forms/d/e/1FAIpQLSfhksxra28Vyicwf6Jn8jYHNM4xPnao70KfjseRza8ma530vQ/viewform"
                />
              </div>
              <div>
                <Smp_info 
                  image_link = {rm_web_dev}
                  description="Embark on a journey into the world of web development, where creativity meets innovation."
                  title = "WEB DEVELOPMENT"
                  reg_link="https://docs.google.com/forms/d/e/1FAIpQLSfhksxra28Vyicwf6Jn8jYHNM4xPnao70KfjseRza8ma530vQ/viewform"
                />
              </div>
              <div>
                <Smp_info 
                  image_link = {rm_mach_lear}
                  description="Embark on an exciting exploration of machine learning. where algorithms unlock the potential of data and enable intelligent decision-making."
                  title = "MACHINE LEARNING"
                  reg_link="https://docs.google.com/forms/d/e/1FAIpQLSfhksxra28Vyicwf6Jn8jYHNM4xPnao70KfjseRza8ma530vQ/viewform"
                />
              </div>

            </AwesomeSlider>
            </div>
            

            
         </div>
         
    )
}

export default Smp;