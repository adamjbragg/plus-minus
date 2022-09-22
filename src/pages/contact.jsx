import Layout from '@/components/Layout';
import LargeText from '@/components/LargeText';

export default function Contact() {
	const meta = {
		pageTitle: 'Contact',
		pageDescription: 'Contact page description',
	};

	return (
		<Layout pageTitle={meta.pageTitle} pageDescription={meta.pageDescription}>
			<section className="relative flex flex-col items-start pt-36 h-[120vh] space-y-5">
				<LargeText text="Contact" />
				<h1 className="text-5xl leading-tight max-w-screen-lg">
					Contact content here.
				</h1>
			</section>
		</Layout>
	);
}
