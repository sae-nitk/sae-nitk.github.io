import React,{useEffect} from 'react';
import './Club.css';

import * as AiIcons from 'react-icons/ai';
import * as Hi from 'react-icons/hi';

import eshwar from '../images/club/K-Eshwar.jpg'; import ankitgupta from '../images/club/Ankit-Gupta.jpg';
import rishu from '../images/club/Rishu.jpeg'; import kaustubh from '../images/club/Kaustubh-S.jpg';
import diwakar from '../images/club/Diwakar-S-G.jpg'; import vishlavathtarun from '../images/club/Vishlavath-T.jpg';
import sakshibagde from '../images/club/Sakshi.jpeg'; import sagar from '../images/club/Sagar.jpg';
import nrahul from '../images/club/N-Rahul.jpg'; import islavathmanohar from '../images/club/Islavath-M.jpg';
import gauthamkrishna from '../images/club/GauthamKrishna.jpg';import krishnabv from '../images/club/krishnareddy.jpeg';
import vedika from '../images/club/Vedika.jpg'; import manojgs from '../images/club/Manoj-G-S.jpg';
import mihirmali from '../images/club/Mihir.jpg'; import akshaykumar from '../images/club/Akshay-Kumar.jpeg';
import prasanthi from '../images/club/Prasanthi.jpeg'; import shrivatsa from '../images/club/shrivatsa.jpg';
import likhitaj from '../images/club/Likhita.jpg'; import lucky from '../images/club/Lucky-P-R.jpg';
import guhanm from '../images/club/Guhan.jpg'; import aashish from '../images/club/Aashish.jpeg';
import shunups from '../images/club/Shunu.jpg'; import diksha from '../images/club/Diksha.jpeg';
import sumitsagar from '../images/club/Sumit.jpg'; import pradeepsolanki from '../images/club/Pradeep.jpg';
import shashiprakash from '../images/club/Shashiprakash.jpg'; import kushalgowda from '../images/club/Kushal.jpg';
import meet from '../images/club/Meet.jpg'; import saransh from '../images/club/Saransh.jpg';
import wilson from '../images/club/Wilson.jpg'; import samarth from '../images/club/Samarth.jpg';
import yashkundale from '../images/club/Yash_Kundale.jpeg'; import raghavganesh from '../images/club/Raghav_Ganesh.jpg'; 
import saisrujan from '../images/club/Sai_Srujan.jpg';  import divyamverma from '../images/club/Divyam.jpg';  
import anannyarao from '../images/club/AnannyaRao.jpg'; import adithyams from '../images/club/AdithyaMS.jpg';
import ajmeera from '../images/club/Ajmeera.JPG'; import harshalbhoyar from '../images/club/Harshal_Bhoyar.jpg'; 
import khushirathod from '../images/club/KhushiRathod.jpg';  import jishnudas from '../images/club/JishnuDas.jpg';  
import nischayi from '../images/club/Nischayi_Vabilisetti.jpg';  import samyakjain from '../images/club/Samyak_Jain.jpg';
import shannoncarlo from '../images/club/Shannon_Britney.jpeg';  import shivavasthan from '../images/club/ShivavasthanD.jpg'; 
import sumanthhegde from '../images/club/Sumanth.png'; import dilshad from '../images/club/Shaik_Dilshad.jpg'
import nitesh from '../images/club/Nitesh_Bhat.jpeg'; import jatinkaushal from '../images/club/Jatin_Kaushal.JPEG';
import yogeshp from '../images/club/Yogesh_P.jpg'; import ashrithdr from '../images/club/AshrithDR.jpeg';
import dayanandabn from '../images/club/Dayananda.png'; import navya from '../images/club/Navya.jpeg';
import Mayur from '../images/club/Mayur.jpg'; import Puja_Chowhan from '../images/club/Puja_Chowhan.jpeg'; 
import Piyush_Dubey from '../images/club/Piyush_Dubey.jpg';
import AOS from 'aos';


const ClubMember=({src,name,role,mail,lin}) =>{
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  return (
      <div className="clubMember" data-aos="fade-up" data-aos-once="true">
          <div className="icon">
            <img className="club_img" src={src} alt=""/>
            <div className="club_icons">
            <a href={"mailto:"+ mail}><Hi.HiMail className="c_mail"/></a>
            <AiIcons.AiFillLinkedin className="c_lin" onClick={()=> window.open(lin, "_blank")}/>
            </div>
          </div>
          <div className="name">
             <h3>{name}</h3>
          </div>
          <div className="role">
             <h3>{role}</h3>
          </div>
      </div>
  )
}

export default function Club() {
    return (
        <div className="club">
            <div className="club_head" data-aos="fade-in" data-aos-once="true">
                <h1>Our Team</h1>
            </div>
            {/*Core*/}
            <div className="club_members">
              
              <div className="cm_row1">
                <ClubMember 
                src={vedika}
                name="Patrike Vedika Rajkumar"
                role="Convenor"
                mail="patrikevedika.191me256@nitk.edu.in"
                lin="https://www.linkedin.com/in/vedika-patrike-96a9a719b"/>
                <ClubMember 
                src={lucky}
                name="Lucky Prameeth Rayi"
                role="President"
                mail=""
                lin="https://www.linkedin.com/in/lucky-prameeth-rayi-9242471ba"/>
                <ClubMember 
                src={mihirmali}
                name="Mihir S Mali"
                role="Secretary"
                mail="mihir.191ME148@nitk.edu.in"
                lin="https://www.linkedin.com/in/mihir-mali-5247281b3/"/>
                <ClubMember 
                src={pradeepsolanki}
                name="Pradeep Singh Solanki"
                role="Treasurer"/>
                <ClubMember 
                src={shrivatsa}
                name="Shrivatsa Hegde"
                role="Technical Head"
                mail="shrivatsahegde.191me280@nitk.edu.in"
                lin="https://www.linkedin.com/in/shrivatsa-hegde-44b5b1208/"
                />
              </div>
              <div className="cm_row1">
             
              <ClubMember 
                src={sumanthhegde}
                name="Sumanth N Hegde"
                role="Technical Head"
              />
              <ClubMember 
                src={prasanthi}
                name="Prasanthi Bolimera"
                role="Webmaster"
                mail="prasanthibolimera.191it240@nitk.edu.in"
                lin="https://www.linkedin.com/in/prasanthi-bolimera-3963391ba/"
              />
              <ClubMember 
                src={dilshad}
                name="Shaik Dilshad Begum"
                role="Event Coordinator"
                mail="dilshad.201me151@nitk.edu.in"
                lin="https://www.linkedin.com/in/dilshad-shaik-a444561ba"
              />
              <ClubMember 
                src={shivavasthan}
                name="Shivavasthan D"
                role="KEP Coordinator"
                mail="shivavasthan.201me154@nitk.edu.in"
                lin="https://www.linkedin.com/in/shivavasthan-damodharan-6972821a7"
              />
              </div>
              
              <div className="cm_row1">
              <ClubMember 
                src={jishnudas}
                name="Jishnu Das"
                role="Chief Editor, Magazine"
                mail="jishnudas.201ec126@nitk.edu.in"
                lin="https://www.linkedin.com/in/jishnu-das-140901212"
                />
                <ClubMember 
                src={ashrithdr}
                name="D R Ashrith"
                role="Publicity Coordinator"
                mail="ashrithdr.201ee117@nitk.edu.in"
                lin="https://www.linkedin.com/in/ashrith-dr-3b1b9b205/"
                />
                <ClubMember 
                src={jatinkaushal}
                name="Jatin Kaushal"
                role="Media Coordinator"
                mail="jatinkaushal.201ch026@nitk.edu.in"
                lin=""
                />
                <ClubMember 
                src={akshaykumar}
                name="Akshay Kumar R R"
                role="Media Coordinator"
                mail="akshaykumarrr.191mt003@nitk.edu.in"
                lin="https://www.linkedin.com/in/akshay-ram-5024021b8"/>
              <ClubMember 
                src={yogeshp}
                name="Yogesh P"
                role="Blog Coordinator"
                mail="yogesh.201ee138@nitk.edu.in"
                lin="https://www.linkedin.com/in/yogesh-p-306371212"
                />
              
              </div>
              <div className="cm_row1">
              <ClubMember 
                src={sumitsagar}
                name="Sumit Sagar"
                role="Project Lead"
                mail="sumit.191me285@nitk.edu.ins"
                lin=""/>
              <ClubMember 
                src={navya}
                name="Navya Kollipara"
                role="Project Lead"
                mail="navyakollipara.191ee219@nitk.edu.in"
                lin="https://www.linkedin.com/in/navya-kollipara"/>
                <ClubMember 
                src={aashish}
                name="Aashish Prateek"
                role="Project Lead"
                mail="aashishprateek.191cs225@nitk.edu.in"
                lin="http://linkedin.com/in/aashish-prateek-090009167"/>
              </div>
            
              {/*Final Year*/}
              <div className="cm_row1">
              <ClubMember 
                src={likhitaj}
                name="Likhita J"
                role="Senior Executive Member"
                mail="likhita.191ee221@nitk.edu.in"
                lin="https://www.linkedin.com/in/likhita-j-20435219a/"/>
              
                <ClubMember
                  src={manojgs}
                  name="Manoj G S"
                  role="Senior Executive Member"
                  mail="manojgshekargmailcom.191ec224@nitk.edu.in"
                  lin="https://www.linkedin.com/in/manoj-g-s-715a07190"
                  />
              <ClubMember 
                src={shunups}
                name="Shunu P S"
                role="Senior Executive Member"
                mail="shunu.191me281@nitk.edu.in"
                lin="https://www.linkedin.com/in/shunu-ps/"/>
              {/*<ClubMember 
                src={diksha}
                name="Diksha Negi"
                role="Executive Member"
                mail="dikshanegi.191me129@nitk.edu.in"
              lin="https://www.linkedin.com/in/diksha-negi-37b0bb1b4/"/>*/}
              <ClubMember 
                src={kushalgowda}
                name="Kushal Narayan Gowda"
                role="Senior Executive Member"
                mail="kushalnarayangowda.191ch019@nitk.edu.in"
                lin="https://www.linkedin.com/in/kushal-narayan-gowda/"/>
              <ClubMember 
                src={meet}
                name="Meet Ajay Shah"
                role="Senior Executive Member"
                mail="meet.191ee133@nitk.edu.in"
                lin="https://www.linkedin.com/in/meet-shah-8a5794179/"/>
              
              </div>
              <div className="cm_row1">
              <ClubMember 
                src={saransh}
                name="Saransh Bhaduka"
                role="Senior Executive Member"
                mail="saranshbhaduka.191me175@nitk.edu.in"
                lin="https://www.linkedin.com/in/saransh-bhaduka-841a1619b/"/>
              
              <ClubMember 
                src={samarth}
                name="Samarth C Swamy"
                role="Senior Executive Member"
                mail="samarthcswamy.191me274@nitk.edu.in"
                lin="https://www.linkedin.com/in/samarthcswamy"/>
              <ClubMember 
                src={shashiprakash}
                name="Aenugutala Shashi Prakash"
                role="Senior Executive Member"
                mail="shashiprakash.191it204@nitk.edu.in"
                lin="https://www.linkedin.com/in/shashi-prakash-aenugutala-62789b1b9"/>
              
              </div>
              <div className="cm_row1">  
              <ClubMember 
                src={yashkundale}
                name="Yash Kundale"
                role="Senior Executive Member"
                mail="yashk.191me296@nitk.edu.in"
                lin="https://www.linkedin.com/in/kyashnitk23"/>
              <ClubMember 
                src={saisrujan}
                name="A Sai Srujan"
                role="Senior Executive Member"
                mail="saisrujan.191me101@nitk.edu.in"
                lin="https://www.linkedin.com/in/sai-srujan-720386200"/>
              <ClubMember 
                src={raghavganesh}
                name="M S Raghav Ganesh"
                role="Senior Executive Member"
                mail="msraghavganesh.191me241@nitk.edu.in"
                lin="https://www.linkedin.com/in/ms-raghav-ganesh"/>  
              <ClubMember 
                src={divyamverma}
                name="Divyam Neer Verma"
                role="Senior Executive Member"
                mail="divyamneerverma.191me228@nitk.edu.in"
                lin="https://www.linkedin.com/in/divyam-neer-verma-ba81241b2/"/>
              </div>
              <div className="cm_row1">
              <ClubMember 
                src={harshalbhoyar}
                name="Harshal Bhoyar"
                role="Senior Executive Member"
                mail="harshalkawdujibhoyar.191me123@nitk.edu.in"
                lin="https://www.linkedin.com/in/harshal-bhoyar-2869691a3"/>
              <ClubMember 
                src={nitesh}
                name="Nitesh Bhat"
                role="Senior Executive Member"
                mail="niteshbhat.191me153@nitk.edu.in"
                lin="https://www.linkedin.com/in/nitesh-bhat-b2b5b61b1/"/>
              </div>
              {/*3rd Year*/}
              <div className="cm_row1"> 
              <ClubMember 
                src={ajmeera}
                name="Ajmeera Kethan"
                role="Executive Member"
                mail="kethanajmeera.201ee206@nitk.edu.in"
                lin="https://www.linkedin.com/in/kethan-ajmeera-4b5690217"/> 
              <ClubMember 
                src={anannyarao}
                name="Anannya Rao"
                role="Executive Member"
                mail="anannya.201me209@nitk.edu.in"
                lin=""/>    
              <ClubMember 
                src={dayanandabn}
                name="Dayananda B N"
                role="Executive Member"
                mail="dayanandabn.201ec219@nitk.edu.in"
                lin="https://www.linkedin.com/in/dayananda-b-n-35640a202"/>  
              <ClubMember 
                src={khushirathod}
                name="Khushi Rathod"
                role="Executive Member"
                mail="khushicrathod.201ec128@nitk.edu.in"
                lin="https://www.linkedin.com/in/khushi-rathod-981534210"/>
              <ClubMember 
                src={Mayur}
                name="Mayur"
                role="Executive Member"
                mail=""
                lin=""/>
              <ClubMember 
                src={Puja_Chowhan}
                name="Mudavath Puja Chowhan"
                role="Executive Member"
                mail=""
                lin=""/>
              <ClubMember 
                src={nischayi}
                name="Nischayi Vabilisetti"
                role="Executive Member"
                mail="nischayi.201me363@nitk.edu.in"
                lin="https://www.linkedin.com/in/nischayi-vabilisetti-b12713227"/>
              <ClubMember 
                src={Piyush_Dubey}
                name="Piyush Dubey"
                role="Executive Member"
                mail=""
                lin=""/>
              <ClubMember 
                src={samyakjain}
                name="Samyak Jain"
                role="Executive Member"
                mail="jainsamp.201it125@nitk.edu.in"
                lin="https://www.linkedin.com/in/samyak-jain-b403bb220"/>
              <ClubMember 
                src={shannoncarlo}
                name="Shannon Britney Carlo"
                role="Executive Member"
                mail="shannonbritneycarlo.201cv249@nitk.edu.in"
                lin="https://www.linkedin.com/in/shannon-carlo-666945216/"/>                          
              </div>
              {/*First Years*/}
              <div className="cm_row1">
              {/*<ClubMember 
                src={}
                name=""
                role=""
                mail=""
                lin=""
              /> */}
              </div>
            </div>
            </div>

    )

}
