import React, { createContext ,useContext , useReducer} from "react";
import {videoReducer} from "../Reducer/videoReducer"
import { v4 as uuidv4 } from 'uuid'

export const VideoContext = createContext();

export function VideoProvider ({ children }) {
  
  const[state , videoDispatch] = useReducer( videoReducer , 
    {videos:[],
    likedVideos:[],
    watchVideos:[],
    historyVideos:[],
    subscribeChannels:[],
    dislikedVideos:[],
    playlist: [{ id: uuidv4(), name: 'sakshijain', videosAdded: [] }],
    keyword: ''
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