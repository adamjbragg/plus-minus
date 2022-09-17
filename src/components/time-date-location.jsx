import { useState, useEffect } from 'react';
import InView from './in-view';

// set the date to a new current date for load
// create an effect that runs on a 1 second interval to update the date
// pass the options to the updating date in the ui
// location is hardcoded

export default function TimeDateLocation() {
	const [date, setDate] = useState(new Date()); // initial date
	const [isSSR, setIsSSR] = useState(true); // check if ssr

	// options for formatting the time and date
	const timeOptions = {
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit',
	};

	const dateOptions = {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'Australia/Canberra',
	};

	useEffect(() => {
		setIsSSR(false); // client side
		setInterval(() => setDate(new Date()), 1000);
	}, []);

	return (
		<InView className="text-xs">
			{!isSSR && <span>{date.toLocaleString('en-AU', timeOptions)}</span>}{' '}
			{/* if client side render time */}
			<span> • {date.toLocaleString('en-AU', dateOptions)}</span>
			<span> • Canberra, Australia</span>
		</InView>
	);
}
