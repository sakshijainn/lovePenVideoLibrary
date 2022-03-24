import React from 'react'
import SideBar from "../Sidebar/Sidebar"
import Playlist from '../Playlist/Playlist';
import "./PlaylistContainer.css"
import Header from '../Header/Header';
function PlaylistContainer() {
    return (
        <div>
          <Header/>
        <div className="playlist-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="playlist-page"> <Playlist/></div>
      
    
     
     </div>
        </div>
    )
}

export default PlaylistContainer