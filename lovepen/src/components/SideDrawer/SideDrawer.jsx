import React,{useState} from 'react'
import "./SideDrawer.css"
import SidebarRow from "../SidebarRow/SidebarRow"
import {AiFillHome,AiOutlineFire,AiTwotoneMail,AiFillLike,AiFillDislike} from "react-icons/ai"
import {FaClock} from "react-icons/fa"
import Sidebar from "../Sidebar/Sidebar"
import {Link} from "react-router-dom";
function SideDrawer() {
    
    return (
       
        <nav className="side-drawer">
        <div className="sidebarComp">
        <Link className="link" to="/">
        <SidebarRow selected icon={AiFillHome} title="Home"/>
        </Link>
        
        <Link className="link" to="/trending">
        <SidebarRow icon={AiOutlineFire} title="Trending"/>
        </Link>
        
        <SidebarRow icon={AiTwotoneMail} title="Subscription"/>
        <hr/>

        <Link className="link" to="/history">

        <SidebarRow icon={AiTwotoneMail} title="History"/>
        </Link>
        
        <Link className="link" to="/watchList">
        <SidebarRow icon={AiFillLike}title="Watch later"/>
        </Link>
        
        <Link className="link" to="/liked-videos">
        <SidebarRow icon={AiFillLike}title="Liked Videos"/>
        </Link>

        <Link className="link" to="/playlist">
        <SidebarRow icon={AiFillLike}title="My Playlist"/>
        </Link>
       
        
        <hr/>
      
           
           
        </div>
        </nav>
      
    )
}

export default SideDrawer