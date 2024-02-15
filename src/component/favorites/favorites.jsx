
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AllRemoveFav } from '../../redux/ActionCreators/actionCreators';
import {HeartTwoTone} from '@ant-design/icons'
function Favorites() {
  const favorites = useSelector((state) => state.ott.favorites);
  const dispatch = useDispatch();
  const handleRemoveClick = (movieId) => {
    dispatch(AllRemoveFav(movieId));
  };
  if (!Array.isArray(favorites) || favorites.length === 0) {
    return <div>No items in favorites</div>;
  }
  return (
    <div style={{backgroundColor:"black"}}>
      {favorites.map((movie) => (
        <div key={movie.id} style={{ marginLeft: "20px", marginRight: "20px", marginTop: "20px" }}>
          <div className='row'>
            <div className='col col-12 col-md-4 col-sm-4 col-lg-2'>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="image" />
                <div style={{  display: "flex",gap:"0.5rem" }}>
                  <button
                    style={{ fontSize:"2rem" ,border:"none",backgroundColor:"black"}}
                    onClick={() => handleRemoveClick(movie.id)}
                  >
                    <HeartTwoTone/>
                  </button>
                  <p style={{ width: "100%", height: "100%",marginTop:"10px"}}>{movie.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Favorites;
