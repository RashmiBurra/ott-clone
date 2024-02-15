import React, { useEffect } from 'react';
import { AllTrendingDetails, api, key } from '../../redux/ActionCreators/actionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './movieDetails.css'
function TrendingDetails() {
  const dispatch = useDispatch();
  const {id}=useParams();
  const movieDetails=useSelector((state)=>state.ott.trendingDetails);
  const getMovieDetails = async () => {
    try {
      if (!id) {
        console.error('Movie ID is undefined.');
        return;
      }

      const response = await fetch(`${api}movie/${id}?${key}`, { method: 'GET' });

      if (response.ok) {
        const data = await response.json();
        dispatch(AllTrendingDetails(data));
      } else {
        console.error('Error fetching movie details:', response.status);
      }
    } catch (error) {
      console.error('Error fetching movie details:', error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, [id]);
  const { title, original_language, overview, release_date, backdrop_path } = movieDetails;
  return (
    <div>
       <main style={{display:"flex"}}>
            <div id="info" style={{flex:"1",marginTop:"100px",marginLeft:"50px"}}>
                <h1 id="title">{title}</h1>
                <h5 id="language">{original_language}</h5>
                <p id="descrption">{overview}</p>
                <button id="aired" style={{backgroundColor:"#33373d",border:"none",width:"50px",height:"30px"}}> {release_date && release_date.split('-')[0]}</button>
                
            </div>
            <div id="poster"  style={{flex:"1" }}>
            {backdrop_path && <img alt={title} style={{ width: '100%' }} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />}
            </div>
        </main>
    </div>
  )
}

export default TrendingDetails