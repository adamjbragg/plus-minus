import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import HeaderNavList from './HeaderNavigation';

const Layout = function ({
	children,
	pageDescription = 'Page description',
	pageTitle = 'Page Title',
}) {
	const router = useRouter();
	const canonicalURL = `${process.env.NEXT_PUBLIC_SITE_URL}${router.pathname}`;

	return (
		<motion.div
			animate={{
				backgroundColor: [
					'hsla(240, 97%, 13%, 1)',
					'hsla(236, 100%, 8%, 1)',
					'hsla(135, 0%, 0%, 1)',
				],
			}}
			transition={{
				type: 'tween',
				duration: 5,
				ease: [1, 1, 1, 1],
				repeat: Infinity,
				repeatType: 'reverse',
			}}
			className="gradbackground flex min-w-full"
		>
			<motion.div
				animate={{
					backgroundImage: [
						'radial-gradient(at 10% 20%, hsla(240, 97%, 13%, 1) 0px, transparent 50%)',
						'radial-gradient(at 100% 80%, hsla(240, 97%, 13%, 1) 0px, transparent 50%)',
					],
				}}
				transition={{
					type: 'tween',
					duration: 5,
					ease: [1, 1, 1, 1],
					repeat: Infinity,
					repeatType: 'reverse',
				}}
				className="flex-1 flex flex-col items-center justify-center min-h-full"
			>
				<NextSeo
					title={pageTitle}
					titleTemplate="Plus Minus • %s"
					description={pageDescription}
					canonical={canonicalURL}
				/>
				<Header />
				<HeaderNavList />
				<main className="flex flex-col flex-1 w-full h-full px-20">
					{children}
				</main>
				<Footer />
			</motion.div>
		</motion.div>
	);
};

export default Layout;
