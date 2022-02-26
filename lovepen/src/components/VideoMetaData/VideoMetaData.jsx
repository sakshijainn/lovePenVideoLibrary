import React, { useEffect, useState } from "react";
import "./VideoMetaData.css";
import { useVideo } from "../../Context/VideoContext"
import { useParams } from "react-router";
import { Link } from "react-router-dom";

function VideoMetaData() {
  const {
    state: { videos },
    dispatch,
  } = useVideo();

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
            <Link to="/liked-videos">
              <button >
                like
              </button>
            </Link>

            <Link to="/watchList">
              <button
                
              >
                Watch <i class="fa fa-clock-o" aria-hidden="true"></i>
              </button>
            </Link>
            <button>Subscribe</button>
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