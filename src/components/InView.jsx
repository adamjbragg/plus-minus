import { motion } from 'framer-motion';

const defaultVariants = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

export default function InView({
	className,
	children,
	delay = 1.5,
	duration = 0.3,
	variants = defaultVariants,
}) {
	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration, delay }}
			variants={variants}
		>
			{children}
		</motion.div>
	);
}
