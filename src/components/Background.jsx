import GradientCanvas from './GradientCanvas';
import InView from './InView';

const backgroundFadeIn = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

export default function Background() {
	return (
		<>
			<div className="linear absolute h-full w-full overflow-hidden -z-10 opacity-90" />
			<InView
				duration={1}
				delay={0.5}
				variants={backgroundFadeIn}
				className="h-full w-full absolute self-start -z-20 mix-blend-plus-lighter"
			>
				<GradientCanvas />
			</InView>
		</>
	);
}
