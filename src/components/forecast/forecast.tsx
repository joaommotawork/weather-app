import {
	Accordion,
	AccordionItem,
	AccordionItemButton,
	AccordionItemHeading,
	AccordionItemPanel,
} from 'react-accessible-accordion';

interface ForecastProps {
	data: any;
}

const WEEK_DAYS = [
	'Segunda-feira',
	'Terça-feira',
	'Quarta-feira',
	'Quinta-feira',
	'Sexta-feira',
	'Sábado',
	'Domingo',
];

export default function Forecast({ data }: ForecastProps) {
	const dayInAWeek = new Date().getDay();
	const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
		WEEK_DAYS.slice(0, dayInAWeek),
	);

	return (
		<>
			<label className='text-lg font-bold'>Previsão 7 Dias</label>
			<Accordion allowZeroExpanded>
				{data.list.splice(0, 7).map((item: any, index: number) => {
					return (
						<AccordionItem key={index}>
							<AccordionItemHeading>
								<AccordionItemButton>
									<div className='flex items-center justify-between px-5 my-3 text-white bg-gray-900 rounded-lg drop-shadow'>
										<div className='flex items-center justify-center gap-3'>
											<img
												alt='weather'
												src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
												className='h-[50px] w-[50px]'
											/>
											<label className='font-bold'>
												{forecastDays[index]}
											</label>
										</div>
										<div className='flex items-center justify-center gap-3'>
											<label className='capitalize'>
												{item.weather[0].description}
											</label>
											<div className='flex gap-3'>
												<label className='flex gap-2'>
													<span className='font-bold'>
														Min:
													</span>
													{Math.round(
														item.main.temp_min,
													)}
													°C
												</label>
												<label className='flex gap-2'>
													<span className='font-bold'>
														Max:
													</span>
													{Math.round(
														item.main.temp_max,
													)}
													°C
												</label>
											</div>
										</div>
									</div>
								</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<div className='flex flex-col px-5 py-3 text-white bg-gray-500 rounded-lg drop-shadow'>
									<div className='flex gap-3'>
										<label className='font-bold'>
											Aparenta:
										</label>
										<label>
											{Math.round(item.main.feels_like)}°C
										</label>
									</div>
									<div className='flex gap-3'>
										<label className='font-bold'>
											Vento:
										</label>
										<label>{item.wind.speed}m/s</label>
									</div>
									<div className='flex gap-3'>
										<label className='font-bold'>
											Humidade:
										</label>
										<label>{item.main.humidity}%</label>
									</div>
									<div className='flex gap-3'>
										<label className='font-bold'>
											Pressão:
										</label>
										<label>{item.main.pressure} hPa</label>
									</div>
									<div className='flex gap-3'>
										<label className='font-bold'>
											Nuvens:
										</label>
										<label>{item.clouds.all}%</label>
									</div>
									<div className='flex gap-3'>
										<label className='font-bold'>
											Nível do Mar:
										</label>
										<label>{item.main.sea_level}m</label>
									</div>
								</div>
							</AccordionItemPanel>
						</AccordionItem>
					);
				})}
			</Accordion>
		</>
	);
}
