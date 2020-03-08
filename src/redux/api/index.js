const axios = require('axios');


const baseUrl ='https://www.omdbapi.com/?apikey=a8218892';

export const apiCall = (url,data,headers,method) => axios({
	method,
	url: baseUrl+ url,
	data,
	headers
})
