import { motion } from 'framer-motion';

const listVariants = {
	animate: {
		transition: {
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

// quickly create a unique ID
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
			whileInView="animate" // apply the animate variant when the div is in view
			viewport={{ once: true, amount: 0.5 }}
			className="flex flex-row text-[32vw] absolute overflow-hidden -left-36 text-pm-purple mix-blend-multiply font-bold leading-[1.25] -top-48 -z-10"
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
