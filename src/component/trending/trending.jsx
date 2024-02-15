import React, { useEffect } from 'react'
import './trending.css'
import { useDispatch, useSelector } from 'react-redux';
import { AllTrending, api, key } from '../../redux/ActionCreators/actionCreators';
import { Link } from 'react-router-dom';
function Trending() {
    
    const dispatch=useDispatch();
    const storeTrend=useSelector((state)=>state)
    const getTrending= async ()=>{
        const response=await fetch(`${api}trending/movie/day?${key}`,{method:"GET"});
        const data=await response.json();
        const trendResult=data.results;
        dispatch(AllTrending(trendResult));
    };
   useEffect(()=>{
    getTrending();
   },[]);
   console.log(storeTrend);
    const btnPressPre=()=>{
        let Trendbox=document.querySelector('.product-container');
        if(Trendbox){
        let width=Trendbox.clientWidth;
        Trendbox.scrollLeft=Trendbox.scrollLeft-width;
        console.log(width);
    }
};
    const btnPressNext=()=>{
        let Trendbox=document.querySelector('.product-container');
        if(Trendbox){
        let width=Trendbox.clientWidth;
        Trendbox.scrollLeft=Trendbox.scrollLeft+width;
        }  
    };
      return (
        <div>
            <h5 style={{marginLeft:"50px"}}>Trending</h5>
        <div className='trending-carousel'>
        <button className='pre-btn' onClick={btnPressPre}><p>&lt;</p></button>
        <button className='next-btn'  onClick={btnPressNext}><p>&gt;</p></button>
        <div className='product-container'>
       {storeTrend.ott.trendingData?.map((ele)=>(<div className='myCard' >
       <Link key={ele.id} to={`/trendingDetails/${ele.id}`} style={{textDecoration:"none"}}><img  style={{height:"120px", Width:"180px",borderRadius:"10px",}}src={`https://image.tmdb.org/t/p/w500${ele.backdrop_path}`}/>
                <p>{ele.title}</p></Link>
                </div> 
                ))}
              
        </div>
        </div>
        </div>
      )
}
export default Trending


