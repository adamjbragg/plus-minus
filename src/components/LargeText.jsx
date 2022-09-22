import { motion } from 'framer-motion';
import { classNames } from 'utilities/classNames';

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
		y: -50,
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

// To Do
// write function to split strings into separate words
// then output each word on a new line.

export default function LargeText({ text, className }) {
	return (
		<motion.div
			variants={listVariants}
			initial="initial"
			whileInView="animate" // apply the animate variant when the div is in view
			viewport={{ once: true, amount: 0.5 }}
			className={classNames(
				'flex absolute overflow-hidden mix-blend-multiply opacity-100',
				'text-[27vw] text-pm-purple font-bold leading-none',
				'-translate-x-32 -translate-y-64 -z-10',
				className || null
			)}
		>
			{[...text].map((letter) => (
				<motion.span variants={itemVariants} key={`item-${letter}-${uid()}`}>
					{letter}
				</motion.span>
			))}
		</motion.div>
	);
}
//
