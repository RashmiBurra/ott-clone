
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllRemoveList } from '../../redux/ActionCreators/actionCreators';
function WishList() {
  const state = useSelector((state) => state);
  const wishList = useSelector((state) => state.ott.wishListMovies);
  const dispatch = useDispatch();
  console.log('State:', state);
  console.log('Wish List:', wishList);
  if (!Array.isArray(wishList) || wishList.length === 0) {
    return <div>No items in the wishlist</div>;
  }
  const handleRemoveClick = (movieId) => {
    dispatch(AllRemoveList(movieId));
  };
  return (
    <>
    <div  style={{backgroundColor:"black"}}>
    <div>
      {wishList.map((movie) => (
        <div key={movie.id} style={{ marginLeft: "20px", marginRight: "20px", marginTop: "20px" }}>
          <div className='row'>
            <div className='col col-12 col-md-4 col-sm-4 col-lg-2'>
              <div>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="card-img-top" alt="image" />
                <div style={{ display: "flex",gap:"0.5rem" }}>
                  <button
                    style={{ backgroundColor: "#1a98ff", color: "white", border: "none", padding: "5px" }}
                    onClick={() => handleRemoveClick(movie.id)}
                  >
                    Remove
                  </button>
                  <p style={{ width: "100%", height: "100%",marginTop:"10px"}}>{movie.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
};
export default WishList;
