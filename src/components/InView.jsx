import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function InView({ className, children, delay = '1.5s' }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });

	return (
		<div
			className={className}
			ref={ref}
			style={{
				opacity: isInView ? 1 : 0,
				transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${delay}`,
			}}
		>
			{children}
		</div>
	);
}
