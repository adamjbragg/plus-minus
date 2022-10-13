import Link from '@/components/Link';
import Layout from '@/components/Layout';
import LargeText from '@/components/LargeText';

const meta = {
	pageTitle: 'Home',
	pageDescription: 'is a web development studio',
};

export default function Home() {
	return (
		<Layout pageTitle={meta.pageTitle} pageDescription={meta.pageDescription}>
			<LargeText text="Plus Minus" />
			<section className="h-screen relative flex flex-col items-start justify-center">
				<div className="-translate-y-24">
					<h2 className="text-2xl md:text-4xl lg:text-5xl m-0 leading-tight max-w-screen-lg">
						<span className="font-bold">Plus Minus</span> is a web development
						studio building and managing websites for design agencies and
						businesses.
					</h2>
					<p className="mt-4 relative text-pm-green font-bold tracking-wide">
						This website is a work in progress{' '}
						<Link href="/about" label="learn more" />.
					</p>
				</div>
			</section>
		</Layout>
	);
}
