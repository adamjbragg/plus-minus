import { useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

// set the date to a new current date for load
// create an effect that runs on a 1 second interval to update the date
// pass the options to the updating date in the ui
// location is hardcoded

export default function TimeDateLocation() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

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
		<div
			className="text-xs"
			ref={ref}
			style={{
				opacity: isInView ? 1 : 0,
				transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s',
			}}
		>
			<span>{date.toLocaleString('en-AU', timeOptions)}</span>
			<span> • {date.toLocaleString('en-AU', dateOptions)}</span>
			<span> • Canberra, Australia</span>
		</div>
	);
}
