import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AllPopularDetails,api,key } from '../../redux/ActionCreators/actionCreators';
import './movieDetails.css';
import {PlayCircleFilled } from "@ant-design/icons";

function Populardetails(){
    const dispatch=useDispatch();
    const { id } = useParams();
  const popularDetails = useSelector((state) => state.ott.popularDetails);
const getPopDetails=async ()=>{
    try{
        if(!id){
            console.error('Movie ID is undefined.');
            return ;
        }

        const response = await fetch(`${api}tv/${id}?${key}`, { method: 'GET' });
        if (response.ok) {
            const data = await response.json();
            dispatch(AllPopularDetails(data));
          } else {
            console.error('Error fetching movie details:', response.status);
          }
    }
    catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    useEffect(() => {
        getPopDetails();
      }, [id]);

  

  const { name, original_language, overview,  first_air_date, backdrop_path } = popularDetails;
  return (
    <div>
        <main style={{display:"flex"}}>
            <div id="info" style={{flex:"1",marginTop:"100px",marginLeft:"50px"}}>
                <h1 id="title">{name}</h1>
                <h5 id="language">{original_language}</h5>
                <p id="descrption">{overview}</p>
                <button id="aired" style={{backgroundColor:"#33373d",border:"none",height:"30px"}}>{first_air_date}</button>
                <Link to="/playnow"><div style={{fontSize:"2rem",cursor:"pointer",}}><PlayCircleFilled /></div></Link>
            </div>
            <div id="poster"  style={{flex:"1" }}>
             <img alt={name} style={{ width: '100%' }} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
            </div>
        </main>
    </div>
  )
  }

export default Populardetails