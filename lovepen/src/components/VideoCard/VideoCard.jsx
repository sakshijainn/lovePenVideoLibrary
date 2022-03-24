import React,{useEffect} from 'react'
import { useVideo } from '../../Context/VideoContext';
import axios from "axios";
import setupMockServer from "../../api/mockserver";
import "./VideoCard.css"
import {Link} from "react-router-dom"
import { useParams } from "react-router";
const VideoCard = () => {

    const {state :{videos,keyword}, videoDispatch} = useVideo();
    const{state} = useVideo();
    console.log(videos)
    console.log(keyword)
    const { id } = useParams();
   

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


      const FilteredData = (state, data) => {

        let getVideos = [...data];

        if (state.keyword) {
          getVideos = getVideos.filter((video) => video.title.toLowerCase().includes(state.keyword));
        }

        return getVideos;
    }
      
          const filteredVideos = FilteredData(state, state.videos)

          console.log(filteredVideos)

    

    return (
        <>
             {filteredVideos.map((video)=>(
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
