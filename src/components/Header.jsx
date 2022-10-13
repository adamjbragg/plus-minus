import NextLink from 'next/link';
import general from '@/data/general.json';
import TimeDateLocation from './TimeDateLocation';
import Logo from './Logo';

const Header = function () {
	return (
		<header className="absolute top-0 w-full py-5">
			<div className="mx-auto">
				<div className="flex w-full flex-row justify-center items-center py-5">
					<h1 className="sr-only">{general.siteTitle}</h1>
					<NextLink href="/">
						<a className="absolute left-20 z-50">
							<Logo />
						</a>
					</NextLink>
					<div className="text-center">
						<TimeDateLocation />
					</div>
					<span className="absolute text-right right-20 font-bold">
						Plus Minus
					</span>
				</div>
			</div>
		</header>
	);
};

export default Header;
