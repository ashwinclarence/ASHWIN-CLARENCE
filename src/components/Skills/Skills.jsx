import './Skills.css'
import htmlimg from '../../assets/html.png'
import cssimg from '../../assets/css.png'
import jsimg from '../../assets/js.png'
import bootstrap from '../../assets/bootstrap.png'
import mongodb from '../../assets/mongodb.png'
import express from '../../assets/express.png'
import react from '../../assets/react.png'
import nodejs from '../../assets/nodejs.png'
import git from '../../assets/git.png'
import firebase from '../../assets/firebase.png'
import vscode from '../../assets/vscode.png'
import vite from '../../assets/vite.png'
function Skills() {
  let skill=[
    {
      image:htmlimg,
      name:"HTML",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:cssimg,
      name:"CSS",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:jsimg,
      name:"JavaScipt",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:bootstrap,
      name:"BootStrap",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:mongodb,
      name:"MongoDB",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:express,
      name:"Express Js",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:react,
      name:"React",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:nodejs,
      name:"Node js",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:git,
      name:"Git",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:firebase,
      name:"Firebase",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:vscode,
      name:"Vs Code",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      image:vite,
      name:"Vite",
      about:"Lorem ipsum dolor sit amet consectetur adipisicing elit."
    }
  ]
  return (
    <div className='skills-container container-fluid'>
        <div className="skills-row row">
          <h3 className='sub-heading'>Skills</h3>
          <p>As a newcomer to the world of coding, I am eagerly embarking on a journey of self-development, honing my programming skills with a determined commitment to continuous learning and growth.</p>
           {
            skill.map((obj,index)=>{
              return(
              <div className="skill-box col-md-2" key={index}>
                <div className="skill-box-img">
                  <img src={obj.image} alt="" className='skills-img'/>
                </div>
                <div className="skill-box-des">
                  <h4 className='skill-name'>{obj.name} </h4>
                  {/* <p>{obj.about} </p> */}
                </div>
              </div>
              )
            })
           }
        </div>
      
    </div>
  )
}

export default Skills
