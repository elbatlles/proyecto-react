import React, { Component,useState } from 'react';
import {Container,Typography, Card, Grid,TextField,Button} from '@material-ui/core'
import {MovieIcon} from '../../icons/'
//import classes from '*.module.css';
import styles from './style'
//export default() => (<Container><Typography variant="h1"> Home</Typography></Container>)
export default({history}) => {
	console.log(history);
	const [searchText, setSearchText] = useState('');
	const classes = styles();
	const handleSearchTextChange = event => {
		setSearchText(event.target.value)
	};
	const handleCleanTextClick = event => {
		setSearchText('');
	}
	const handleSearchTextClick = event => { 
		history.push(`/results?movieName=${searchText}`);
	}
	console.log(searchText);
	return (
		<Container className={classes.container}> 
			<Card className={classes.cardContainer}> 
				<Grid container className={classes.titleGridContainer}> 
					<Grid>
						<Typography className={classes.title}> Bievenido!</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.movieIcon}></MovieIcon>
					</Grid>
				</Grid>
				<TextField value={searchText} 
				placeholder="" 
				className={classes.textFieldSearch}
				onChange={handleSearchTextChange}  ></TextField>
				<Grid>
					<Button variant="contained" onClick={handleCleanTextClick}>Limpiar</Button>
					<Button variant="contained" className={classes.searchButton} onClick={handleSearchTextClick} color="primary" size="large">Buscar</Button>
				</Grid>
			</Card>
		</Container>
	)
}