import axios from 'axios';

const KEY = 'AIzaSyCWKm-VzmESCgrLvjG2ZPALnnkjogzVM-I';

export const baseParams = {
	part: 'snippet',
	maxResults: 5,
	key: KEY
};

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	/*params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}*/
	params: baseParams
});


