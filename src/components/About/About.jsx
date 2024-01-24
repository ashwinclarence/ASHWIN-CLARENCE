import React from 'react'
import './About.css'
import profileimg from '../../assets/tabicon.png'
function About() {
  return (
    <div className='about-container' id='about'>
      <div className="about-row row">
      <div className="about-left col-md-5">
        <img src={profileimg} alt="profileimg" />
      </div>
      <div className="about-right col-md-6">
        <h4>About me</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde id iure nihil dolor! Consequatur unde voluptatem modi et ducimus tempore laborum rem delectus ea expedita. Numquam id omnis voluptas autem.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde id iure nihil dolor! Consequatur unde voluptatem modi et ducimus tempore laborum rem delectus ea expedita. Numquam id omnis voluptas autem.</p>
      </div>
      </div>
    </div>
  )
}

export default About
