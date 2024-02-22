import React, { useEffect } from 'react'
import './popular.css'
import { useDispatch, useSelector } from 'react-redux';
import { AllPopular,api,key } from '../../redux/ActionCreators/actionCreators';
import { Link } from 'react-router-dom';
function Popular() {
    const dispatch=useDispatch();
    const storePopular=useSelector((state)=>state)
    const getPopular = async () => {
        try {
          const response = await fetch(`${api}tv/popular?${key}`, { method: "GET" });
          if (response.ok) {
            const data = await response.json();
            const popularResult = data.results;
            dispatch(AllPopular(popularResult));
          } else {
            console.error('Error fetching popular movies:', response.status);
          }
        } catch (error) {
          console.error('Error fetching popular movies:', error);
        }
      };
    
      useEffect(() => {
        getPopular();
      }, []);

   console.log(storePopular);
    const btnPressPrePop=()=>{
        let popBox=document.querySelector('.popular-container')
        if(popBox){
        let widthPop=popBox.clientWidth;
        popBox.scrollLeft=popBox.scrollLeft-widthPop;
        console.log(widthPop);
    }
};
    const btnPressNextPop=()=>{
        let popBox=document.querySelector('.popular-container')
        if(popBox){
        let widthPop=popBox.clientWidth;
        popBox.scrollLeft=popBox.scrollLeft+widthPop;
    }
};
  return (
    <div>
            <h5 style={{marginLeft:"50px"}}>Popular</h5>
    <div className='popular-carousel'>
        <button className='prePop-btn' onClick={btnPressPrePop}><p>&lt;</p></button>
        <button className='nextPop-btn'  onClick={btnPressNextPop}><p>&gt;</p></button>
        <div className='popular-container'>
            {storePopular.ott.popularData?.map((e)=>(
            
                <div className='popular-card'  key={e.id}>
                  <Link key={e.id} to={`/popularDetails/${e.id}`} style={{textDecoration:"none"}}>{e.backdrop_path?(<img style={{ height: "120px", minWidth: "180px", borderRadius: "10px" }} src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} alt={e.name} />):(<img style={{ height: "120px", minWidth: "180px", borderRadius: "10px" }} src="https://www.freeiconspng.com/uploads/no-image-icon-6.png" alt="Placeholder" />)}
                  <p>{e.name}</p></Link>
                </div>
             
            ))}   
        </div>
    </div>
    </div>
  );
}

export default Popular
