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
	initial: { y: 2000 },
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
	const hyphen = '-';
	return (
		<motion.div
			variants={listVariants}
			initial="initial"
			whileInView="animate" // apply the animate variant when the div is in view
			viewport={{ once: true, amount: 0 }}
			className={classNames(
				'flex absolute left-0 top-0 origin-center self-center mix-blend-multiply overflow-hidden',
				words.includes(space) ? 'flex-wrap leading-[.8]' : 'leading-none',
				' text-pm-purple font-bold -ml-[3%] -mt-[3%]',
				'-z-10',
				className || null
			)}
		>
			{words.map((letter) => {
				if (letter === hyphen) {
					return (
						<span className="text-[27vw] text-transparent" key={uid()}>
							–
						</span>
					);
				}
				if (letter === space) {
					return <span className="text-[27vw] basis-full" key={uid()} />;
				}
				return (
					<motion.span
						className="text-[36vw]"
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

export function LargeTextHome({ text, className }) {
	const words = [...text];
	const space = ' ';

	return (
		<div
			className={classNames(
				'fixed flex items-center align-center',
				'right md:transform-none',
				'origin-bottom-right bottom-1/2 right-0 top-14',
				'md:bottom-0 md:top-0 md:origin-center',
				'text-[20vh] md:text-[32vw]',
				'mix-blend-multiply'
			)}
		>
			<motion.div
				variants={listVariants}
				initial="initial"
				whileInView="animate" // apply the animate variant when the div is in view
				viewport={{ once: true, amount: 0 }}
				className={classNames(
					'flex translate-y-32 md:translate-y-0',
					'md:scale-[1.2] md:origin-center md:translate-x-16',
					words.includes(space)
						? 'md:flex-wrap md:leading-[.8]'
						: ' leading-none',
					' text-pm-purple font-bold -z-10',
					className || null
				)}
			>
				{words.map((letter) => {
					if (letter === space) {
						return <span className="h-0 md:basis-full" key={uid()} />;
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
