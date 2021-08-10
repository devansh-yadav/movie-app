import React from 'react'

// Styles
import './Row.css'

// Routing
import { Link } from 'react-router-dom';

// API
import { IMAGE_URL } from '../../api-endpoints/requests'

function Row({ title, movies }) {

    const arrayShuffler = (arr) => {
        let tempArray = [];

        while (arr.length !== 0) {
            let randomIndex = Math.floor(Math.random() * arr.length)
            tempArray.push(arr[randomIndex]);
            arr.splice(randomIndex, 1);
        }
        arr = tempArray;
        return arr;
    }

    const shuffledArray = arrayShuffler([...movies])

    const renderRow = () => {
        return (
            shuffledArray.length ?
                shuffledArray.map(item => {
                    return (
                        (item.backdrop_path &&
                            <Link key={item.id} className="link" to={{ pathname: `item/${item.id}`, state: { item } }}>

                                <img
                                    src={`${IMAGE_URL}${item.backdrop_path}`}
                                    alt={item.title || item.name}
                                    className="row-poster"
                                />

                                <div className="metadata">

                                    <h3 className="item-title">
                                        {item.title || item.name}
                                    </h3>

                                    <p>
                                        {item.overview.length > 120 ? item.overview.substr(0, 120) + "..." : item.overview}
                                    </p>

                                </div>
                            </Link>
                        )

                    )
                }) :

                <span style={{ color: '#a3a3a3', fontSize: '1.4rem' }} >Loading...</span>

        )
    }

    return (
        <div className="row">

            <h2>{title}</h2>

            <div className="row-posters" >
                {renderRow()}
            </div>

        </div>
    )
}

export default Row
