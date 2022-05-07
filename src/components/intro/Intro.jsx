import React from 'react';
import './intro.scss';
import Typewriter from 'typewriter-effect';



function Intro() {
  

  return (
    <div className="intro" id="intro">
    
    <div className='left'>
        <div className='imageContainer'>
            <img src="assets/Parth.png" alt="intro" />
        </div>
    </div>

    <div className='right'>

    <div className='wrapper'>
      <h2>Hi There, I'm</h2>
      <h1>Parth Kanpariya</h1>
      <h3><span><Typewriter
  options={{
    strings: ['Mobile App Developer', 'Web Developer', 'Software Engineer'],
    autoStart: true,
    loop: true,
  }}
/></span></h3>

    </div>
    <a href="#portfolio">
      <img src="assets/down.png" alt=""/>
    </a>

    </div>

    </div>
  )
}

export default Intro