export default function LargeText({ children, text = '' }) {
	return (
		<span className="text-[32vw] -left-36 text-pm-purple opacity-50 mix-blend-saturation font-bold leading-[0.9] absolute -top-40 -z-[5]">
			{text || children}
		</span>
	);
}
