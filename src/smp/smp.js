import React, {useEffect,useState} from "react";
import './smp.css';
import DescriptionIcon from '@material-ui/icons/Description';
import YouTubeIcon from '@material-ui/icons/YouTube';
import AOS from 'aos';
import smps from './smps.json'
import img1 from './../images/smps/computer_vision.jpeg';


const Smp_info = ({image_link,description,title,propose_doc, reg_link}) => {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

  return (
      <div className="info3" data-aos="fade-up" data-aos-once="true">
          <img className="img_info3" src={image_link} data-aos="fade-in" data-aos-once="true" alt=""/> 
          <div className="desc_info" data-aos="fade-in" data-aos-once="true">
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="info-button" data-aos="fade-in" data-aos-once="true">
             <button className="info-btn" onClick={()=> window.open(propose_doc, "_blank")}><DescriptionIcon fontSize="large"/> Proposal Document</button>
             <button className="info-btn" onClick={()=> window.open(reg_link, "_blank")}><DescriptionIcon fontSize="large"/>Registration Form</button>
            </div>
          </div>
      </div>
  )
}

function Smp() {

    const [data, setData] = useState(smps);

    return (
        <div className="project">
            <div className="head_p">
                <h1 className="pp1">Summer Mentorship Program (SMP)</h1>
                <h1 className="pp2" >2022</h1>
            </div>

            {data.map((item) => (
                <Smp_info {...item} key={item.id}/>
            ))}
            
         </div>
         
    )
}

export default Smp;