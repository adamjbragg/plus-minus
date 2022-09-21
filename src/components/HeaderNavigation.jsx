/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion, LayoutGroup } from 'framer-motion';
import Link from 'next/link';
import nav from '@/data/nav.json';

export default function HeaderNavigation() {
	const router = useRouter();
	// const [focused, setFocused] = useState(null);
	// console.log(focused);
	return (
		<div className="flex fixed bottom-[70px] w-full mx-auto left-1/2 -translate-x-1/2 justify-center px-8 z-10">
			<ul
				className="relative flex justify-around items-center py-3 px-4 space-x-6 rounded-lg w-fit shadow-lg z-10 bg-white"
				// onMouseLeave={() => setFocused(null)}
			>
				{nav.items.map((item) => (
					<li
						className="relative flex justify-center items-center"
						key={item.id}
						// onFocus={() => setFocused(item)}
						// onMouseEnter={() => setFocused(item)}
					>
						{/* Next Link Scroll is set to false, scroll up handled in Layout */}
						<Link href={item.url} scroll={false}>
							<a className="relative text-black hover:text-pm-purple border-transparent font-bold text-base z-10">
								{item.title}
							</a>
						</Link>
						{/* {focused === item && (
							<LayoutGroup id="2">
								<motion.span
									layout
									transition={{
										opacity: { ease: 'linear' },
									}}
									layoutId="underline-1"
									className="absolute bottom-[-4px] h-[4px] left-0 right-0 bg-pm-purple z-0 rounded"
								/>
							</LayoutGroup>
						)} */}
						{router.pathname === item.url ? (
							<LayoutGroup id="1">
								<motion.span
									layout
									transition={{
										opacity: { ease: 'linear' },
									}}
									layoutId="underline-2"
									className="absolute bottom-[-4px] h-[4px] left-0 right-0 bg-pm-purple z-0 rounded"
								/>
							</LayoutGroup>
						) : null}
					</li>
				))}
			</ul>
		</div>
	);
}
