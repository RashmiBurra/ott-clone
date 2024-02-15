import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AllMovieList, api,key } from '../../redux/ActionCreators/actionCreators';
import './movieDetails.css';
import {PlayCircleFilled } from "@ant-design/icons";

function AllMovieDetails() {
    const dispatch=useDispatch();
    const { id } = useParams();
  const allmovieDetails = useSelector((state) => state.ott.allmovieDetails);
const getAllMovieDetails=async ()=>{
    try{
        if(!id){
            console.error('Movie ID is undefined.');
            return ;
        }

        const response = await fetch(`${api}movie/${id}?${key}`, { method: 'GET' });
        if (response.ok) {
            const data = await response.json();
            dispatch(AllMovieList(data));
          } else {
            console.error('Error fetching movie details:', response.status);
          }
    }
    catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    useEffect(() => {
        getAllMovieDetails();
      }, [id]);

      const { title, original_language, overview,  release_date, backdrop_path } = allmovieDetails;
  return (
    <div style={{backgroundColor:"black"}}>
        <main style={{display:"flex"}}>
            <div id="info" style={{flex:"1",marginTop:"100px",marginLeft:"50px"}}>
                <h1 id="title">{title}</h1>
                <h5 id="language">{original_language}</h5>
                <p id="descrption">{overview}</p>
                <button id="aired" style={{backgroundColor:"#33373d",border:"none",height:"30px"}}>{release_date}</button>
                <Link to="/playnow"><div style={{fontSize:"2rem",cursor:"pointer",}}><PlayCircleFilled /></div></Link>
            </div>
            <div id="poster"  style={{flex:"1" }}>
             <img alt={title} style={{ width: '100%' }} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
            </div>
        </main>
    </div>
  )
}

export default AllMovieDetails