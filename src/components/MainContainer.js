
import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowplayingMovies);
    if(!movies) return;

    const mainmovies = movies[0];
    
    const {original_title , overview , id} = mainmovies
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer;