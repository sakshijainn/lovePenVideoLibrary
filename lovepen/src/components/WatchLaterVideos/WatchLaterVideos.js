import React from 'react'
import {useVideo} from "../../Context/VideoContext";
import { Link,useNavigate } from "react-router-dom";


function WatchLaterVideos() {
    const {state:{videos, watchVideos}} = useVideo();
    const history = useNavigate();
    
      console.log("hy")
      console.log( watchVideos);
      const watchedVideoList =  watchVideos.map((itemId)=>{

        return videos.find((video) => video.id === itemId);
     
     
       })
     
    return (
        <div className="recommendedVideos">
        <h2>Watched Videos</h2>
        <div className="recommendedVideos_video" >
       
           {watchedVideoList.map((item)=>(
              <div className="videoCard" >

              <Link to={{ pathname: `/watch/${item.id}` }}>
                <img className="thumbnail" src={item.thumbnail}/>
            </Link>
                
                <div className="video_info">
                
                <div className="avatar">
                     <img src={item.imageSrc} alt=""/>
                    
                    
                </div>
                <div className="video-text">
                <h4>{item.title}</h4>
                <p>{item.channel}</p>
               <p>{item.views}.{item.timestamp}</p>
                </div>

</div>
              </div>
           ))}
        </div>
        
    </div>
    )
}

export default WatchLaterVideos

