import React, { useEffect, useState } from "react";
import "./VideoMetaData.css";
import { useVideo } from "../../Context/VideoContext"
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function VideoMetaData() {
  const {
    state: { videos ,likedVideos }, videoDispatch
  } = useVideo();

  console.log(likedVideos)

  


  const [show, setShow] = useState(false);

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const { id } = useParams();
  const videoMetaDataDetails = videos.find((video) => video.id === id);

  console.log(videoMetaDataDetails);

  return (
    <div className="videometadata">
      <div className="top">
        <h4>{videoMetaDataDetails.title}</h4>
        <div>
          <div>
            <p className="infoP">
              {videoMetaDataDetails.views} . {videoMetaDataDetails.timestamp}
            </p>
          </div>
          <div class="btn-container">
            <Link to="/liked">
              <button onClick={() => videoDispatch({ type: "LIKE", payload: id })} >
                like
              </button>
            </Link>

            <Link to="/disliked">
              <button onClick={() => videoDispatch({ type: "DISLIKE", payload: id })} >
                dislike
              </button>
            </Link>


            <Link to="/watch">
              <button onClick={() => videoDispatch({ type: "WATCH_LATER", payload: id })}
                
              >
                Watch <i class="fa fa-clock-o" aria-hidden="true"></i>
              </button>
            </Link>

            <Link to="/subscribe">
            <button onClick={() => videoDispatch({ type: "SUBSCRIBE", payload: id })}>Subscribe</button>
            </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="middle">
        <div className="image-div">
          <div>
            {" "}
            <img className="iconn" src={videoMetaDataDetails.imageSrc}></img>
          </div>
          <div class="subscriber-content">
            <h5>{videoMetaDataDetails.channel}</h5> <h5>10k Subscribers</h5>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default VideoMetaData;