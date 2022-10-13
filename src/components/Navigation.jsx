/* eslint-disable jsx-a11y/anchor-is-valid */
// import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion, LayoutGroup } from 'framer-motion';
import NextLink from 'next/link';
import LogoSmall from './LogoSmall';
import Link from './Link';
import nav from '@/data/nav.json';

export default function Navigation() {
	const router = useRouter();
	// const [focused, setFocused] = useState(null);
	// console.log(focused);

	function createNavList(item) {
		if (item.id === 1) {
			return (
				<NextLink href="/">
					<a>
						<LogoSmall />
					</a>
				</NextLink>
			);
		}

		if (!item.live) {
			return (
				// <NextLink href="#" scroll={false}>
				<span className="relative text-gray-500 border-transparent font-bold text-base z-10 cursor-not-allowed">
					{item.title}
				</span>
				// </NextLink>
			);
		}

		return (
			<NextLink href={item.url} scroll={false}>
				<a className="relative text-gray-200 border-transparent font-bold text-base z-10">
					{item.title}
				</a>
			</NextLink>
		);
	}

	return (
		<div className="fixed bottom-0 left-0 right-0 w-full px-20 py-4 z-50 text-whiote">
			<div
				className="flex justify-between items-center w-full rounded-xl overflow-hidden backdrop-blur-2xl bg-gray-700 bg-opacity-80 p-3"
				// onMouseLeave={() => setFocused(null)}
			>
				<ul className="flex flex-row space-x-5">
					{nav.items.map((item) => (
						<li
							className="relative flex justify-center items-center"
							key={item.id}
							// onFocus={() => setFocused(item)}
							// onMouseEnter={() => setFocused(item)}
						>
							{/* Next Link Scroll is set to false, scroll up handled in Layout */}
							{createNavList(item)}
							{/* <NextLink href={item.url} scroll={false}>
								<a className="relative text-gray-200 border-transparent font-bold text-base z-10 -translate-y-1">
									{item.title}
								</a>
							</NextLink> */}
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
										className="absolute bottom-0 h-[5px] left-0 right-0 bg-gray-200 z-0"
									/>
								</LayoutGroup>
							) : null}
						</li>
					))}
				</ul>
				<div>
					<Link href="mailto:hello@plusminus.dev" label="Start a Project" />
				</div>
			</div>
		</div>
	);
}
