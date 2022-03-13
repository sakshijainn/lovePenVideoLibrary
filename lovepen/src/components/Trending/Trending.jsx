import React from 'react'
import "./Trending.css"
import SideBar from "../Sidebar/Sidebar"
import Header from '../Header/Header'
import TrendingPage from "../TrendingPage/TrendingPage"
const Trending = () => {
    return (
        <div>
            <Header/>
        <div className="trending-wrapper">
        <div className="sidebar"> <SideBar/></div>
        <div className="trending-page"> <TrendingPage/></div>
      
    
     
     </div>
        </div>
        
    )
}

export default Trending
