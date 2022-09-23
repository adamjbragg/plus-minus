import Link from '@/components/Link';
import Layout from '@/components/Layout';
import LargeText from '@/components/LargeText';

const meta = {
	pageTitle: 'Hi!',
	pageDescription:
		'Plus Minusis a web development studio building and managing websites for design agencies and businesses.',
};

export default function Home() {
	return (
		<Layout pageTitle={meta.pageTitle} pageDescription={meta.pageDescription}>
			<section className="relative flex flex-col items-start pt-36 h-[70vh] space-y-5">
				<LargeText text="Plus Minus" />
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
				blog list
			</section>
		</Layout>
	);
}
