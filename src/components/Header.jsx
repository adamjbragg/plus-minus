import NextLink from 'next/link';
import general from '@/data/general.json';
import TimeDateLocation from './TimeDateLocation';
import Logo from './Logo';
import useMediaQuery from '@/hooks/useMediaQuery';

const Header = function () {
	const isDesktop = useMediaQuery('(min-width: 768px)');
	return (
		<header className="absolute top-0 w-full md:max-w-screen px-5">
			<div className="flex w-full flex-row justify-between items-center py-5">
				<h1 className="sr-only">{general.siteTitle}</h1>
				<NextLink href="/">
					<a className="z-50">
						<Logo />
					</a>
				</NextLink>
				{isDesktop && <TimeDateLocation />}
				<span className="text-right font-bold">Plus Minus</span>
			</div>
		</header>
	);
};

export default Header;
