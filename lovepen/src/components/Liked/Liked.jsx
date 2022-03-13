import React from 'react'
import "./Liked.css"
import SideBar from "../Sidebar/Sidebar"
import LikedVideos from "../LikedVideos/LikedVideos"
import Header from '../Header/Header'
function Liked() {
    return (
        <div>
            <Header/>
        <div className="liked-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="liked-page"> <LikedVideos/></div>
      
    
     
     </div>
        </div>
    )
}

export default Liked