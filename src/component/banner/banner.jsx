import React, { useEffect } from 'react'
 import { Carousel }from 'antd';
import './banner.css';
import { useDispatch, useSelector } from 'react-redux';
import { AllCarouselMovie, api, key } from '../../redux/ActionCreators/actionCreators';
import { Link } from 'react-router-dom';
function Banner() {
  const dispatch=useDispatch();
  const storeCarousel=useSelector((state)=>state)
  const getCarousel=async()=>{
    const response=await fetch(`${api}discover/movie?${key}`,{method:"GET"});
    const data=await response.json();
    const result=data.results;
    dispatch(AllCarouselMovie(result));
  };

  useEffect(()=>{
    getCarousel();
  },[]);

  return (
 <div className='carouselBanner' style={{backgroundColor:"black"}}>
    <Carousel autoplay
       dots={true}
      autoplaySpeed={2000}>
        {storeCarousel.ott.allcarouselData?.slice(0, 7).map((movie,index)=>( <div className='container-fluid'>
        <Link key={movie.id} to={`/allmoviedetails/${movie.id}`}  style={{textDecoration:"none"}}> <img  className="bannerImage"src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title}/></Link>
    <p id="rank">{`#${index+1} in trending`}</p>
       <p>{movie.title}</p>  
     </div>
       ))}
      </Carousel>
  </div>
  ) 
}
export default Banner;
