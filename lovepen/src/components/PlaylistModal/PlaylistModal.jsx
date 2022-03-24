import React, { useState } from "react";
import "./PlaylistModal.css";
import { useVideo } from "../../Context/VideoContext";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";

const PlaylistModal = ({ closeModal, videoId }) => {
  const { state, videoDispatch } = useVideo();
  const { playlist } = state;
  const [form, setForm] = useState("");

  console.log(playlist);

  const checkHandler = (e, playlistID, videoId) => {
    videoDispatch({
      type: "ADD_TO_PLAYLIST",
      payload: { playlistID, videoId },
    });
  };

  const findVideo = (videoId, videosAdded) => {
    return videosAdded.some((val) => val === videoId);
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <button className="titleCloseBtn" onClick={() => closeModal(false)}>
          {" "}
          X{" "}
        </button>
        <div className="modalTitle">
          <h2>Add to a playlist?</h2>
        </div>
        <div className="modalBody">
          {playlist.map(({ id, name, videosAdded }) => (
            <div key={id}>
              <p>
                {name}
                <input
                  type="checkbox" 
                  onChange={(e) => checkHandler(e, id, videoId)}
                  checked={findVideo(videoId, videosAdded)}
                />
                
              </p>
            </div>



          ))}
          </div>
          <div className="modalBody">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              onChange={(e) => {
                setForm(e.target.value);
              }}
              required
            />
            <button
              onClick={() =>
                videoDispatch({
                  type: "CREATE_NEW_PLAYLIST",
                  payload: {
                    id: uuidv4(),
                    name: form,
                    videosAdded: [],
                  },
                })
              }
              className="btn"
            >
              Add
            </button>
          </form>
        </div>
        <div className="modalFooter">
          <button className="cancelBtn " onClick={() => closeModal(false)}>
            Cancel
          </button>
          <Link to="/playlist">
            <button>Continue</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PlaylistModal;
