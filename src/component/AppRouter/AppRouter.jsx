
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Otthome from '../ott-home/ott-home';
import AllMovies from '../AllMovies/AllMovies';
import AllSeries from '../AllSeries/AllSeries';
import Search from '../search/search';
import TrendingDetails from '../movieDetails/trendingDetails';
import SearchDetails from '../search/serachDetails';
import WishList from '../wishList/wishList';
import Favorites from '../favorites/favorites';

import Homepage from '../homepage';
import { AuthProvider, useAuth } from './Auth';
import Populardetails from '../movieDetails/popular details';
import TopratedDetails from '../movieDetails/topratedDetails';
import AllMovieDetails from '../movieDetails/AllMovieDetails';
import Authentication from '../../authentication/authentication';
function AppRouter() {
   
    return (
        <AuthProvider>
            <Routes>
            <Route path="/" element={ <Authentication/>} />
                <Route path="/home" element={<ProtectedRoute component={<Otthome />} />} />
                <Route path="/movies" element={<ProtectedRoute component={<AllMovies />} />} />
                <Route path="/series" element={<ProtectedRoute component={<AllSeries />} />} />
                <Route path="/search" element={<ProtectedRoute component={<Search />} />} />
                <Route path="/wishlist" element={<ProtectedRoute component={<WishList />} />} />
                <Route path="/favorite" element={<ProtectedRoute component={<Favorites />} />} />
                <Route path="/trendingDetails/:id" element={<ProtectedRoute component={<TrendingDetails />} />} />
                <Route path="/popularDetails/:id" element={<ProtectedRoute component={<Populardetails />} />} />
                <Route path="/topratedDetails/:id" element={<ProtectedRoute component={<TopratedDetails />} />} />
                <Route path="/allmoviedetails/:id" element={<ProtectedRoute component={<AllMovieDetails />} />} />
                <Route path="/search/:id" element={<ProtectedRoute component={<SearchDetails />} />} />
                <Route path="/signin" element={<Homepage />} />
            </Routes>
        </AuthProvider>
       
    );
}
const ProtectedRoute = ({ component, redirectTo }) => {
    const { user } = useAuth();
    return user ? component : <Authentication/>;
};
export default AppRouter;


