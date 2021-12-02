import React from 'react';
import {Link} from 'react-router-dom';
import './Contact.css';
import * as Fa from 'react-icons/fa';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

  export default function Contact() {
    return (
      <footer>
        <div className="contact">
        
          <div className="contact_">
          <div className="column1">
              <h2>Contact</h2>
              <div className="c1_info">
                <ul className="list-unstyled">
                  <li> SAE NITK </li>
                  {/*<li><CallIcon /> +91 8618891003</li>*/}
                  <li><EmailIcon /> saeindia@nitk.edu.in</li>
                  <li><LocationOnIcon /> National Institute of
                  Technology Karnataka,
                  Surathkal</li>
                </ul>
              </div>
            </div>
            <div className="column2">
               <h2>More</h2>
              <div className="c2_info">
                <ul className="list-unstyled">
                  <li><Link  style={{ textDecoration: 'none' }} to="/about-us" onClick={scrollToTop}>
                    <h5 className="contact_links">About</h5></Link></li>
                  <li><Link  style={{ textDecoration: 'none' }} to="/blog" onClick={scrollToTop}>
                    <h5 className="contact_links">Blogs</h5></Link></li>
                  <li><Link  style={{ textDecoration: 'none' }} to="/project-expo-2020-2021" onClick={scrollToTop}>
                    <h5 className="contact_links">Project-Expo:2020-2021</h5></Link></li>
                  <li><Link  style={{ textDecoration: 'none' }} to="/club" onClick={scrollToTop}>
                    <h5 className="contact_links">Our Team</h5></Link></li>
                  <li><Link  style={{ textDecoration: 'none' }} to="/alumni" onClick={scrollToTop}>
                    <h5 className="contact_links">Alumni</h5></Link></li>
                  <li><Link  style={{ textDecoration: 'none' }} to="/events" onClick={scrollToTop}>
                    <h5 className="contact_links">Events</h5></Link></li>
                </ul>
              </div>
            </div>
            <div className="column3">
             <h2>Follow Us</h2>
             <div className="c3_icon">
               <div className="icon_contact_outer">
                <Fa.FaFacebookF  className="icon_contact" onClick={()=> window.open("https://www.facebook.com/saenitk/", "_blank")} />
               </div>  
               <div className="icon_contact_outer">
                <Fa.FaInstagram className="icon_contact" onClick={()=> window.open("https://www.instagram.com/sae_nitk/?hl=en", "_blank")} />
               </div>
               <div className="icon_contact_outer">
                <Fa.FaYoutube className="icon_contact" onClick={()=> window.open("https://www.youtube.com/channel/UCPiCkG64oF7KKec7tEhquyw", "_blank")}/>
               </div>
               <div className="icon_contact_outer">
                 <Fa.FaLinkedinIn className="icon_contact"  onClick={()=> window.open("https://www.linkedin.com/company/saenitk/?originalSubdomain=in", "_blank")}/>
               </div>   
               <div className="icon_contact_outer">
                 <Fa.FaWordpressSimple className="icon_contact"  onClick={()=> window.open("https://saenitk.wordpress.com/", "_blank")}/>
               </div> 
             </div>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; Website designed and developed by SAE⚙️NITK  Web-Dev </p>
          </div>
       </div>
    </footer>
    )
}
