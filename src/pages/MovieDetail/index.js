import React,{ useEffect } from 'react';
import { Container, CircularProgress,Typography } from "@material-ui/core";

import {searchMovieById} from '../../redux/actions/search';
import {movieResult as movieResultSelector} from '../../redux/selectors'
import { useDispatch, useSelector} from 'react-redux';
export default ({match}) =>{
    const dispatch = useDispatch();
    const movieResult = useSelector(state => movieResultSelector(state));
    
    useEffect(()=>{
        const movieId = match.params.id;
        if(!movieResult || movieResult && movieResult.imdbID !==movieId){
            
           // console.log(match);
            dispatch(searchMovieById({
              movieId 
            }))
        }
    });    
        if(!movieResult){
          return <CircularProgress size={100} color="primary"></CircularProgress>
          
        }else{
         //   console.log(movieResult.Title);
   
        }

   
    
    return(
        <Container>
       <Typography variant="h3">{movieResult.Title}</Typography>
       <img  src={movieResult.Poster} alt={movieResult.Title}/>
       <Typography>Actores: {movieResult.Actors}</Typography>
       <Typography>Director: {movieResult.Director}</Typography>
       <Typography>Pais: {movieResult.Country}</Typography>
       <Typography>Clasificacion: {movieResult.Rated}</Typography>
       <Typography>Premios: {movieResult.Awards}</Typography>
       <Typography>Sinpisis: {movieResult.Plot}</Typography>
        </Container>
    )
}