import { motion } from 'framer-motion';

export default function Letter({ letter }) {
	const variants = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
			},
		},
		closed: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
			},
		},
	};

	return (
		<motion.span
			className="relative inline-block whitespace-nowrap"
			variants={variants}
		>
			{letter}
		</motion.span>
	);
}
