import React from "react";
import { useVideo } from "../../Context/VideoContext";
import "./Playlist.css"
import {AiFillDelete} from "react-icons/ai"

function Playlist() {
  const { state,videoDispatch} = useVideo();

  const deleteVideoFromPlaylist = (playlistId, id) => {
    videoDispatch({
      type: "REMOVE_VIDEO_FROM_PLAYLIST",
      payload: { playlistId, videoID: id },
    });
  };



  const deletePlaylist = (id) => {
    videoDispatch({ type: "DELETE_PLAYLIST", payload: id });
  };
 
 
  console.log(state.playlist)
  return (
    <div className="recommendedVideos">
      <h2>Playlists</h2>
      <div className="recommendedVideos_video">
        {state.playlist.map(({ id,name, videosAdded }) => {
          return videosAdded.map((videoId) => {
            const check = state.videos.find((video) => video.id === videoId);
             console.log(check)
            return (
              <div className="playlistcard">
                <div className="videoCard">
                  <h3>Playlist Name:{name}</h3>
                  <iframe
                    src={`https://www.youtube.com/embed/${check.id}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                  />

                  <div className="video_info">
                    <div className="avatar">
                      <img src={check.imageSrc} alt="" />
                    </div>
                    <div className="video-text">
                      <h4>{check.title}</h4>
                      <p>{check.channel}</p>
                      <p>
                        {check.views}.{check.timestamp}
                      </p>
                    </div>
                  </div>
                  <div className="buttons-container">

                    <div  className="buttons">
                    <button
                      onClick={() => deletePlaylist(id)}
                    >
                      <AiFillDelete/> Playlist
                    </button>
                    <button
                      onClick={() =>
                        deleteVideoFromPlaylist(id, check.id)
                      }
                    >
                      <AiFillDelete/> Video
                    </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>
    </div>
  );


  // return (
  //   <div className="recommendedVideos">
  //     <h2>Playlists</h2>

  //     {state.playlist.map(({name,id,videosAdded})=>{
  //       return videosAdded.map((videoId)=>{
  //         const check = state.videos.find((video)=>video.id===videoId)

  //         console.log(check)

  //         return (
  //           <>
  //           <h3>Playlist Name:{name}</h3>
  //           <iframe
  //                   src={`https://www.youtube.com/embed/${check.id}`}
  //                   frameBorder="0"
  //                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  //                   allowFullScreen
  //                   title="Embedded youtube"
  //                 />
  //          </>
  //         )
  //       })

  //     })}
      

             
          
  //   </div>
  // );
}

export default Playlist;