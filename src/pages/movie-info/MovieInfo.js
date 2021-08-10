import React from 'react'

// Styles
import './MovieInfo.css'

//API
import { IMAGE_URL } from '../../api-endpoints/requests'

function MovieInfo({location}) {

    const path = location.state.item      //location is passed using react router

    const url = `${IMAGE_URL}${path.backdrop_path}`
    
    return (
        <div className="movie-info">
            <div className="banner" style={{ backgroundImage: `url(${url})` }}>
                <div className="fade">
                    <div className="info-container">

                        <h1 className="banner-title">
                            {path.title || path.name}
                        </h1>

                        <span className="movie-rating">
                            Rating: <span style={{ color: 'white', fontSize: '1.4rem' }}>{path.vote_average}</span>/10
                        </span>

                        <p className="banner-description">
                            {path.overview}
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo
