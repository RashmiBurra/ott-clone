
import React, { useEffect, useState } from 'react';
import { HeartTwoTone } from "@ant-design/icons";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AllFavorites, AllWishList, api, key } from '../../redux/ActionCreators/actionCreators';
import {notification} from 'antd';

function SearchDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [isRedHeart, setIsRedHeart] = useState(false);
  const [isAddedToWatchLater, setIsAddedToWatchLater] = useState(false);

   const dispatch=useDispatch();


  useEffect(() => {
    fetch(`${api}movie/${id}?${key}`)
      .then(response => response.json())
      .then(data => setMovieDetails(data));
  }, [id]);

  const handleHeartClick = () => {
    setIsRedHeart(!isRedHeart);
    dispatch(AllFavorites(movieDetails));
    notification.open({
      description: (
        <span style={{ color: 'white'}}>
          {movieDetails.title} has been added to your favorites.
        </span>
      ),
      style: {
        backgroundColor: 'black',
      }
    });
  };
  const handleWatchLater = () => {
    dispatch(AllWishList(movieDetails));
    setIsAddedToWatchLater(true);
    notification.open({
      description: (
        <span style={{ color: 'white' }}>
          {movieDetails.title} has been added to your wishlist.
        </span>
      ),
      style: {
        backgroundColor: 'black',
      }
    });

  };
  return (
    <div>
      <main style={{ display: "flex" }}>
        <div id="info" style={{ flex: "1", marginTop: "100px", marginLeft: "50px" }}>
          <h1 id="title">{movieDetails.title}</h1>
          <h5 id="language">Original Language: {movieDetails.original_language}</h5>
          <p id="descrption">{movieDetails.overview}</p>
          <button id="aired" style={{ backgroundColor: "#33373d", border: "none",  height: "30px" }}>{movieDetails.release_date}</button>
          <div style={{ display: "flex", marginTop: "50px", gap: "2rem" }}>
            
            <button id="watch later" style={{ border: "none", backgroundColor: "white", color: "black", width: "100px", borderRadius: "10px"}} onClick={handleWatchLater} disabled={isAddedToWatchLater}>{isAddedToWatchLater ? "Added" : "Watch Later"}</button>
            <div id="fav"  onClick={handleHeartClick} style={{ cursor: "pointer" }}> {isRedHeart ? (
                <HeartTwoTone twoToneColor="red" style={{ fontSize: "3rem" }} />
              ) : (
                <HeartTwoTone twoToneColor="#fff" style={{ fontSize: "3rem" }} />
              )} </div>
          </div>
        </div>
        <div id="poster" style={{ flex: "1" }}>
          <img alt="Movie Poster" style={{ width: '100%' ,height:"50%"}} src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} />
        </div>
      </main>
    </div>
  );
};
export default SearchDetails;


        



