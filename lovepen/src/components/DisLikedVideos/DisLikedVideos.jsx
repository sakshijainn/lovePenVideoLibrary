import React from 'react'
import { useVideo } from '../../Context/VideoContext'
import {Link} from "react-router-dom"

const DisLikedVideos = () => {
    const {state:{videos,dislikedVideos}} = useVideo();
    const videoList = dislikedVideos.map((itemId)=>{

        return videos.find((video) => video.id === itemId);
     
     
       })

    console.log(dislikedVideos)
    
    return (
        <div className="recommendedVideos">
        <h2>DisLiked Videos</h2>
        <div className="recommendedVideos_video" >
       
           {videoList.map((item)=>(
              <div className="videoCard" >

              <Link to={{ pathname: `/watch/${item.id}` }}>
                <img  className="thumbnail" src={item.thumbnail}/>
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

export default DisLikedVideos;