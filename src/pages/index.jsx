import Link from '@/components/Link';
import Layout from '@/components/Layout';

const meta = {
	pageTitle: 'Home',
	pageDescription: 'Page description',
};

export default function Home() {
	return (
		<Layout pageTitle={meta.pageTitle} pageDescription={meta.pageDescription}>
			<section className="relative flex flex-col items-start pt-36 h-[70vh] space-y-5">
				<LargeText>
					Plus
					<br />
					Minus
				</LargeText>
				<p className="text-5xl leading-tight max-w-screen-lg">
					<span className="font-bold">Plus Minus</span> is a web development
					studio
					<br /> building and managing websites for
					<br /> design agencies and businesses.
				</p>
				<Link href="/about" label="Learn more about Plus Minus" />
			</section>
			<section className="relative flex items-start h-[70vh]">graphics</section>
			<section className="relative flex items-start h-[70vh]">
				<LargeText text="Work" />
				projects list
			</section>
			<section className="relative flex items-start h-[70vh]">
				<LargeText text="Writing" />
			</section>
		</Layout>
	);
}

export function LargeText({ children, text = '' }) {
	return (
		<span className="text-[32vw] -left-36 text-pm-purple opacity-50 mix-blend-saturation font-bold leading-[0.9] absolute -top-40 -z-[5]">
			{text || children}
		</span>
	);
}
