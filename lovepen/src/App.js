import React from 'react'
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Watch from "./components/Watch/Watch.jsx"
const App = () => {
  return (
    
      <Router>
        <Routes>
        <Route path="/watch/:id" element= {<Watch/>}></Route>
        <Route path="/" element={<Main/>}></Route>
        
        </Routes>
        </Router>


 
   
  )
}

export default App
