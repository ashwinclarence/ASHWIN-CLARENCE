import { useState } from "react"
import './About.css'
import profileimg from '../../assets/tabicon.png'
function About() {
  const [about,setabout]=useState(false)
  return (
    <div className='about-container container-fluid' id='about'>
    <div className="about-row row">
      <div className="about-left col-md-5">
        <img src={profileimg} alt="" />
      </div>
      <div className="about-right col-md-6">
        <h3 className="about-head">About me</h3>
        <p>An enthusiastic programmer skilled. Web-development have always been my fields of interest. Im very much passionate to learn new stuffs that interests me and can help me to get better.</p>
        <div className="about-right-row">
          <h5 onClick={()=>setabout(true)} className={`${about?"about-underline":"no-underline"}`}>Qualification</h5>
          <h5 onClick={()=>setabout(false)}className={`${about?"no-underline":"about-underline"}`}>Experience</h5>
        </div>
        {about ? <div className="about-qualification">
          <p> <span className="about-time-period">2024-present</span> <br />MERN Stack developer BROTOTYPE</p>
         <p> <span className="about-time-period">2019-2022</span> <br />Bachelor of Computer Applications under the University of Kerala</p>
         <p> <span className="about-time-period">2017-2019</span> <br /> Computer Science in St Joseph&apos;s HSS</p>
        </div> : <div className="about-experience">
         <p> <span className="about-time-period">Jan 2024 - present</span> <br />MERN Stack developer BROTOTYPE</p>
         <p> <span className="about-time-period">Oct 2022 - Nov 2022</span> <br />App Development Training in Skill Vertex</p>
         <p> <span className="about-time-period">Aug 2022 - Nov 2023</span> <br />Shift Manager Mcdonalds India</p>
        </div>}


        <div className="resumebox">
          <button className="resume">Download CV</button>
        </div>
      </div>
    </div>
  </div>
  )
}
export default About
