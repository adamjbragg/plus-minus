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
	initial: { y: 1000 },
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
	const words = [...text];
	const space = ' ';

	return (
		<motion.div
			variants={listVariants}
			initial="initial"
			whileInView="animate" // apply the animate variant when the div is in view
			viewport={{ once: true, amount: 0 }}
			className={classNames(
				'flex absolute overflow-hidden mix-blend-multiply',
				words.includes(space) ? 'flex-wrap leading-[23vw]' : ' leading-none',
				' text-pm-purple font-bold align-top',
				'-translate-x-32 -z-10',
				className || null
			)}
		>
			{words.map((letter) => {
				if (letter === space) {
					return <span className="text-[27vw] basis-full" key={uid()} />;
				}
				return (
					<motion.span
						className="text-[27vw]"
						variants={itemVariants}
						key={uid()}
					>
						{letter}
					</motion.span>
				);
			})}
		</motion.div>
	);
}
//
