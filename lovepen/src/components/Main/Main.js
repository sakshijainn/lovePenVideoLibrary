import React from 'react'
import Header from '../Header/Header.jsx'
import Sidebar from '../Sidebar/Sidebar.jsx';
import RecommendedVideos from "../RecommendedVideos/RecommendedVideos.jsx"
import "./Main.css"

function Main() {
    return (
      <>
         <Header/>
        
         <div className="content-wrapper">
            <div className="sidebar"> <Sidebar/></div>
            <div className="videos"><RecommendedVideos/></div>
        
         
         </div>
         </>
         
    
    )
}

export default Main