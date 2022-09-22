import { motion } from 'framer-motion';

export default function InView({ className, children, delay = 1.5 }) {
	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			transition={{ duration: 0.3, delay }}
			variants={{
				visible: { opacity: 1 },
				hidden: { opacity: 0 },
			}}
		>
			{children}
		</motion.div>
	);
}
