import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllSeriesAction, api, key } from '../../redux/ActionCreators/actionCreators';
import { Link } from 'react-router-dom';
function AllSeries() {
    const dispatch=useDispatch();
    const storeSeries=useSelector((state)=>state)
    const getAllSeries= async ()=>{
        const response=await fetch(`${api}discover/tv?${key}`,{method:"GET"});
        const movieData=await response.json();
        const seriesResult=movieData.results;
        dispatch(AllSeriesAction(seriesResult));
        console.log(seriesResult);
    };
   useEffect(()=>{
    getAllSeries();
   },[]);
   console.log(storeSeries);
  return (
    <div style={{backgroundColor:"black"}}>
   <div  style={{marginLeft:"20px",marginRight:"20px",backgroundColor:"black"}}>
    <div className='row'>
   {storeSeries.ott.allSeriesData?.map((series)=>( <div className='col col-12 col-md-4 col-sm-4 col-lg-2'>
   <div >
 <Link key={series.id} to={`/popularDetails/${series.id}`} style={{textDecoration:"none"}}> <img src={`https://image.tmdb.org/t/p/w500${series.backdrop_path}`} class="card-img-top" alt="image"/>
  <p>{series.name}</p></Link>
</div>
</div>
))}
</div>
   </div>
   </div>
  )
};
export default AllSeries