import React, {useEffect,  useState} from 'react';
import { Link } from "react-router-dom";
import './Vision.css';
import AOS from 'aos';


export default function Vision() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);

    return (
        <div className="vision_news">
          <div className="scroll">
          <div><h2>News Feed</h2></div>
           <marquee className="scroll-text" behavior="scroll" direction="left" onmouseover="this.stop();" onmouseout="this.start();">
            <span><Link to="/project-expo-2020-2021" style={{ textDecoration: 'none' }}><p>&#10031; Project Expo 2020-2021 &nbsp;</p></Link></span>
            <Link to="/events/magazine-release" style={{ textDecoration: 'none' }}><p>  &nbsp; &#10031; Magazine Release &nbsp;</p></Link>
           </marquee>
          </div>
          
         <div className="vision">
            <h1 className="vision_head" data-aos="fade-in">Our Vision</h1>
            <div className="vision_text" data-aos="fade-in">
             <p>Working with strong commitment for technology-
                based solutions and driving the society with new
                ideas and innovations</p>
            </div>
        </div>
        {/*<div className="news">
          <h1 className="news_head" data-aos="fade-in">News Feed</h1>
          <div className="news-text">
            <h4 data-aos="fade-right">&#10031; Project Expo 2020 - 2021</h4>
            <h4 data-aos="fade-right">&#10031; Magazine Release</h4>
    </div>*/}
          </div>

    )
}

