import React from 'react'
import "./DisLiked.css"
import SideBar from "../Sidebar/Sidebar"
import Header from '../Header/Header'
import DisLikedVideos from "../DisLikedVideos/DisLikedVideos"
function DisLiked() {
    return (
        <div>
            <Header/>
        <div className="disliked-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="disliked-page"> <DisLikedVideos/></div>
       
      
    
     
     </div>
        </div>
    )
}

export default DisLiked