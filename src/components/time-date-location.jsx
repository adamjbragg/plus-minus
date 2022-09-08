import { useState, useEffect } from 'react';

// set the date to a new current date for load
// create an effect that runs on a 1 second interval to update the date
// pass the options to the updating date in the ui
// location is hardcoded

export default function TimeDateLocation() {
	const [date, setDate] = useState(new Date());

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
		setInterval(() => setDate(new Date()), 1000);
	}, []);

	return (
		<div className="text-xs">
			<span>{date.toLocaleString('en-AU', timeOptions)}</span>
			<span> • {date.toLocaleString('en-AU', dateOptions)}</span>
			<span> • Canberra, Australia</span>
		</div>
	);
}
