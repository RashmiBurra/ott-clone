import { ACTION_TYPES } from "../redux/ActionTypes/actionTypes";


const globalState={
    allcarouselData:null,
    allMovieData:null,
    allSeriesData:null,
    trendingData:null,
    popularData:null,
    topratedData:null,
    trendingDetails:{},
    popularDetails:{},
    topratedDetails:{},
    allmovieDetails:{},
    wishListMovies:[],
    favorites:[],


}

export const ottReducer=(state=globalState,action)=>{
    switch(action.type){
        case ACTION_TYPES.CAROUSEL:
            return {...state, allcarouselData:action.payload}
        case ACTION_TYPES.ALLMOVIES:
            return {...state, allMovieData:action.payload}
        case ACTION_TYPES.ALLSERIES:
            return {...state,allSeriesData:action.payload}
        case ACTION_TYPES.TRENDING:
            return {...state,trendingData:action.payload}
        case ACTION_TYPES.POPULAR:
            return {...state,popularData:action.payload}
        case ACTION_TYPES.TOPRATED:
            return {...state,topratedData:action.payload}
        case ACTION_TYPES.TRENDINGDETAILS:
            return {...state,trendingDetails:action.payload} 
         case ACTION_TYPES.POPULARDETAILS:
            return {...state,popularDetails:action.payload} 
        case ACTION_TYPES.TOPRATEDDETAILS:
            return {...state,topratedDetails:action.payload} 
            case ACTION_TYPES.WISHLIST:
                return { ...state, wishListMovies: [...state.wishListMovies, ...action.payload] };
        case ACTION_TYPES.REMOVELIST:
                return {...state, wishListMovies: state.wishListMovies.filter((movie) => movie.id !== action.payload),};

        case ACTION_TYPES.FAVORITE:
                    return {...state,favorites: [...state.favorites, action.payload],};
        
        case ACTION_TYPES.REMOVEFAV:
                    return {...state, favorites: state.favorites.filter((movie) => movie.id !== action.payload),};
        
        case ACTION_TYPES.ALLMOVIEDETAILS:
                    return {...state, allmovieDetails:action.payload};
        
        default:
        return state;
    }
}