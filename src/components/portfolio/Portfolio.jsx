import React from 'react';
import PortfolioList from '../portfolioList/PortfolioList';
import { useState,useEffect } from 'react';
import './portfolio.scss';
import {featuredPortfolio,webPortfolio,mobilePortfolio,contentPortfolio} from '../../data';

function Portfolio() {

  const[selected,setSelected]=useState("Featured");
  const[data,setData]=useState([]);



  const list=[
    {
      id:"Featured",
      title:"Featured",
    },
    {
      id:"web",
      title:"Web App",
    },
    {
      id:"mobile",
      title:"Mobile App",
    },
    {
      id:"write",
      title:"writing",
    }

  ]


  useEffect(() => {
   
    switch(selected){
       case "Featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "write":
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
        break;

    }
   
  }, [selected]);

  return (
    <div className="portfolio" id='portfolio'>
        <h1>Portfolio</h1>
        <ul>
          {list.map((item)=>(
             <PortfolioList title={item.title} active={selected===item.id} setSelected={setSelected} id={item.id}/>
          ))}
        </ul>

        <div className='container'>
         
         {data.map(d=>(
            
          <div className='item'>
            <img src={d.img} 
            alt='item'/>
            <h3>{d.title}</h3>
          </div>

         ))}
          

          
        </div>

       
       
     </div>
  )
}

export default Portfolio