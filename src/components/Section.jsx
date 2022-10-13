import LargeText from '@/components/LargeText';

export default function Section({ largeText, children }) {
	return (
		<section className="relative flex flex-col items-start h-[70vh]">
			{largeText && <LargeText text={largeText} />}
			<div className="pt-36 space-y-12">{children}</div>
		</section>
	);
}
