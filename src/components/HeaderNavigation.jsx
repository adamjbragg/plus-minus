/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import Link from 'next/link';
import nav from '@/data/nav.json';

const HeaderNavList = function () {
	const router = useRouter();
	const [focused, setFocused] = useState(null);
	const [selected, setSelected] = useState(null);

	return (
		<div className="flex fixed bottom-[70px] w-full mx-auto left-1/2 -translate-x-1/2 justify-center px-8 z-10">
			<ul
				className="relative flex justify-around items-center py-3 px-4  space-x-6 rounded-full w-fit shadow-lg z-10 bg-white"
				onMouseLeave={() => setFocused(null)}
			>
				{nav.items.map((item) => (
					<li
						className="relative flex justify-center items-center"
						key={item.id}
						onClick={() => setSelected(item)}
						onFocus={() => setFocused(item)}
						onMouseEnter={() => setFocused(item)}
						tabIndex={0}
					>
						<Link href={item.url}>
							<a className="relative text-black border-transparent font-bold text-base z-10">
								{item.title}
							</a>
						</Link>
						{focused === item ? (
							<motion.div
								transition={{
									layout: {
										duration: 0.2,
										ease: 'easeOut',
									},
								}}
								layoutId="hightlighted"
								className="absolute w-[140%] bg-pm-purple bg-opacity-20 h-[130%] z-0 rounded-full"
							/>
						) : null}
					</li>
				))}
			</ul>
		</div>
	);
};

export default HeaderNavList;
