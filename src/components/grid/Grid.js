import React from 'react'

// Styles
import './Grid.css'

// Routing
import { Link } from 'react-router-dom'

// API
import { IMAGE_URL } from '../../api-endpoints/requests'

function Grid({title, data}) {

    const arrayShuffler = (arr) => {
        let tempArray = [];

        while (arr.length !== 0) {
            let randomIndex = Math.floor(Math.random() * arr.length)
            tempArray.push(arr[randomIndex]);
            arr.splice(randomIndex, 1);
        }
        arr = tempArray;
        return arr
    }

    const shuffledArray = arrayShuffler([...data])

    const renderGrid = () => {
        return(
            shuffledArray.length ? 
                shuffledArray.map(item => {
                    return (
                        (item.poster_path &&
                            <Link key={item.id} to={{ pathname: `movie/${item.id}`, state: { item } }}>

                                <img
                                    src={`${IMAGE_URL}${item.poster_path}`}
                                    alt="poster"
                                    className="grid-poster"
                                />

                            </Link>
                        )

                    )
                })
            
            : <span style={{color: "white", fontSize: "1.4rem"}}>Loading...</span>       

        )
    }

    return (
        <div className="grid">
            <div className="grid-title">
                <h2>{title}</h2>
            </div>

            <div className="link-container">
                {renderGrid()}
            </div>
        </div>
    )
}

export default Grid
