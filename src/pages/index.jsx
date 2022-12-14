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
			<LargeText text="Plus Minus" />
			<section className="relative flex flex-col items-start justify-start pt-24 md:pt-0 md:justify-center h-screen space-y-5">
				<p className="text-3xl leading-snug md:text-5xl md:leading-snug max-w-screen-lg">
					<span className="font-bold">Plus Minus</span> is a web development
					studio building and managing websites for design agencies and
					businesses.
				</p>
				<p className="font-bold tracking-wide ">Full website coming soon</p>
			</section>
		</Layout>
	);
}
