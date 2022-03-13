import React from 'react'
import "./History.css"
import Sidebar from "../Sidebar/Sidebar"
import HistoryVideos from '../HistoryVideos/HistoryVideos';
import Header from '../Header/Header';
function History() {
    return (
        <div>
            <Header/>
        <div className="history-wrapper">
        <div className="sidebar"> <Sidebar/></div>
        <div className="history-page"> <HistoryVideos/></div>
      
    
     
     </div>
        </div>
    )
}

export default History