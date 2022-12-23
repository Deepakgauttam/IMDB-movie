import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import './MovieList.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const MovieList = () => {
    
    const [movieList, setMovieList] = useState([]);
    const {type} = useParams();

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        getData()
    }, [type])

    const getData = async() => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${
            type ? type : "popular"
          }?api_key=19b71eeea0f9b7c99e7c5f3c389414b4&language=en-US`
        );
        setMovieList(data.results);
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(type ? type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map(movie => (
                        <Card movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList