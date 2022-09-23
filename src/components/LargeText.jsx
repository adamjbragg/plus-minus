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

// To Do
// write function to split strings into separate words
// then output each word on a new line.

export default function LargeText({ text, className }) {
	const words = [...text];
	const space = ' ';

	return (
		<div className="fixed h-fit w-fit origin-center mix-blend-multiply">
			<motion.div
				variants={listVariants}
				initial="initial"
				whileInView="animate" // apply the animate variant when the div is in view
				viewport={{ once: true, amount: 0.5 }}
				className={classNames(
					'flex',
					words.includes(space) ? 'flex-wrap leading-none' : ' leading-none',
					'text-[30vw] text-pm-purple font-bold -z-10',
					className || null
				)}
			>
				{words.map((letter) => {
					if (letter === space) {
						return <span className="h-0 basis-full" key={uid()} />;
					}
					return (
						<motion.span variants={itemVariants} key={uid()}>
							{letter}
						</motion.span>
					);
				})}
			</motion.div>
		</div>
	);
}
//
