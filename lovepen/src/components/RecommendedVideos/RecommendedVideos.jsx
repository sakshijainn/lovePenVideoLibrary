import React,{useEffect} from 'react'


import "./RecommendedVideos.css"
import VideoCard from '../VideoCard/VideoCard';


const RecommendedVideos = () => {

   
      
    

    return (
        <div className="recommended_videos">
            <h2>Recommended</h2>
            <div className="recommendedVideos_videos">
              <VideoCard/>
            </div>
           
            
        </div>
    )
}

export default RecommendedVideos
