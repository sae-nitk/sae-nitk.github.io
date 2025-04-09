import React, {useEffect} from 'react';
import './About.css';
import AOS from 'aos';


function About() {
        useEffect(() => {
          AOS.init({
            duration : 1500
          });
        }, []);
    return (
        <div className="about"  >
            <h1 data-aos="fade-in" data-aos-once="true">About Us</h1>
            <div className="about-text">
             <p className="about-l1" data-aos="fade-in" data-aos-once="true">With 3 club divisions catering to Electrical Vehicles and Autonomous Systems, SAE-NITK has been 
                 involved in all areas regarding Automobiles and Aerospace. We now want to spread our knowledge
                 to all learners regardless of their scientific temperament.
             </p>
             <div className="quote-1"  data-aos="fade-in" data-aos-once="true">
              It is an endearing moment for the SAE-NITK club which has been exploring the
              very bright side of the technologies of the future and exhibits them to the institute throughout these
              years. This step of launching a magazine for the very first time is going
              to be first time is going to be a first for this club and NITK Surathkal.
              The Institute appreciates the work of SAE-NITK and all its members and
              coordinators who have been working their to embellish the club.<br />
              I congratulate Dr. Poornesh  Kumar Koorata for entoring the club and 
              achieving these milestones and will be continuing his incredible work
              for this club. I wish the club every success in all its undertakings.
              <div className="quote1-i"  data-aos="fade-in" data-aos-once="true">
                  Prof. Umamaheshwar Rao<br />
                  Director <br />
                  NITK Surathkal
                  <br/><br/>
                  January 2020
              </div>
             </div>
             <div className="quote-2"  data-aos="fade-in" data-aos-once="true">I am very much pleased to say that the SAE-NITK club is one of the
             most active clubs and has been doing an incredible work all these years. For the
             first tie the club is bringing out a magazine which aims at showcasing the
             developments that have been taking place in the field of Automotive sector and
             I am sure it will help lots of people to get to know about the activities of SAE and
             also about technological advances in the field.<br />
             The Members, Coordinators and Faculty Advisors of SAE-NITK have been doing a great
             job. The current Faculty Advisor Dr.Poornesh Kumar Koorata is mentoring the club 
             very effectively and I firmly believe that under his mentorship the SAE-NITK club will
             reach several milestones in the years to come.I wish them all the success.
              <div className="quote2-i"  data-aos="fade-in" data-aos-once="true">
                  Prof. Jagannatha Nayak<br />
                  Former Dean Students' Welfare <br />
                  NITK Surathkal
                  <br/><br/>
                  January 2020
              </div>
             </div>            
            </div>
        </div>
    )
}

export default About
