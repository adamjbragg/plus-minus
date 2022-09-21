/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import nav from '@/data/nav.json';

const HeaderNavigation = function () {
	const router = useRouter();
	const [focused, setFocused] = useState(null);

	return (
		<div className="flex fixed bottom-[70px] w-full mx-auto left-1/2 -translate-x-1/2 justify-center px-8 z-10">
			<ul
				className="relative flex justify-around items-center py-3 px-4 space-x-6 rounded-lg w-fit shadow-lg z-10 bg-white"
				onMouseLeave={() => setFocused(null)}
			>
				{nav.items.map((item) => (
					<li
						className="relative flex justify-center items-center"
						key={item.id}
						onFocus={() => setFocused(item)}
						onMouseEnter={() => setFocused(item)}
					>
						{/* Next Link Scroll is set to false, scroll up handled in Layout */}
						<Link href={item.url} scroll={false}>
							<a className="relative text-black border-transparent font-bold text-base z-10">
								{item.title}
							</a>
						</Link>
						<AnimatePresence>
							{focused === item && (
								<motion.div
									key="hightlighted"
									transition={{
										layout: {
											duration: 0.2,
											ease: 'easeOut',
										},
									}}
									layoutId="hightlighted"
									className="absolute w-[140%] bg-pm-purple bg-opacity-10 h-[130%] z-0 rounded-full"
								/>
							)}
							{router.pathname === item.url ? (
								<motion.span
									transition={{
										layout: {
											duration: 0.2,
											ease: 'easeOut',
										},
									}}
									layoutId="underline"
									className="absolute bottom-[-10px] h-[4px] left-0 right-0 bg-pm-purple z-0 rounded"
								/>
							) : null}
						</AnimatePresence>
					</li>
				))}
			</ul>
		</div>
	);
};

export default HeaderNavigation;
