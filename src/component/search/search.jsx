
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './search.css';
import { api, key } from '../../redux/ActionCreators/actionCreators';
function Search() {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    fetch(`${api}search/movie?query=${search}&${key}`).then(
      response=>response.json()
    ).then(value=>(setData(value.results)))    
  };

  return (
    <div className='search-color'>
      <form style={{ marginLeft: "70%", marginBottom: "10px" }} onSubmit={submitHandler}>
        <input type="text" placeholder='search' id="search" value={search} onChange={(e) => setSearch(e.target.value)} />
        <button id="btn">search</button>
      </form>
      <div className='row' style={{ marginLeft: "20px", marginRight: "20px" }}>
        {data?.map((movie) => (
          <div key={movie.id} className='col col-12 col-md-4 col-sm-4 col-lg-2'>
            <Link to={`/search/${movie.id}`}  style={{textDecoration:"none"}}>
              <div>
                {movie.backdrop_path ? (
                  <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} class="card-img-top" alt="image" />
                ) : (
                  <img src='https://tse4.mm.bing.net/th?id=OIP.76HOaIYxVtm1tb1ESGWeRwHaEo&pid=Api&P=0&h=180' className='card-img-top' alt='Default Image' />
                )}
                <p>{movie.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Search;