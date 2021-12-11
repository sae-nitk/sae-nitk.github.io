import React, {useEffect,useState} from "react";
import './Project.css';
import axios from "axios";
import DescriptionIcon from '@material-ui/icons/Description';
import YouTubeIcon from '@material-ui/icons/YouTube';
import imgp21 from '../images/projects/project2-1.jpeg';
import imgp22 from '../images/projects/project2-2.jpeg';
import imgp23 from '../images/projects/project2-3.jpeg';
import imgp24 from '../images/projects/project2-4.jpeg';
import imgp25 from '../images/projects/project2-5.jpeg';
import imgp26 from '../images/projects/project2-6.jpeg';
import AOS from 'aos';


const Project_info2 = ({image_link,description,title,report_link,video_link}) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
      <div className="info" data-aos="fade-up" data-aos-once="true">
          <img className="img_info" src={image_link} data-aos="fade-in" data-aos-once="true" alt=""/> 
          <div className="desc_info" data-aos="fade-in" data-aos-once="true">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="info-button" data-aos="fade-in" data-aos-once="true">
             <button className="info-btn" onClick={()=> window.open(report_link, "_blank")}><DescriptionIcon fontSize="large"/> Report</button>
             <button className="info-btn" onClick={()=> window.open(video_link, "_blank")}><YouTubeIcon fontSize="large"/> Video</button>
            </div>
          </div>
      </div>
  )
}

function Projects2() {
    const [project, setproject] = useState([]);
    axios.get("https://saenitk.herokuapp.com/projects/").then((res)=>{ setproject(res.data)}).catch((err)=>console.log(err));
    return (
        <div className="project">
            <div className="head_p">
                <h1 className="pp1">Project - Expo</h1>
                <h1 className="pp2" >2020-21</h1>
            </div>
            <div className="p_info">
            {
                 project.map((item)=>(item.academic_year==="20-21" && <Project_info2 {...item} key={item.id}/>))
            }
            {/* <Project_info2 
              image={imgp21}
              name="CFD Analysis of Nose Profiles"
              desc="This project deals with the comparison of various nose profiles and their aerodynamic
              characteristics. The nose profiles are designed using SOLIDWORKS and analyzed on
              ANSYS."
              report="https://drive.google.com/file/d/1hAgNid9WfxW-dPHK46RdrGAOplxlX7UP/view?usp=sharing"
              ytlink="https://www.youtube.com/watch?v=H_aWN_9bUgM&t=3s"
            />
            <Project_info2
              image={imgp22}
              name="Energy Storing Body Panels"
              desc="To study how the power is stored in the body panels of vehicles. Learn about
              that material used, analysis of stresses on the panel, and Simulating the voltage
              distribution across the Supercapacitor."
              report="https://drive.google.com/file/d/1bYeplqJ0lUedCRprdPPOxzMVte5mymrg/view?usp=sharing"
              ytlink="https://www.youtube.com/watch?v=KQYt8qBKbM8"
            />
            <Project_info2 
              image={imgp23}
              name="Simulink Model Of Antilock Braking System"
              desc="As the name signifies, the anti-lock braking system is a safety system in cars 
                    and other automobiles that keeps their wheels from locking up and helps their 
                    drivers to maintain steering control. Also referred to as anti-skid braking 
                    system sometimes, it enables the wheels of a vehicle to maintain tractive contact
                    with the ground so that they don’t  go into an uncontrolled skid."
              report="https://drive.google.com/file/d/1GttUuyFNS3kL_Yjkd2KGYPaYH8MPrIXd/view?usp=sharing"
              ytlink="https://www.youtube.com/watch?v=mK-BilUa32o"
            />
            <Project_info2
              image={imgp24}
              name="Rear Wheel Steering"
              desc="The “rear wheel steering” project was taken up with the main motive of decreasing
              the turning radius of cars to adapt to the dynamic demands of congested cities such as
              Mumbai, Bangalore, etc."
              report="https://drive.google.com/file/d/1HUY-3JAAfKG4kTTe9I4FPJecWf9LXogd/view?usp=sharing"
              ytlink="https://www.youtube.com/watch?v=s3OUx93zXgU"
            />
            <Project_info2
             image={imgp25}
             name="Design, Analysis & Application of a PID Controller"
             desc="This project deals with the designing and simulation of a basic PID controller which controls
             the amount of current flowing in order to control the power given to the wheels of an
             agricultural robot in order to steer it."
             report="https://drive.google.com/file/d/1DNh5MUkc9JTgEPva-EBuLPAn5-Kar2Zd/view?usp=sharing"
             ytlink="https://www.youtube.com/watch?v=M8pfQzvVpmU&t=29s"
            />
            <Project_info2
             image={imgp26}
             name="Aerodynamic Analysis of Helicopter Seeds"
             desc="Our goal is to build a 3D model to analyse its
             structure and evaluate its aerodynamic properties. A solid model matching the structure of a
             single maple seed is created in AutoCAD software. The solid model was imported in ANSYS
             and the flow is analysed using FLUENT module under various conditions. Results are then
             compared with theoretical values."
             report="https://docs.google.com/document/d/1U4CFkH1gjtDAui6OyZbU0-EuMNIttdceB9pm5WTMY1A/edit"
             ytlink="https://www.youtube.com/watch?v=K5iyIFwuQbE&list=PLIaJ9nrOzsHo966HzflQiHt8WLcMDGIuC&index=6"
            /> */}
         </div>
         </div>
    )
}

export default Projects2