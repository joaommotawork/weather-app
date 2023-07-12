interface CurrentWeatherProps {
	data: any;
}

export default function CurrentWeather({ data }: CurrentWeatherProps) {
	return (
		<div className='flex flex-col items-center justify-center w-full gap-10 p-10 my-5 text-white bg-gray-900 rounded-lg sm:flex-row drop-shadow'>
			<div className='flex items-center justify-between'>
				<img
					alt='weather'
					src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
					className='h-[100px] w-[100px]'
				/>
				<div className='flex flex-col justify-center gap-1'>
					<p className='text-xl font-bold'>{data.city}</p>
					<p className='capitalize'>{data.weather[0].description}</p>
				</div>
			</div>
			<div className='flex flex-col gap-5'>
				<p className='text-3xl font-bold'>
					{Math.round(data.main.temp)}°C
				</p>
				<div>
					<div className='flex gap-3 text-sm'>
						<span className='font-bold'>Aparenta:</span>
						<span>{Math.round(data.main.feels_like)}°C</span>
					</div>
					<div className='flex gap-3 text-sm'>
						<span className='font-bold'>Vento:</span>
						<span>{data.wind.speed}m/s</span>
					</div>
					<div className='flex gap-3 text-sm'>
						<span className='font-bold'>Humidade:</span>
						<span>{data.main.humidity}%</span>
					</div>
					<div className='flex gap-3 text-sm'>
						<span className='font-bold'>Pressão:</span>
						<span>{data.main.pressure} hPa</span>
					</div>
				</div>
			</div>
		</div>
	);
}
