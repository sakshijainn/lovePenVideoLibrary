import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Watch from "./components/Watch/Watch.jsx"
import Liked from './components/Liked/Liked';
import WatchLater from './components/WatchLater/WatchLater';
import History from "./components/History/History.jsx"
import Subscribe from "./components/Subscribe/Subscribe.jsx"
import Disliked from "./components/DisLiked/DisLiked.jsx"
import Trending from './components/Trending/Trending';


const App = () => {
  return (
    
      <Router>
        <Routes>
        <Route path ="/history" element ={<History/>}></Route>
        <Route path ="/subscribe" element = {<Subscribe/>}></Route>
        <Route path ="/trending" element ={<Trending/>}></Route>
        <Route path ="/watch" element ={<WatchLater/>}></Route>
        <Route path ="/liked" element ={<Liked/>} ></Route>
        <Route path ="/disliked" element = {<Disliked/>} ></Route>
        <Route path="/watch/:id" element= {<Watch/>}></Route>
        <Route path="/" element={<Main/>}></Route>
        
        </Routes>
        </Router>


 
   
  )
}

export default App
