import LargeText from '@/components/LargeText';

export default function Section({ largeText, children, classNames }) {
	return (
		<section className="relative flex flex-col items-start h-screen">
			{largeText && <LargeText text={largeText} />}
			<div className={`${classNames} py-36 space-y-24`}>{children}</div>
		</section>
	);
}
