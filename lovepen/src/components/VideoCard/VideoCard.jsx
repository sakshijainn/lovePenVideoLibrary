import React,{useEffect} from 'react'
import { useVideo } from '../../Context/VideoContext';
import axios from "axios";
import setupMockServer from "../../api/mockserver";
import "./VideoCard.css"
import {Link} from "react-router-dom"
const VideoCard = () => {

    const {state :{videos}, videoDispatch} = useVideo();
    console.log(videos)
   

    useEffect(() => {
        (async function () {
          try {
            setupMockServer();
            const response = await axios.get("/api/users");
            console.log("videos",response.data.users);
            videoDispatch({ type: "SET_VIDEOS", payload: response.data.users });
            
          } catch (error) {
            console.log("error");
          }
        })();
      }, []);

    return (
        <>
             {videos.map((video)=>(
                <div className="videoCard">
                  <Link to = {`/watch/${video.id}`}>
                    <img className="videoCard_thumbnail" src = {video.thumbnail}/>
                  </Link>
                    <div className ="videoCard_info">

                        <div className="videoCard_avatar">
                              <img src={video.imageSrc} alt=""/>
                        </div>

                        <div className="video_text">
                            <h4>{video.title}</h4>
                            <p>{video.channel}</p>
                            <p>
                                {video.views} . {video.timestamp}
                            </p>
                        </div>


                    </div>
                </div>
            ))}
           
        </>
    )
}

export default VideoCard
