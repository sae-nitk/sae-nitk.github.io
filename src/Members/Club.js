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
import ajmeera from '../images/club/Ajmeera.JPG'; import harshalbhoyar from '../images/club/Harshal _Bhoyar.jpg'; 
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
            <div className="club_members">
              <div className="cm_row1">
                <ClubMember 
                src={eshwar}
                name="K Eshwar Sai Srinivas"
                role="Convenor"
                mail="kessrinivas.181me141@nitk.edu.in"
                lin="https://www.linkedin.com/in/sai--srinivas/"/>
                <ClubMember 
                src={ankitgupta}
                name="Ankit Gupta"
                role="President"
                mail="ankitgupta.181ch007@nitk.edu.in"
                lin="https://www.linkedin.com/in/ankitg0812/"/>
                <ClubMember 
                src={rishu}
                name="Rishu Kumar"
                role="Secretary"
                mail="rishu.181ch034@nitk.edu.in"
                lin="https://www.linkedin.com/in/rishu-kumar-3b93a7170/"/>
                <ClubMember 
                src={guhanm}
                name="Guhan Sidharth M"
                role="Treasurer"
                mail="guhan.191me134@nitk.edu.in"
                lin="https://www.linkedin.com/in/guhan-sidharth-m-b92043208/"/>
                <ClubMember 
                src={kaustubh}
                name="Kaustubh Prashant Sonawane"
                role="Technical Head"
                mail="kaustubhsonawane.181me236@nitk.edu.in"
                lin="https://www.linkedin.com/in/kaustubh-sonawane-80a326192"/>
              </div>
              <div className="cm_row1">
                <ClubMember 
                src={diwakar}
                name="Diwakar S Goud"
                role="Technical Head"
                mail="diwakarsgoud.181me122@nitk.edu.in"
                lin="http://www.linkedin.com/in/diwakar-s-goud"/>
                <ClubMember 
                src={prasanthi}
                name="Prasanthi Bolimera"
                role="Webmaster"
                mail="prasanthibolimera.191it240@nitk.edu.in"
                lin="https://www.linkedin.com/in/prasanthi-bolimera-3963391ba/"/>
                <ClubMember 
                src={shrivatsa}
                name="Shrivatsa Hegde"
                role="Event Coordinator"
                mail="shrivatsahegde.191me280@nitk.edu.in"
                lin="https://www.linkedin.com/in/shrivatsa-hegde-44b5b1208/"/>
                <ClubMember 
                src={vedika}
                name="Patrike Vedika Rajkumar"
                role="KEP Coordinator"
                mail="patrikevedika.191me256@nitk.edu.in"
                lin="https://www.linkedin.com/in/vedika-patrike-96a9a719b"/>
                <ClubMember 
                src={manojgs}
                name="Manoj G S"
                role="KEP Coordinator"
                mail="manojgshekargmailcom.191ec224@nitk.edu.in"
                lin="https://www.linkedin.com/in/manoj-g-s-715a07190"/>
              </div>
              <div className="cm_row1">
                <ClubMember 
                src={lucky}
                name="Lucky Prameeth Rayi "
                role="Publicity Head"
                mail="https://www.linkedin.com/in/lucky-prameeth-rayi-9242471ba"
                lin="https://www.linkedin.com/in/lucky-prameeth-rayi-9242471ba"/>
                <ClubMember 
                src={mihirmali}
                name="Mihir Mali"
                role="Media Coordinator"
                mail="mihir.191ME148@nitk.edu.in"
                lin="https://www.linkedin.com/in/mihir-mali-5247281b3/"/>
                <ClubMember 
                src={akshaykumar}
                name="Akshay Kumar R R"
                role="Media Coordinator"
                mail="akshaykumarrr.191mt003@nitk.edu.in"
                lin="https://www.linkedin.com/in/akshay-ram-5024021b8"/>
                <ClubMember 
                src={likhitaj}
                name="Likhita J"
                role="Blog Coordinator"
                mail="likhita.191ee221@nitk.edu.in"
                lin="https://www.linkedin.com/in/likhita-j-20435219a/"/>
              </div>
              {/*Final Year*/}
              <div className="cm_row1">
                <ClubMember 
                src={vishlavathtarun}
                name="Vishlavath Tarun"
                role="Senior Executive member"
                mail="tarunnaik.181me186@nitk.edu.in"
                lin="https://www.linkedin.com/in/vishlavath-tarun-088477193"/>
                <ClubMember 
                src={sakshibagde}
                name="Sakshi Bagde"
                role="Senior Executive member"
                mail="sakshi.181me172@nitk.edu.in"
                lin="https://www.linkedin.com/in/sakshi-bagde-759993192/"/>
                <ClubMember 
                src={sagar}
                name="Sagar"
                role="Senior Executive member"
                mail="sagar.181me171@nitk.edu.in"
                lin="https://www.linkedin.com/in/sagar-ror-8b52621b2"/>
                <ClubMember 
                src={nrahul}
                name="N Rahul"
                role="Senior Executive member"
                mail="rahuljavaharlal.181me153@nitk.edu.in"
                lin="https://www.linkedin.com/in/rahuljavaharlal-nenavath-66621b1a4"/>
              <ClubMember 
                src={islavathmanohar}
                name="Islavath Manohar"
                role="Senior Executive member"
                mail="islavathmanohar.181me231@nitk.edu.in"
                lin="http://linkedin.com/in/manohar-islavath-11908716a"/>
              </div>

              <div className="cm_row1">
                <ClubMember 
                src={gauthamkrishna}
                name="Gauthamkrishna S"
                role="Senior Executive member"
                mail="gauthamkrishnas.181me125@nitk.edu.in"
                lin="https://www.linkedin.com/in/gauthamkrishna-s-452781195"/>
                <ClubMember 
                src={krishnabv}
                name="Krishna Reddy B V"
                role="Senior Executive member"
                mail="krishnareddy.181me139@nitk.edu.in"
                lin="https://www.linkedin.com/in/krishna-reddy-a0b89b188"/>
              </div>
              {/*3rd Year*/}
              <div className="cm_row1">
                <ClubMember 
                src={aashish}
                name="Aashish Prateek"
                role="Executive Member"
                mail="aashishprateek.191cs225@nitk.edu.in"
                lin="http://linkedin.com/in/aashish-prateek-090009167"/>
                <ClubMember 
                src={shunups}
                name="Shunu P S"
                role="Executive Member"
                mail="shunu.191me281@nitk.edu.in"
                lin="https://www.linkedin.com/in/shunu-ps/"/>
              {/*<ClubMember 
                src={diksha}
                name="Diksha Negi"
                role="Executive Member"
                mail="dikshanegi.191me129@nitk.edu.in"
              lin="https://www.linkedin.com/in/diksha-negi-37b0bb1b4/"/>*/}
                <ClubMember 
                src={sumitsagar}
                name="Sumit Sagar"
                role="Executive Member"
                mail="sumit.191me285@nitk.edu.ins"
                lin=""/>
                <ClubMember 
                src={pradeepsolanki}
                name="Pradeep Singh Solanki"
                role="Executive Member"
                mail="pradeepsinghsolanki.191me259@nitk.edu.in"
                lin="https://www.linkedin.com/in/Pradeep-Singh-Solanki/"/>
                <ClubMember 
                src={shashiprakash}
                name="Aenugutala Shashi Prakash"
                role="Executive Member"
                mail="shashiprakash.191it204@nitk.edu.in"
                lin="https://www.linkedin.com/in/shashi-prakash-aenugutala-62789b1b9"/>
                <ClubMember 
                src={kushalgowda}
                name="Kushal Narayan Gowda"
                role="Executive Member"
                mail="kushalnarayangowda.191ch019@nitk.edu.in"
                lin="https://www.linkedin.com/in/kushal-narayan-gowda/"/>
                <ClubMember 
                src={meet}
                name="Meet Ajay Shah"
                role="Executive Member"
                mail="meet.191ee133@nitk.edu.in"
                lin="https://www.linkedin.com/in/meet-shah-8a5794179/"/>
                <ClubMember 
                src={saransh}
                name="Saransh Bhaduka"
                role="Executive Member"
                mail="saranshbhaduka.191me175@nitk.edu.in"
                lin="https://www.linkedin.com/in/saransh-bhaduka-841a1619b/"/>
                <ClubMember 
                src={wilson}
                name="Wilson Furtado"
                role="Executive Member"
                mail="wilson.191cv155@nitk.edu.in"
                lin="https://www.linkedin.com/in/wilson-furtado-58a23018b/"/>
                <ClubMember 
                src={samarth}
                name="Samarth C Swamy"
                role="Executive Member"
                mail="samarthcswamy.191me274@nitk.edu.in"
                lin="https://www.linkedin.com/in/samarthcswamy"/>
              </div>
              <div className="cm_row1">      
                <ClubMember 
                src={raghavganesh}
                name="M S Raghav Ganesh"
                role="Executive Member"
                mail="msraghavganesh.191me241@nitk.edu.in"
                lin="https://www.linkedin.com/in/ms-raghav-ganesh"/>
                <ClubMember 
                src={yashkundale}
                name="Yash Kundale"
                role="Executive Member"
                mail="yashk.191me296@nitk.edu.in"
                lin="https://www.linkedin.com/in/kyashnitk23"/>
                <ClubMember 
                src={divyamverma}
                name="Divyam Neer Verma"
                role="Executive Member"
                mail="divyamneerverma.191me228@nitk.edu.in"
                lin="https://www.linkedin.com/in/divyam-neer-verma-ba81241b2/"/>
                <ClubMember 
                src={sumanthhegde}
                name="Sumanth N Hegde"
                role="Executive Member"
                mail="sumanthnhegde.191me284@nitk.edu.in"
                lin="http://www.linkedin.com/in/snh240701"/>
                <ClubMember 
                src={harshalbhoyar}
                name="Harshal Bhoyar"
                role="Executive Member"
                mail="harshalkawdujibhoyar.191me123@nitk.edu.in"
                lin="https://www.linkedin.com/in/harshal-bhoyar-2869691a3"/>
                <ClubMember 
                src={nitesh}
                name="Nitesh Bhat"
                role="Executive Member"
                mail="niteshbhat.191me153@nitk.edu.in"
                lin="https://www.linkedin.com/in/nitesh-bhat-b2b5b61b1/"/>
                <ClubMember 
                src={saisrujan}
                name="A Sai Srujan"
                role="Executive Member"
                mail="saisrujan.191me101@nitk.edu.in"
                lin="https://www.linkedin.com/in/sai-srujan-720386200"/>
                <ClubMember 
                src={navya}
                name="Navya Kollipara"
                role="Executive Member"
                mail="navyakollipara.191ee219@nitk.edu.in"
                lin="https://www.linkedin.com/in/navya-kollipara"/>              
              </div>
              {/*Second Year*/}
              <div className="cm_row1"> 
              <ClubMember 
                src={adithyams}
                name="Adithya M S"
                role="Executive Member"
                mail="adithya.201cs203@nitk.edu.in"
                lin="http://www.linkedin.com/in/adithya-m-s-61466b1b8"/>
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
                src={ashrithdr}
                name="Ashrith D R"
                role="Executive Member"
                mail="ashrithdr.201ee117@nitk.edu.in"
                lin="https://www.linkedin.com/in/ashrith-dr-3b1b9b205/"/> 
                <ClubMember 
                src={dayanandabn}
                name="Dayananda B N"
                role="Executive Member"
                mail="dayanandabn.201ec219@nitk.edu.in"
                lin="https://www.linkedin.com/in/dayananda-b-n-35640a202"/>  
                <ClubMember 
                src={jatinkaushal}
                name="Jatin Kaushal"
                role="Executive Member"
                mail="jatinkaushal.201ch026@nitk.edu.in"
                lin=""/>
                <ClubMember 
                src={jishnudas}
                name="Jishnu Das"
                role="Executive Member"
                mail="jishnudas.201ec126@nitk.edu.in"
                lin="https://www.linkedin.com/in/jishnu-das-140901212"/>
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
                src={dilshad}
                name="Shaik Dilshad Begum"
                role="Executive Member"
                mail="dilshad.201me151@nitk.edu.in"
                lin="https://www.linkedin.com/in/dilshad-shaik-a444561ba"/>
                <ClubMember 
                src={shannoncarlo}
                name="Shannon Britney Carlo"
                role="Executive Member"
                mail="shannonbritneycarlo.201cv249@nitk.edu.in"
                lin="https://www.linkedin.com/in/shannon-carlo-666945216/"/>
                <ClubMember 
                src={shivavasthan}
                name="Shivavasthan D"
                role="Executive Member"
                mail="shivavasthan.201me154@nitk.edu.in"
                lin="https://www.linkedin.com/in/shivavasthan-damodharan-6972821a7"/>                 
                <ClubMember 
                src={yogeshp}
                name="Yogesh P"
                role="Executive Member"
                mail="yogesh.201ee138@nitk.edu.in"
                lin="https://www.linkedin.com/in/yogesh-p-306371212"/>             
              </div>
            </div>
            </div>

    )

}
