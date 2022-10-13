import GradientCanvas from './GradientCanvas';
import InView from './InView';

const backgroundFadeIn = {
	visible: { opacity: 0.25 },
	hidden: { opacity: 0 },
};

export default function Background() {
	return (
		<>
			<div className="linear absolute h-full w-full opacity-90 overflow-hidden -z-20" />
			{/* <div className="radial absolute h-full w-full opacity-10 overflow-hidden mix-blend-overlay" /> */}
			<InView
				duration={1}
				delay={0.5}
				variants={backgroundFadeIn}
				className="h-full w-full absolute self-start -z-10 mix-blend-screen"
			>
				<GradientCanvas />
			</InView>
		</>
	);
}
