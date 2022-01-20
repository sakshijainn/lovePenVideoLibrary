import React from 'react'
import Header from './components/Header/Header'
import "./App.css"
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from "./components/RecommendedVideos/RecommendedVideos.jsx"
const App = () => {
  return (
    <div className ="App">

      <Header/>

      <div className="app_page">
      <Sidebar/>
      <RecommendedVideos/>
      </div>
      
    </div>
   
  )
}

export default App
