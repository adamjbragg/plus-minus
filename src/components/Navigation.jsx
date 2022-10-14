/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import { motion, LayoutGroup } from 'framer-motion';
import NextLink from 'next/link';
import LogoSmall from './LogoSmall';
import Link from './Link';
import nav from '@/data/nav.json';

export default function Navigation() {
	const router = useRouter();

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
				<span className="relative text-gray-500 border-transparent font-bold text-base z-10 cursor-not-allowed">
					{item.title}
				</span>
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
		<div className="fixed mx-auto bottom-0 w-full md:max-w-screen px-5 py-4 z-50">
			<div className="rounded-xl backdrop-blur-lg bg-gray-700 bg-opacity-50 p-3 overflow-x-scroll md:overflow-hidden">
				<ul className="flex flex-row w-full">
					{nav.items.map((item) => (
						<li
							className="relative shrink-0 flex justify-center items-center ml-4 first:ml-0"
							key={item.id}
						>
							{createNavList(item)}
							{router.pathname === item.url ? (
								<LayoutGroup id="1">
									<motion.span
										layout
										transition={{
											opacity: { ease: 'linear' },
										}}
										layoutId="underline-2"
										className="absolute bottom-0 h-[5px] left-0 right-0 bg-pm-green z-0"
									/>
								</LayoutGroup>
							) : null}
						</li>
					))}
					<li className="flex shrink-0 justify-center items-center ml-4 md:ml-auto">
						<Link href="mailto:hello@plusminus.dev" label="Start a Project" />
					</li>
				</ul>
			</div>
		</div>
	);
}
