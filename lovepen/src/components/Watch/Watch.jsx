import React,{useEffect} from 'react'
import "./Watch.css"
import Player from "../Player/Player"
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'


function Watch() {
    
    return (
        <>
        <Header/>
        <div className="watch-screen">
        <div className ="central-watch-screen-sidebar">
            <Sidebar/>
        </div>
        <div className="central-watch-screen">
           <Player/>
        </div>

       
    </div>
    </>
    )
}

export default Watch
