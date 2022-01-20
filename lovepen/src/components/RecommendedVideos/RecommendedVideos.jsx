import React,{useEffect} from 'react'
import axios from "axios";
import setupMockServer from "../../api/mockserver";

import "./RecommendedVideos.css"
import VideoCard from '../VideoCard/VideoCard';
import { useVideo } from '../../Context/VideoContext';

const RecommendedVideos = () => {

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
        <div className="recommended_videos">
            <h2>Recommended</h2>
            {videos.map((video)=>(
                <p>{video.title}</p>
            ))}
           
            
        </div>
    )
}

export default RecommendedVideos
