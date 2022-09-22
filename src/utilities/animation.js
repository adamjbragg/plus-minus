export const easing = [0.6, 0.01, -0.05, 0.95];

export const word = {
	animate: {
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.1,
		},
	},
};

export const letters = {
	initial: { y: 400 },
	animate: {
		y: 0,
		transition: {
			ease: easing,
			duration: 1,
		},
	},
};
