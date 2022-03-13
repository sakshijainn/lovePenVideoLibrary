import React, { useEffect } from "react";
import { useParams } from "react-router";
import {useVideo} from "../../Context/VideoContext"
import "./Player.css";
import VideoMetaData from "../VideoMetaData/VideoMetaData"
import {Link} from "react-router-dom"


function Player() {
  const { id } = useParams();

  const { videoDispatch } = useVideo();
    useEffect(() => {
        console.log("video running " , id)
        videoDispatch({ type: "HISTORY", payload: id });
    },[])

 
  
  return (
    <div className="player-container">
      <Link to ="/history">
      <div className="watchscreen-player" >
        
      <iframe 
          src={`https://www.youtube.com/embed/${id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
      </Link>
      <div>
        {" "}
        <VideoMetaData />
      </div>
    </div>
  
  );
}

export default Player;