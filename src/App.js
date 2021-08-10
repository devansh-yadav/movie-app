import React, { useEffect } from 'react';

// Routing
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Redux
import { useDispatch } from 'react-redux';

// Components
import NavBar from './components/navbar/NavBar';
import HomePage from './pages/homepage/HomePage';
import TvShows from './pages/popular-tv-shows/TvShows';
import PopularMovies from './pages/popular-movies/PopularMovies';
import MovieInfo from './pages/movie-info/MovieInfo';
import { fetchMovies } from './redux/movies/fetchMoviesSlice';

function App() {
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies())
  })

  return (

    <Router>
      
      <NavBar />

      <Switch>
        
        <Route exact path="/" component={HomePage} />
        <Route exact path="/tv-shows" component={TvShows} />
        <Route exact path="/movies" component={PopularMovies} />
        <Route path="/:item/:id" component={MovieInfo} />

      </Switch>

    </Router>
    
  );
}

export default App;
