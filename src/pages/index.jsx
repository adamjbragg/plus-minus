import Link from '@/components/Link';
import useMediaQuery from '@/hooks/useMediaQuery';
import Layout from '@/components/Layout';
import { LargeTextHome } from '@/components/LargeText';
import TimeDateLocation from '@/components/TimeDateLocation';

const meta = {
	pageTitle: 'Home',
	pageDescription: 'is a web development studio',
};

export default function Home() {
	const isDesktop = useMediaQuery('(min-width: 768px)');
	return (
		<Layout pageTitle={meta.pageTitle} pageDescription={meta.pageDescription}>
			<LargeTextHome text="Plus Minus" />
			<section className="h-screen relative flex flex-col items-start justify-center">
				<h2 className="text-2xl md:text-4xl lg:text-5xl m-0 max-w-screen-lg leading-snug">
					<span className="font-bold">Plus Minus</span> is a web development
					studio building and managing websites for design agencies and
					businesses.
				</h2>
				<p className="mt-4 relative text-pm-green font-bold tracking-wide">
					This website is a work in progress{' '}
					<Link href="/about" label="learn more" />.
				</p>
			</section>
			{!isDesktop && (
				<div className="fixed w-full bottom-20 text-left">
					<TimeDateLocation />
				</div>
			)}
		</Layout>
	);
}
