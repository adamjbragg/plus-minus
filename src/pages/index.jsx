import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '@/components/site-layout';

const meta = {
	pageTitle: 'Home',
	pageDescription: 'Page description',
};

const Home = function () {
	const [open, setOpen] = useState(false);

	const toggleSwitch = () => setOpen(!open);

	const variants = {
		open: { fontSize: '2rem' },
		closed: { fontSize: '3rem' },
	};

	return (
		<Layout pageTitle={meta.pageTitle} pageDescription={meta.pageDescription}>
			<section className="flex items-start pt-36 h-[70vh]">
				<p className="text-5xl leading-tight max-w-screen-lg">
					Plus Minus is a web development studio
					<br /> building and managing websites for
					<br /> design agencies and businesses.
				</p>
			</section>
			<section className="flex items-start h-[70vh]">graphics</section>
			<section className="flex items-start h-[70vh]"> projects list</section>
			<section className="flex items-start h-[70vh]">blog</section>
		</Layout>
	);
};

export default Home;
