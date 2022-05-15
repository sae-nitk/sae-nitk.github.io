import React, {useEffect,useRef} from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Sidebar from './Sidebar';
import AOS from 'aos';

import * as FaIcons from 'react-icons/fa';
import Video from "../images/video-edited.mp4";

const scrollToTop = () => {
    window.scrollTo({
      top: 0
    });
  };

export default function Header() {
    useEffect(() => {
        AOS.init({
          duration : 2000
        });
      }, []);

      const [scrolled,setScrolled]=React.useState(false);
      const handleScroll=() => {
      const offset=window.scrollY;
      if(offset > 79.5 ){ setScrolled(true); }
      else{ setScrolled(false); }
  }

     useEffect(() => {
     window.addEventListener('scroll',handleScroll)
     })
     let navbarClasses=['h-navbar'];
     if(scrolled){
       navbarClasses.push('scrolled');
      }

    return (
        <div className="header">
            <div className="header-top">
              <Link to="/">
                <video className="header-video"
                   autostart 
                   autoPlay 
                   muted
                   src={Video} 
                   type="video/mp4" 
                   width="200px"
                   height="auto"/>
              </Link>
                <div className="hp_icons" data-aos="fade-in">
                  <div className="icon_hp_outer">
                    <FaIcons.FaFacebookF className="icon_hp" onClick={()=> window.open("https://www.facebook.com/saenitk/", "_blank")}/>
                  </div>
                  <div className="icon_hp_outer">
                    <FaIcons.FaYoutube className="icon_hp"  onClick={()=> window.open("https://www.youtube.com/channel/UCPiCkG64oF7KKec7tEhquyw", "_blank")}/>
                  </div>
                  <div className="icon_hp_outer">
                    <FaIcons.FaLinkedinIn className="icon_hp"  onClick={()=> window.open("https://www.linkedin.com/company/sae-nitk-chapter/mycompany/", "_blank")}/>
                  </div>
                  <div className="icon_hp_outer">
                    <FaIcons.FaInstagram className="icon_hp" onClick={()=> window.open("https://www.instagram.com/sae_nitk/?hl=en", "_blank")}/>
                  </div>
                  <div className="icon_hp_outer">
                    <FaIcons.FaWordpressSimple className="icon_hp" onClick={()=> window.open("https://saenitk.wordpress.com/", "_blank")}/>
                  </div>
                 </div>
            </div>
            <ul className={navbarClasses.join(" ")}>              
              <li className="li7">
                <Link className="page7" to="/events" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                  <h3 className="header-text">EVENTS</h3>
                </Link>
              </li>

              <li className="li6">
                <Link to="#" className="page6" style={{ textDecoration: 'none' }}>
                   <h3 className="header-text-dd">MAGAZINE ▼</h3></Link>
                   <div class="magazine-dd">
                   <Link className="link-i" to="/magazine-2021-2022" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                       <p className="link-item">2021-2022</p></Link>
                   <Link className="link-i" to="/magazine-2019-2020" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                       <p className="link-item">2019-2020</p>
                  </Link>
                   </div>
               </li>

              <li className="li5">
                <Link to="#" className="page5" style={{ textDecoration: 'none' }}>
                   <h3 className="header-text-dd">PROJECTS ▼</h3></Link>
                   <div class="project-dd">
                   <Link className="link-i" to="/project-expo-2021-2022" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                       <p className="link-item">2021-2022</p></Link>
                   <Link className="link-i" to="/project-expo-2020-2021" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                       <p className="link-item">2020-2021</p></Link>
                    <Link className="link-i" to="/project-expo-2019-2020" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                      <p className="link-item">2019-2020</p></Link>
                   </div>
               </li>

              <li className="li4">
                <Link to ="#" className="page4" style={{ textDecoration: 'none' }}>
                  <h3 className="header-text-dd">MEMBERS ▼</h3></Link>
                  <div class="club-dd">
                    <Link className="link-i" to="/club" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                      <p className="link-item">CURRENT TEAM</p></Link>
                    <Link className="link-i" to="/alumni" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                      <p className="link-item">ALUMNI</p></Link>
                  </div>
              </li>
              <li className="li3">
                <Link className="page3" to="/blog" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                 <h3 className="header-text">BLOGS</h3>
                </Link></li>
              <li className="li2"><Link to="/about-us" className="page2" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                 <h3 className="header-text" >ABOUT US</h3>
                </Link></li>
              <li className="li1"><Link to="/" className="page1" style={{ textDecoration: 'none' }} onClick={scrollToTop}>
                 <h3 className="header-text" >HOME</h3>
                </Link></li>
            </ul> 
            <Sidebar className="sidebar_nav" />
            <div className="back-to-top" onClick={scrollToTop}><p> <FaIcons.FaArrowUp /></p></div>
        </div> 
    )
    }