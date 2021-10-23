import React, { useEffect } from "react";
import "./Core.css";
import * as Hi from "react-icons/hi";
import * as Fa from "react-icons/fa";

import img1 from "../images/club/K-Eshwar.jpg";
import img2 from "../images/club/Ankit-Gupta.jpg";
import img3 from "../images/club/Rishu.jpeg";
import img4 from "../images/club/Diwakar-S-G.jpg";
import img5 from "../images/club/Kaustubh-S.jpg";
import AOS from "aos";

const MemberImage = ({ src, name, role, mail, lin }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="member">
      <div className="icon" data-aos="fade-in" data-aos-once="true">
        <img src={src} />
      </div>
      <div className="name" data-aos="fade-in" data-aos-once="true">
        <h3>{name}</h3>
      </div>
      <div className="role" data-aos="fade-in" data-aos-once="true">
        <h3>{role}</h3>
      </div>
      <div className="mem_icons" data-aos="fade-in" data-aos-once="true">
        <div className="mem_icon_outer">
          <a href={"mailto:" + mail}>
            <Hi.HiMail className="mem_mail" />
          </a>
        </div>
        <div className="mem_icon_outer">
          <Fa.FaLinkedinIn
            className="mem_lin"
            onClick={() => window.open(lin, "_blank")}
          />
        </div>
      </div>
    </div>
  );
};
function Core() {
  return (
    <div className="core">
      <div className="heading">
        <h3 className="vision_head" data-aos="fade-in">
          Message
        </h3>
      </div>
      <div className="core_members">
        <h3>---------------------------------</h3>
      </div>
    </div>
  );
}

export default Core;
