import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import HeaderNavigation from './HeaderNavigation';
import GradientCanvas from './GradientCanvas';
import InView from './InView';

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

	const backgroundFadeIn = {
		visible: { opacity: 0.1 },
		hidden: { opacity: 0 },
	};

	return (
		<motion.div id="top" className="flex min-w-full overflow-x-hidden">
			<NextSeo
				title={pageTitle}
				titleTemplate="Plus Minus • %s"
				description={pageDescription}
				canonical={canonicalURL}
			/>
			<motion.div className="relative flex-1 flex flex-col items-center justify-center min-h-full ">
				<Header />
				<HeaderNavigation />
				<InView
					duration={1}
					delay={0.5}
					variants={backgroundFadeIn}
					className="h-full w-full absolute self-start"
				>
					<GradientCanvas />
				</InView>
				<main className="flex flex-col flex-1 w-full h-full px-20">
					{children}
				</main>
				<Footer />
			</motion.div>
		</motion.div>
	);
};

export default Layout;
