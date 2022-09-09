import { useRef } from 'react';
import { useInView } from 'framer-motion';
import general from '@/data/general.json';

const Footer = function () {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<footer className="w-full text-xs px-5 mx-auto h-44  flex flex-col items-center justify-between py-5">
			<p
				ref={ref}
				style={{
					opacity: isInView ? 1 : 0,
					transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
				}}
			>
				You made it! Thanks for visiting.
			</p>
			<p>
				{new Date().getFullYear()} © {general.siteTitle}
			</p>
		</footer>
	);
};

export default Footer;
