export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const geoAPIOptions = (endpoint: string) => {
	return {
		method: 'GET',
		url: `${GEO_API_URL}${endpoint}`,
		params: { languageCode: 'pt' },
		headers: {
			'X-RapidAPI-Key':
				'bd982a26c4msh3d452ea643a0727p124ad1jsn5fe792c09d5d',
			'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
		},
	};
};

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5';
export const WEATHER_API_KEY = '95ce19b2520eaf6f6caaaea8bff01468';

export const weatherAPIOptions = (endpoint: string) => {
	return {
		method: 'GET',
		url: `${WEATHER_API_URL}${endpoint}`,
	};
};
