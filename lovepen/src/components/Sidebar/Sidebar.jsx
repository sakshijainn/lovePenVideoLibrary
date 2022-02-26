import React from 'react'
import "./Sidebar.css"
import SidebarRow from "../SidebarRow/SidebarRow"
import {AiFillHome,AiOutlineFire,AiTwotoneMail,AiFillLike,AiFillDislike} from "react-icons/ai"
import {FaClock} from "react-icons/fa"
const Sidebar = () => {
    return (
        <div className="sidebarr">
           
            <SidebarRow selected Icon={AiFillHome} title ="Home"/>
            <SidebarRow Icon={AiOutlineFire} title ="Trending"/>
            <SidebarRow Icon={AiTwotoneMail}  title ="Subscription"/>
            <hr/>
            <SidebarRow Icon={FaClock} title ="History"/>
            <SidebarRow Icon={AiFillLike} title ="Liked Videos"/>
            <SidebarRow Icon={AiFillDislike} title ="DisLiked Videos"/>
            <hr/>

        </div>
    )
}

export default Sidebar
