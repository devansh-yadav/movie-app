import React from 'react'

// Styles
import './PopularMovies.css'

// Redux
import { useSelector } from 'react-redux'

// Components
import Grid from '../../components/grid/Grid'

function PopularMovies() {

    const popularMovies = useSelector(state => state.moviesData.moviesByCategory.popularMovies)

    return (
        <div>
            <Grid title="Popular Movies" data={popularMovies} />
        </div>
    )
}

export default PopularMovies
