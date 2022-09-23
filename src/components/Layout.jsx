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
		<div id="top" className="flex min-w-full overflow-x-hidden">
			<InView
				duration={1}
				delay={0.5}
				variants={backgroundFadeIn}
				className="h-full w-full absolute mix-blend-screen -z-20"
			>
				<GradientCanvas />
			</InView>
			<Header />
			<div className="relative flex-1 flex flex-col items-center justify-center min-h-full ">
				<NextSeo
					title={pageTitle}
					titleTemplate="Plus Minus • %s"
					description={pageDescription}
					canonical={canonicalURL}
				/>
				<main className="flex flex-col flex-1 w-full h-full px-5 md:px-20">
					{children}
				</main>
			</div>
		</div>
	);
};

export default Layout;
