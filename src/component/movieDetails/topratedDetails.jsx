import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AllTopratedDetails,api,key } from '../../redux/ActionCreators/actionCreators';
import './movieDetails.css'

function TopratedDetails() {
    const dispatch=useDispatch();
    const { id } = useParams();
  const topratedDetails = useSelector((state) => state.ott.topratedDetails);
const getTopDetails=async ()=>{
    try{
        if(!id){
            console.error('Movie ID is undefined.');
            return ;
        }

        const response = await fetch(`${api}tv/${id}?${key}`, { method: 'GET' });
        if (response.ok) {
            const data = await response.json();
            dispatch(AllTopratedDetails(data));
          } else {
            console.error('Error fetching movie details:', response.status);
          }
    }
    catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    useEffect(() => {
        getTopDetails();
      }, [id]);


  const { name, original_language, overview,  first_air_date, backdrop_path,vote_average  } = topratedDetails;
  return (
    <div>
    <main style={{display:"flex"}}>
            <div id="info" style={{flex:"1",marginTop:"100px",marginLeft:"50px"}}>
                <h1 id="title">{name}</h1>
                <h5 id="language">{original_language}</h5>
                <p id="descrption">{overview}</p>
                <button id="aired" style={{backgroundColor:"#33373d",border:"none",height:"30px",padding:"5px"}}>{first_air_date}</button><br/><br/>
                <button id="aired" style={{backgroundColor:"#33373d",border:"none",height:"30px",padding:"5px"}}>{vote_average}</button>
            </div>
            <div id="poster"  style={{flex:"1" }}>
             <img alt={name} style={{ width: '100%' }} src={`https://image.tmdb.org/t/p/w500${backdrop_path}`} />
            </div>
        </main>
    </div>
  )
}

export default TopratedDetails