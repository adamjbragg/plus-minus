import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';
import Background from './Background';

const Layout = function ({
	children,
	pageDescription = 'Page description',
	pageTitle = 'Page Title',
}) {
	const router = useRouter();
	const canonicalURL = `${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`;

	// This useEffect handles scrolling our page back to the top on router change.
	// Our nav sliding animation was jumping when our page was scroll and we changed page
	// when a wrapper element (our #__Next element) has height: 100% and overflow set
	// Next Link Scroll is set to false in HeaderNavigation

	useEffect(() => {
		const handleRouteChange = () => {
			router.push(`${router.pathname}#top`);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router, router.events]);

	return (
		<motion.div id="top" className="flex min-w-full overflow-x-hidden">
			<NextSeo
				title={pageTitle}
				titleTemplate={`Plus Minus ${pageDescription} | %s`}
				description={pageDescription}
				canonical={canonicalURL}
			/>
			<Background />
			<motion.div className="relative flex-1 flex flex-col items-center justify-center min-h-full">
				<Header />
				<Navigation />
				<main className="flex flex-col flex-1 w-full h-full md:max-w-screen px-5">
					{children}
				</main>
			</motion.div>
		</motion.div>
	);
};

export default Layout;
