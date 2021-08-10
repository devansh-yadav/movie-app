import React from 'react';

// Styles
import './HomePage.css';

// Components
import Row from '../../components/row/Row';

// Redux
import { useSelector } from 'react-redux';

function HomePage() {

    const movies = useSelector(state => state.moviesData.moviesByCategory)

    return (
        <div className="homepage">

            <div className="row-container">
                <Row title="Netflix Originals" movies={movies.netflixOriginals} />
                <Row title="Trending Now" movies={movies.trending}/>
                <Row title="Top Rated" movies={movies.topRated}/>
                <Row title="Action Movies" movies={movies.actionMovies}/>
                <Row title="Romance Movies" movies={movies.romanceMovies}/>
                <Row title="Comedy Movies" movies={movies.comedyMovies}/>
                <Row title="Horror Movies" movies={movies.horrorMovies}/>
                <Row title="Documentaries" movies={movies.documentaries}/>
            </div>

        </div>
    )
}

export default HomePage
