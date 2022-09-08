import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import Header from './site-header';
import Footer from './site-footer';

const Layout = function ({
	children,
	pageDescription = 'Page description',
	pageTitle = 'Page Title',
}) {
	const router = useRouter();
	const canonicalURL = `${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`;

	return (
		<motion.div
			layout
			animate={{
				backgroundImage: `radial-gradient(at 50% 50%, hsla(240, 97%, 13%, 1) 0px, transparent 50%),radial-gradient(at 25% 25%, hsla(240, 97%, 13%, 1) 0px, transparent 50%)`,
				backgroundColor: [
					'hsla(135, 0%, 0%, 1)',
					'hsla(236, 100%, 8%, 1)',
					'hsla(248, 97%, 14%, 1)',
					'hsla(135, 0%, 0%, 1)',
				],
			}}
			transition={{
				duration: 2,
				ease: 'easeInOut',
				times: [0, 0.2, 0.5, 0.8, 1],
				repeat: Infinity,
				repeatDelay: 1,
			}}
			className="flex flex-col items-center justify-center min-h-full"
		>
			<NextSeo
				title={pageTitle}
				titleTemplate="AJB Next Starter | %s"
				description={pageDescription}
				canonical={canonicalURL}
			/>
			<Header />
			<main className="flex flex-col flex-1 w-full min-h-full px-5">
				{children}
			</main>
			<Footer />
		</motion.div>
	);
};

export default Layout;
