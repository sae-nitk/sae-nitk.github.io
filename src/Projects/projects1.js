import React, {useEffect,useState} from "react";
import './Project.css';
import imgp11 from '../images/projects/project1-1.jpeg';
import imgp12 from '../images/projects/project1-2.jpeg';
import imgp13 from '../images/projects/project1-3.jpeg';
import imgp14 from '../images/projects/project1-4.jpeg';
import AOS from 'aos';
import axios from "axios";
import { NavItem } from "react-bootstrap";

const Project_info1=({image_link,description,title})=>{
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
            </div>
        </div>
    )
}




export default function Projects1() {
    //const [project, setproject] = useState([]);
    //axios.get("https://saenitk.herokuapp.com/projects/").then((res)=>{ setproject(res.data)}).catch((err)=>console.log(err));
    return (
        <div className="project">
            <div className="head_p">
                <h1 className="pp1">Project - Expo</h1>
                <h1 className="pp2" >2019-20</h1>
            </div>
            <div className="p_info">
            {
                // project.map((item)=>(item.academic_year==="19-20" && <Project_info1 {...item} key={item.id}/>))
            }
            <Project_info1 
                image_link= {imgp11}
                title="ANN Power Optimization"
                description="Project on the concepts of EVs, Simulation and Artificial Intelligence called “ANN Power Optimization”. The project dealt with modeling and simulating various EV Models and optimizing them with the basics of Machine learning and Data sciences"
            />
            <Project_info1
                image_link = {imgp12}
                title="Li-ion Battery pack thermal model"
                description="To model and analyze the temperature distribution of a 12S12P 18650 Li-ion
                    cell in a square array with 1mm spacing using COMSOL along with the
                    cooling analysis and a thermal model."
            />
            <Project_info1 
                image_link={imgp13}
                title="Disc Brake – Design and Analysis"
                description="Project on Disc Brake – Design and Analysis where modeling on SolidWorks together with thermomechanical analysis on Ansys with static structural and steady-state thermal modules was done. The gradients of stress, deformation, temperature, and rate of heat transfer were generated accordingly."
            />
            <Project_info1
               image_link={imgp14}
               title="SAE NITK Media Works"
               description="SAE-NITK Media has been actively involved in the clubs creative face and planned and executed all our schemes,mainly SAE-NITK Tech Buzz Annual Magazine SAE Tech Chronicle - A Weekly Blog Series."
            />
        </div>
    </div>
    )
}
