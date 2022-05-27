import React, {useEffect,useState} from "react";
import './smp.css';
import DescriptionIcon from '@material-ui/icons/Description';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AOS from 'aos';
import img_comp_vis from '../images/smps/computer_vision.png';
import rm_cv from '../images/smps/roadmap_cv.png';
import img_aero_dyn from './../images/smps/aero_dynamics.jpg';
import rm_aero_dyn from '../images/smps/roadmap_aero.png';
import img_veh_dyn from '../images/smps/vehicle_dynamics.png';
import rm_veh_dyn from '../images/smps/roadmap_veh.png';
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
                <h1 className="pp2" >2022</h1>
            </div>
            <div className="slider">
            <AwesomeSlider >

              <div>
                <Smp_info 
                  image_link = {rm_cv}
                  description="Computer vision is a scientific field that deals with how computers
                  can gain high-level understanding from digital images or videos. It seeks to
                  understand and automate tasks that the human visual system can do. We will see
                  the application of Computer vision in the field of automobiles."
                  title = "Computer Vision"
                  reg_link="https://docs.google.com/forms/d/e/1FAIpQLSfhksxra28Vyicwf6Jn8jYHNM4xPnao70KfjseRza8ma530vQ/viewform"
                  />
                
                </div>
              <div>
                <Smp_info 
                  image_link = {rm_aero_dyn}
                  description="Understand the basics of aerodynamics and Computational Fluid Dynamics (CFD) by analyzing the aerodynamic characteristics of the rear wing of an F1 car. This will be verified using simulations done on the rear wing model with CFD software such as Ansys Fluent."
                  title = "F1 Aerodynamics"
                  reg_link="https://docs.google.com/forms/d/e/1FAIpQLSfhksxra28Vyicwf6Jn8jYHNM4xPnao70KfjseRza8ma530vQ/viewform"
                />
              </div>
              <div>
                <Smp_info 
                  image_link = {rm_veh_dyn}
                  description="Understand the basics of vehicle dynamics and perform real-time multibody dynamics simulations using ADAMS software."
                  title = "Vehicle Dynamics"
                  reg_link="https://docs.google.com/forms/d/e/1FAIpQLSfhksxra28Vyicwf6Jn8jYHNM4xPnao70KfjseRza8ma530vQ/viewform"
                />
              </div>

            </AwesomeSlider>
            </div>
            

            
         </div>
         
    )
}

export default Smp;