import React, { createContext ,useContext , useReducer} from "react";
import {videoReducer} from "../Reducer/videoReducer"

export const VideoContext = createContext();

export function VideoProvider ({ children }) {
  
  const[state , videoDispatch] = useReducer( videoReducer , 
    {videos:[],
    likedVideos:[],
    watchVideos:[],
    historyVideos:[],
    subscribeChannels:[],
    dislikedVideos:[]
  })
  
  return (
    <VideoContext.Provider value={{ state , videoDispatch }}>
      {children}
    </VideoContext.Provider>
  );
};

export function useVideo()
{
   return useContext(VideoContext)
}