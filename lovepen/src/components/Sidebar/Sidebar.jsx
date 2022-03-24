import React from 'react'
import "./Sidebar.css"
import SidebarRow from "../SidebarRow/SidebarRow"
import {AiFillHome,AiOutlineFire,AiTwotoneMail,AiFillLike,AiFillDislike,AiFillPlayCircle} from "react-icons/ai"
import {FaClock} from "react-icons/fa"
import {Link} from "react-router-dom"
const Sidebar = () => {
    return (
        <div className="sidebarr">
           
            <Link className="link" to="/"><SidebarRow selected Icon={AiFillHome} title ="Home"/></Link>
            <Link className="link" to="/trending"><SidebarRow Icon={AiOutlineFire} title ="Trending"/></Link>
            <Link className="link" to="/subscribe"><SidebarRow Icon={AiTwotoneMail}  title ="Subscription"/></Link>

            <hr/>
            <Link className="link" to="/history"><SidebarRow Icon={FaClock} title ="History"/></Link>
            <Link className="link" to="/liked"><SidebarRow Icon={AiFillLike} title ="Liked Videos"/></Link>
            <Link className="link" to="/disliked"><SidebarRow Icon={AiFillDislike} title ="DisLiked Videos"/></Link>

            <Link className="link" to="/playlist"><SidebarRow Icon={AiFillPlayCircle} title ="Playlist"/></Link>
           

            <hr/>

        </div>
    )
}

export default Sidebar
