import React, { useEffect } from 'react'
import './topRated.css'
import { useDispatch, useSelector } from 'react-redux';
import { AllToprated, api, key } from '../../redux/ActionCreators/actionCreators';
import { Link } from 'react-router-dom';
function Toprated() {
    const dispatch=useDispatch();
    const storeRated=useSelector((state)=>state)
    const getToprated= async ()=>{
        const response=await fetch(`${api}tv/top_rated?${key}`,{method:"GET"});
        const data=await response.json();
        const trendResult=data.results;
        dispatch(AllToprated(trendResult));
    };
   useEffect(()=>{
    getToprated();
   },[]);
   console.log(storeRated);
    const btnPressPre=()=>{
        let ratebox=document.querySelector('.rated-container');
        if(ratebox){
        let width=ratebox.clientWidth;
        ratebox.scrollLeft=ratebox.scrollLeft-width;
        console.log(width);
    }
};
    const btnPressNext=()=>{
        let ratebox=document.querySelector('.rated-container');
        if(ratebox){
        let width=ratebox.clientWidth;
        ratebox.scrollLeft=ratebox.scrollLeft+width;
        }  
    };
  return (
    <div>
        <h5 style={{marginLeft:"50px"}}>Top Rated</h5>
       <div className='rated-carousel'>
        <button className='preRated-btn' onClick={btnPressPre}><p>&lt;</p></button>
        <button className='nextRated-btn'  onClick={btnPressNext}><p>&gt;</p></button>
        <div className='rated-container'>
            {storeRated.ott.topratedData?.map((rated)=>(<div className='ratedCard' >
            <Link key={rated.id} to={`/topratedDetails/${rated.id}`} style={{textDecoration:"none"}}><img id="image"  style={{height:"120px", minwidth:"180px",borderRadius:"10px",}} src={`https://image.tmdb.org/t/p/w500${rated.backdrop_path}`}/>
                <p>${rated.name} <span style={{color:"#1a98ff"}}>{`rating:${rated.vote_average}`}</span></p></Link>
            </div>
            ))}   
        </div>
        </div>
    </div>
  )
}
export default Toprated;