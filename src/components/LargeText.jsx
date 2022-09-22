import { motion } from 'framer-motion';

const listVariants = {
	animate: {
		transition: {
			when: 'beforeChildren',
			delayChildren: 0.4,
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	initial: { y: 600 },
	animate: {
		y: 0,
		transition: {
			ease: [0.6, 0.01, -0.05, 0.95],
			duration: 1,
		},
	},
};

const uid = () =>
	String(Date.now().toString(32) + Math.random().toString(16)).replace(
		/\./g,
		''
	);

export default function LargeText({ text }) {
	return (
		<motion.div
			variants={listVariants}
			initial="initial"
			animate="animate"
			className="flex flex-row text-[32vw] absolute overflow-hidden -left-36 text-pm-purple mix-blend-saturation font-bold leading-[0.9] -top-40 -z-[5]"
		>
			{[...text].map((letter) => (
				<motion.span
					className="flex-1"
					variants={itemVariants}
					key={`item-${letter}-${uid()}`}
				>
					{letter}
				</motion.span>
			))}
		</motion.div>
	);
}
//
