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
			<section className="h-screen relative flex flex-col items-start justify-start space-y-5">
				<LargeText text="Plus Minus" />
				<p className="text-5xl leading-tight max-w-screen-lg pt-36 ">
					<span className="font-bold">Plus Minus</span> is a web development
					studio
					<br /> building and managing websites for
					<br /> design agencies and businesses.
				</p>
				<span className="text-pm-green font-bold tracking-wide">
					I'm building this site in public{' '}
					<Link href="/about" label="learn more" />.
				</span>
			</section>
		</Layout>
	);
}
