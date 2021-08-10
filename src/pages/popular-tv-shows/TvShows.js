import React from 'react'

// Styles
import './TvShows.css'

// Redux
import { useSelector } from 'react-redux'

// Components
import Grid from '../../components/grid/Grid'

function TvShows() {

    const popularTvShows = useSelector(state => state.moviesData.moviesByCategory.popularTvShows)

    return (
        <div>
            <Grid title="Popular TV Shows" data={popularTvShows}/>
        </div>
    )
}

export default TvShows


