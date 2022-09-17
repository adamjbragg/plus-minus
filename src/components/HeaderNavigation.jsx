/* eslint-disable jsx-a11y/anchor-is-valid */
import { useRouter } from 'next/router';
import Link from 'next/link';
import nav from '@/data/nav.json';

const HeaderNavList = function () {
	const router = useRouter();

	return (
		<div className="flex fixed bottom-[70px] w-full mx-auto left-1/2 -translate-x-1/2 justify-center px-8 z-10">
			<ul className="flex justify-around items-center py-2 px-4  space-x-3 rounded-full w-fit shadow-lg z-10 bg-white">
				{nav.items.map((item) => (
					<li key={item.title}>
						<Link href={item.url}>
							<a
								className={`${
									router.pathname === item.url
										? 'text-pm-purple '
										: 'text-black hover:opacity-50'
								}  border-transparent font-bold text-base`}
							>
								{item.title}
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default HeaderNavList;