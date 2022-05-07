import React from 'react';
import './topbar.scss';
import {Person,Mail} from "@material-ui/icons";

function Topbar({menuOpen,setMenuOpen}) {
  return (
    <div className={"topbar "+(menuOpen && "active")} id='topbar'>
  
    <div className='wrapper'>
        <div className='left'>
           <a href='#intro' className='logo'>Mega</a>
           <div className='itemContainer'>
             <Person className='icon' />
             <span>+91 9016175262</span>
           </div>
           <div className='itemContainer'>
             <Mail className='icon' />
             <span>pmkanpariya16@gmail.com</span>
           </div>
           <div className='itemContainer'>
             <img  src='assets/linkedin.png' className='linkdin' onClick={()=>window.open('https://www.linkedin.com/in/parth-kanpariya-92bb991a0/','_blank')} alt=""/>
             
           </div>
        </div>
        <div className='right'>
            <div className='hamburger' onClick={()=>setMenuOpen(!menuOpen)}>
              <span className='line1'></span>
              <span className='line2'></span>
              <span className='line3'></span>
            </div>
        </div>
    </div>

    </div>
  )
}

export default Topbar