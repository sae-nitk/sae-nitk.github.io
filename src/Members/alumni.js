import React, { useEffect } from "react";
import "./alumni.css";

import * as AiIcons from "react-icons/ai";
import alumni_img1 from "../images/alumni/alumni_1.jpeg";
import alumni_img2 from "../images/alumni/alumni_2.jpg";
import alumni_img3 from "../images/alumni/alumni_3.jpg";
import alumni_img4 from "../images/alumni/alumni_4.jpg";
import alumni_img5 from "../images/alumni/alumni_5.jpeg";
import alumni_img6 from "../images/alumni/alumni_6_.jpeg";
import alumni_img7 from "../images/alumni/alumni_7.jpg";
import alumni_img8 from "../images/alumni/alumni_8.jpg";
import alumni_img9 from "../1549013453581.jpg";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import AOS from "aos";

const Alumni_mem = ({ img, name, year, role, email, message, lin }) => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="alumni" data-aos="fade-in" data-aos-once="true">
      <div className="alumni-image">
        <img src={img} width="200px" height="auto" alt="" />
      </div>
      <div className="alumni-info">
        <p className="alumni-name">{name}</p>
        <p className="alumni-role">{role}</p>
        <p className="alumni-year">Batch of {year}</p>
        <p className="alumni-message">{message}</p>
        <div className="alumni-contact">
          <AiIcons.AiFillLinkedin
            className="alumni-in"
            onClick={() => window.open(lin, "_blank")}
          />
          <a
            className="alumni-contact-btn"
            href={"mailto:" + email}
            style={{ textDecoration: "none" }}
          >
            Contact <MailOutlineIcon fontSize="large" />
          </a>
        </div>
      </div>
    </div>
  );
};

function Alumni() {
  return (
    <div className="alumni-main">
      <div className="alumni-heading" data-aos="fade-in" data-aos-once="true">
        <p>Alumni</p>
      </div>
      <Alumni_mem
        img={alumni_img1}
        name="Rahul Madhogarhia"
        role="Master of Engineering in Robotics at  University of Maryland"
        year="2020"
        email="madhogarhiarahul@gmail.com"
        message="SAE-NITK has become one of the most happening and resourceful
              clubs in the past two years for automotive technologies and knowledge
              sharing. It spans across the different domains in automobile engineering,
              including electric vehicles, hybrid systems, and self-driving cars.
              The team has been growing every year with more passionate and
              dedicated members from all disciplines of engineering, making it a
              very engaging and fun organization to learn together. I had the
              privilege of leading this club with a team of wonderful people
              during my final year, which gave me an experience worth remembering.
              “Driven through passion” - that's what SAE and its members believe in."
        lin="https://www.linkedin.com/in/madhogarhiarahul/"
      />
      <Alumni_mem
        img={alumni_img2}
        name="Pawan Pawar"
        role="R&D Engineer, Advanced Defence Systems Navy(ADSN) at BEL"
        year="2020"
        email="pavanpawar1420@gmail.com"
        message="Being part of SAE NITK was second best that ever happened to me. Learnt lots of
              things from my peers and juniors. Now that juniors have taken this club to another level
              by doing plethora of work and projects"
        lin="https://www.linkedin.com/in/ppawar07"
      />
      <Alumni_mem
        img={alumni_img3}
        name="Shaurya Seth"
        role="Master's Student, Materials Engineering Dept, University of California , Los Angeles"
        year="2020"
        email="shaurya.seth480@gmail.com"
        message="Hi guys! I would like to share some things which I was fortunate enough to come
              across during my college life. Although I joined SAE as the standing President for the even
               semester of 2019-20 academic year, I learned a lot because of the challenges people in the
                core faced or rather were facing. Every situation or circumstance in your life teaches you
                 something. Eventually, this cognizance is highly regarded as experience which enables one
                to become astute and incisive. I would just say, people are opportune to face problems
                and issues during their college life and come up with practical solutions, because
                that is life, and no book can teach that. So, be vigilant and grab these opportunities
                by taking up challenges, through being a part of a club, participating in competitions,
                organizing events etc. Lastly, enjoy this segment of your life as much as you can, so
                that one day, you can reminisce those 4 yrs holding a beer in your hand on a beach in
                California. xD P.S. We did, and now it is your time to."
        lin="https://www.linkedin.com/in/shauryaseth1412/"
      />
      <Alumni_mem
        img={alumni_img4}
        name="Rajat Shukla"
        role="Graduate Engineer Trainee at Dr.Reddy's laboratories"
        year="2021"
        email="rajatme58@gmail.com"
        message="I have witnessed SAE NITK grow by leaps and bounds and am glad to be a part of
              this journey. The club has made me grow professionally as well as technically. The members
              are really passionate for their work and that's what makes the club one of the most active
              clubs in the college."
        lin="https://www.linkedin.com/in/rajat-shukla07/"
      />
      <Alumni_mem
        img={alumni_img5}
        name="Pradeep Kumar Modi"
        role="Executive engineer at Gas Authority of India Limited (GAIL) "
        year="2021"
        email="pradeepkumarmodi1998@gmail.com"
        message="SAE-NITK had always been very close to me. Working here is more like a family than
              just a club, it's full of enthusiastic people's where you not only learn about all the coolest
              stuffs related to automobiles rather than discover more.
              Being the Technical Head of the Club it was always fun working with the team with their
              innovative ideas and reasearch towards the projects. It's a place where the Events, Projects,
              KEP's, Seminars, Regular and fun meets and interaction with the faculty advisor, seniors and
              juniors will improve you in every aspects that is required."
        lin="https://www.linkedin.com/in/pradeep-kumar-modi-74ab25190"
      />
      <Alumni_mem
        img={alumni_img6}
        name="Devendra Gharat"
        role="Graduate Engineer Trainee at Aequs Pvt. Ltd."
        year="2021"
        email="devendra88094@gmail.com"
        message="SAE was one of the important part in my NITKian life. Working under hardworking and
              self motivated seniors along with  enthusiastic juniors it never felt like work but enjoyment.
              Everything starting from freshers, KEP's  to project evaluation, it was a really nice journey.
              Club can provide you the best platform to interact with same minded people effectively and
              SAE was that for me.
              No doubt that we left club in responsible hands and I am sure they will take club to whole new
              level. All The Best!"
        lin="https://www.linkedin.com/in/devendra-gharat"
      />
      <Alumni_mem
        img={alumni_img7}
        name="Shripad Kelapure"
        role="Graduate Engineer Trainee Dr.Reddy's laboratories"
        year="2021"
        email="shripadkelapure@gmail.com"
        message="Happy that I had a good opportunity in working with motivated seniors and juniors. I
              hope that the future batches in NITK continue with good projects and work in taking the club
              to new heights."
        lin="https://www.linkedin.com/in/shripad-k"
      />
      <Alumni_mem
        img={alumni_img8}
        name="Ninad Lamture"
        role="Persuing M.Tech at IIT Madras"
        year="2021"
        email="ninadlamture27@gmail.com"
        message="Club is doing great work in terms of project, seminars, KEP and more. The current
              member especially core team are really more motivated to make a statement and working hard
              to club to greater heights. I came across really good senior and also enthusiastic juniors."
        lin="https://www.linkedin.com/in/ninadlamture/"
      />
      <Alumni_mem
        img={alumni_img9}
        name="Shuvam Senapati"
        role="---"
        year="2019"
        email="---"
        message="-----"
        lin="https://www.linkedin.com/in/shuvam-senapati-4b023a16b/"
      />
    </div>
  );
}

export default Alumni;
