import React from 'react'
import  "./WatchLater.css"
import SideBar from "../Sidebar/Sidebar"
import WatchLaterVideos from "../WatchLaterVideos/WatchLaterVideos";
import Header from '../Header/Header';
function WatchLater() {
    return (
        <div>
            <Header/>
        <div className="watchlater-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="watchlater-page"> <WatchLaterVideos/></div>
      
    
     
     </div>
        </div>
    )
}

export default WatchLater