import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AllmovieAction, api, key } from '../../redux/ActionCreators/actionCreators';
import { genHoverStyle } from 'antd/es/input/style';
import { Link } from 'react-router-dom';
function AllMovies() {
    const dispatch=useDispatch();
    const storeMovie=useSelector((state)=>state)
    const getAllMovies= async ()=>{
        const response=await fetch(`${api}discover/movie?${key}`,{method:"GET"});
        const data=await response.json();
        const result=data.results;
        dispatch(AllmovieAction(result));
    };

   useEffect(()=>{
    getAllMovies();
   },[]);
    console.log(storeMovie); 
  return (
    <div  style={{backgroundColor:"black"}}>
   <div style={{marginLeft:"20px",marginRight:"20px"}}>
   <div className='row' style={{backgroundColor:"black"}}>
   {storeMovie.ott.allMovieData?.map((movie)=>( <div className='col col-12 col-md-4 col-sm-4 col-lg-2'>
   <div>
  <Link key={movie.id} to={`/allmoviedetails/${movie.id}`}  style={{textDecoration:"none"}}><img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} className="card-img-top" alt="image"/>
  <p>{movie.title}</p></Link>
</div>
</div>
))}
</div>
   </div>
   </div>
  )
  }
export default AllMovies