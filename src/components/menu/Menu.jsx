import React from 'react';
import './menu.scss';

function Menu({menuOpen,setMenuOpen}) {
  return (
    <div className={'menu '+(menuOpen&&"active")}>
         <ul>
             <li onClick={()=>setMenuOpen(false)}>
                 <a href='#intro'>Home</a>
             </li>
             <li onClick={()=>setMenuOpen(false)}>
                 <a href='#portfolio'>Portfolio</a>
             </li>
             <li onClick={()=>setMenuOpen(false)}>
                 <a href='#works'>Works</a>
             </li>
             {/* <li onClick={()=>setMenuOpen(false)}>
                 <a href='#testinomial'>Testinomial</a>
             </li> */}
             <li onClick={()=>setMenuOpen(false)}>
                 <a href='#contacts'>Contact</a>
             </li>
            

             
         </ul>
    </div>
  )
}

export default Menu