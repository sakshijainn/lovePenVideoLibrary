import React from 'react'
import {useVideo} from "../../Context/VideoContext"
import {Link} from "react-router-dom"
const SubscribeVideos = () => {
    
    const { state:{videos,subscribeChannels} , videoDispatch } = useVideo();

    const subscribeList = subscribeChannels.map((itemId)=>{

        return videos.find((video) => video.id === itemId);
     
     
       })
    console.log(subscribeList)

    return (
        <div className="recommendedVideos">
        <h2>Subscribed Channels</h2>
        <div className="recommendedVideos_video" >
       
           {subscribeList.map((item)=>(
              <div className="videoCard" >

                
                <div className="video_info">
                
                <div className="avatar">
                     <img src={item.imageSrc} alt=""/>
                    
                    
                </div>
                <div className="video-text">
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

export default SubscribeVideos
