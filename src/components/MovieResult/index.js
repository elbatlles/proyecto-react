import React from 'react'
import { Card, Grid, Typography, Button } from '@material-ui/core';
import style from './style';
import {withRouter} from 'react-router-dom';
const MovieResult = ({Title,Year,Type,imdbID,Poster,history}) =>{
  const classes = style();
  
  const handleSeeMovieClick = () => {
    history.push(`/movie/${imdbID}`);
  }
  return(
      <Card className={classes.cardContainer}>
          <Grid container>
            <Grid item>
                  <img  src={Poster} alt={Title}/>
            </Grid>
            <Grid item className={classes.titlesContainer}>
                <Typography>{Title}</Typography>
                <Typography>{Year}</Typography>
                <Typography>{Type}</Typography>
                <Button onClick={handleSeeMovieClick} color="primary" variant="contained">Ver mas</Button>
            </Grid>
          </Grid>
      </Card>  
    );
}

export default withRouter(MovieResult);