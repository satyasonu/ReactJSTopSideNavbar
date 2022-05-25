import React from 'react';
import './Csspage/Home.css'
import Sidebar from './HomePageDesign/Sidebar.jsx'
import User from './HomePageDesign/User';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import sidebarNavItems from './HomePageDesign/Sidebar'


const Home = () => {
  return (  
    <>  
        <div className='home'>
            <Sidebar />
            <div className='rightSpace'>
            {/* `{if(sidebarNavItems.section === 'user')
            {
                <User />
            }
            else{
              return 'No content';
            }}` */}
            </div>
            
            
        </div>
    </>
    
  );
  console.log(sidebarNavItems.display);
};

export default Home;