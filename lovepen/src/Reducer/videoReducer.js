export const videoReducer =(state,action) =>{
    switch (action.type) {
        case "SET_VIDEOS":
            return { ...state, videos: action.payload };

            case "LIKE": {
                console.log(action.payload);
                return {
                  ...state,
                  likedVideos: state.likedVideos.includes(action.payload)
                    ? state.likedVideos.filter((id) => id !== action.payload)
                    : state.likedVideos.concat(action.payload),
                };
              }

              case "DISLIKE": {
                console.log(action.payload);
                return {
                    ...state ,
                    dislikedVideos : state.dislikedVideos.includes(action.payload)
                    ? state.dislikedVideos.filter((id)=> id!== action.payload)
                    : state.dislikedVideos.concat(action.payload)
                }
                
              }

            case "WATCH_LATER" :{
                console.log(action.payload);
                return {
                  ...state,
                  watchVideos: state.watchVideos.includes(action.payload)
                    ? state.watchVideos.filter((id) => id !== action.payload)
                    : state.watchVideos.concat(action.payload),
                };

            }

             case "HISTORY":
                 console.log(action.payload)
                    return {
                        ...state,
                        historyVideos: state.historyVideos.some(
                        (videoId) => videoId === action.payload
                        )
                        ? state.historyVideos
                            .filter((videoId) => videoId !== action.payload)
                            .concat(action.payload)
                        : state.historyVideos.concat(action.payload),
                    };
                
            case "SUBSCRIBE":
                console.log("subscribe")
                console.log(action.payload)
                return {
                    ...state,
                    subscribeChannels : state.subscribeChannels.includes(action.payload)
                    ? state.subscribeChannels.filter((id)=> id!== action.payload)
                    : state.subscribeChannels.concat(action.payload)
                }

            case "CREATE_NEW_PLAYLIST":
                    return { ...state, playlist: [...state.playlist, action.payload] };
              
            case "ADD_TO_PLAYLIST":
                    const { playlistID, videoId } = action.payload;
              
                    const singlePlaylist = [...state.playlist].map((onePlaylist) => {
                      if (onePlaylist.id === playlistID) {
                        const videoFind = !!onePlaylist.videosAdded.find(
                          (video) => video === videoId
                        );
                        if (videoFind) {
                          const videoFiltered = onePlaylist.videos.filter(
                            (video) => video !== videoId
                          );
                          return { ...onePlaylist, videosAdded: videoFiltered };
                        } else {
                          const newPlaylist = {
                            ...onePlaylist,
                            videosAdded: [...onePlaylist.videosAdded, videoId],
                          };
                          return newPlaylist;
                        }
                      }
                      return onePlaylist;
                    });
              
                    return { ...state, playlist: singlePlaylist };


            case "DELETE_PLAYLIST": {
                        const deletePlaylist = [...state.playlist].filter(
                          (onePlaylist) => onePlaylist.id !== action.payload
                        );
                        return { ...state, playlist: deletePlaylist };
                      }
                  
            case "REMOVE_VIDEO_FROM_PLAYLIST": {
                        const { playlistId, videoID } = action.payload;
                        console.log("playlistId:", playlistId)
                        console.log("videoId",videoID);
                        //map playlist :
                        const removeVideoFromPlaylist = [...state.playlist].map((onePlaylist)=>{
                          //match playlist-ids
                          if(onePlaylist.id ===playlistId)
                          {
                            const filteredVideo = onePlaylist.videosAdded.filter( (video) => video !== videoID );
                            return { ...onePlaylist, videosAdded: filteredVideo };
                          }
                          return onePlaylist;
                        })
                        return { ...state, playlist: removeVideoFromPlaylist };
                        
                      }

            case "SEARCH":
                        return { ...state, keyword: action.payload.toLowerCase() };
                  
            case "CLEAR_SEARCH":
                        return { ...state, keyword: "" };
           
    
        default:
            return state;
    }
}