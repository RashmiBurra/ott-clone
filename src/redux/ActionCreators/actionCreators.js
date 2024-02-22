import {ACTION_TYPES} from '../ActionTypes/actionTypes'

 export const  api=`https://api.themoviedb.org/3/`;
 export const key=`api_key=c934846d370ecddf45905bf4623e1c73`;


export const AllmovieAction=(data)=>{
    return {type:ACTION_TYPES.ALLMOVIES,payload:data}
}

export const AllCarouselMovie=(data)=>{
    return {type:ACTION_TYPES.CAROUSEL,payload:data}
}

export const AllSeriesAction=(series)=>{
    return {type:ACTION_TYPES.ALLSERIES,payload:series}
}

export const AllTrending=(trend)=>{
    return {type:ACTION_TYPES.TRENDING,payload:trend}
}

export const AllPopular=(pop)=>{
    return {type:ACTION_TYPES.POPULAR,payload:pop}
}

export const AllToprated=(rate)=>{
    return {type:ACTION_TYPES.TOPRATED,payload:rate}
}

export const AllTrendingDetails=(ids)=>{
    return {type:ACTION_TYPES.TRENDINGDETAILS,payload:ids}
}

export const AllPopularDetails=(details)=>{
    return {type:ACTION_TYPES.POPULARDETAILS,payload:details}
}

export const AllTopratedDetails=(details)=>{
    return {type:ACTION_TYPES.TOPRATEDDETAILS,payload:details}
}

export const AllWishList = (wish) => {
    const wishlistArray = Array.isArray(wish) ? wish : [wish];
    return { type: ACTION_TYPES.WISHLIST, payload: wishlistArray };
  };

  export const AllRemoveList=(removeId)=>{
    return {type:ACTION_TYPES.REMOVELIST,payload:removeId}
}

export const AllFavorites = (fav) => {
   return{ type: ACTION_TYPES.FAVORITE,
    payload: fav,
  }
};

export const AllRemoveFav=(favId)=>{
    return {type:ACTION_TYPES.REMOVEFAV,payload:favId}
}

export const AllMovieList=(id)=>{
    return {type:ACTION_TYPES.ALLMOVIEDETAILS,payload:id}
}