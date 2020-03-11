import { Container,CircularProgress } from "@material-ui/core"
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react'
import queryString from 'query-string'
import {movieResults, isSearchLoading} from '../../redux/selectors'
import MovieResult from '../../components/MovieResult'

import {searchMovie} from '../../redux/actions/search'
export default({location}) => {
    const dispatch =  useDispatch();
    const movies = useSelector(state => movieResults(state));
    const [isLooked,setIsLooked] = useState(false);
    console.log("pelis:");
    console.log(movies);
    const isLoading = useSelector(state => isSearchLoading(state))
    useEffect(()=>{
        const {movieName} =queryString.parse(location.search);

        if(movieName && !isLooked){
            setIsLooked(true);
         dispatch(searchMovie({movieName}));
        }
       
    })
    const renderMovies = () =>{
        if(movies){
            return movies.map((value,index) => <MovieResult key={index} {...value} />)
        }else if (isLoading){
            return <CircularProgress size={100} color="primary"></CircularProgress>
        }
        return <div/>;
    };

    return(
        <Container>
{renderMovies()}
        </Container>
    )
}