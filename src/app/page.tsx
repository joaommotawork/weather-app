'use client';

import { WEATHER_API_KEY, weatherAPIOptions } from '@/api/weather';
import CurrentWeather from '@/components/current-weather/current-weather';
import Forecast from '@/components/forecast/forecast';
import Search from '@/components/search/search';
import axios from 'axios';
import { useState } from 'react';

export default function Home() {
	const [currentWeather, setCurrentWeather] = useState<any>(null);
	const [forecast, setForecast] = useState<any>(null);

	const handleOnSearchChange = async (searchData: any) => {
		const [lat, lon] = searchData.value.split(' ');
		try {
			const responseCurrentWeather = axios.request(
				weatherAPIOptions(`/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=pt
`),
			);
			const responseForecast = axios.request(
				weatherAPIOptions(`/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric&lang=pt
`),
			);

			Promise.all([responseCurrentWeather, responseForecast]).then(
				async ([responseCurrentWeatherData, responseForecastData]) => {
					setCurrentWeather({
						city: searchData.label,
						...responseCurrentWeatherData.data,
					});

					setForecast({
						city: searchData.label,
						...responseForecastData.data,
					});
				},
			);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<main className='w-full h-full min-h-screen px-20 py-5 text-black bg-white lg:py-20 min-w-screen lg:px-60'>
			<Search onSearchChange={handleOnSearchChange} />
			{currentWeather && <CurrentWeather data={currentWeather} />}
			{forecast && <Forecast data={forecast} />}
		</main>
	);
}
