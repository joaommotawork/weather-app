'use client';

import { geoAPIOptions } from '@/api/weather';
import axios from 'axios';
import { useState } from 'react';
import { AsyncPaginate, LoadOptions } from 'react-select-async-paginate';
import CurrentWeather from '../current-weather/current-weather';

interface SearchProps {
	onSearchChange: (searchData: any) => void;
}

export default function Search({ onSearchChange }: SearchProps) {
	const [search, setSearch] = useState(null);

	const handleOnChange = (searchData: any) => {
		setSearch(searchData);
		onSearchChange(searchData);
	};

	async function loadOptions(search: any) {
		console.log('SEARCH', search);
		try {
			const response = await axios.request(
				geoAPIOptions(
					`/cities?namePrefix=${search}&minPopulation=100000`,
				),
			);
			const responseData = await response.data;
			console.log('RESPONSE DATA', responseData);
			return {
				options: responseData.data.map((city: any) => ({
					label: `${city.name}, ${city.countryCode}`,
					value: `${city.latitude} ${city.longitude}`,
				})),
			};
		} catch (error) {
			console.error(error);
			return {
				options: [],
				hasMore: false,
			};
		}
	}

	return (
		<section>
			<AsyncPaginate
				loadOptions={loadOptions}
				placeholder='Pesquisar por cidade'
				debounceTimeout={600}
				value={search}
				onChange={handleOnChange}
			/>
		</section>
	);
}
