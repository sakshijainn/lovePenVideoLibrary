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
           
    
        default:
            return state;
    }
}