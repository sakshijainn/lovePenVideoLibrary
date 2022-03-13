import React from 'react'
import "./Subscribe.css"
import SideBar from "../Sidebar/Sidebar"
import SubscribeVideos from "../SubscribeVideos/SubscribeVideos"
import Header from '../Header/Header'
function Subscribe() {
    return (
        <div>
            <Header/>
        <div className="subscribe-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="liked-page"> <SubscribeVideos/></div>
      
    
     
     </div>
        </div>
    )
}

export default Subscribe