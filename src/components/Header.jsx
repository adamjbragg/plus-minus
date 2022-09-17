import NextLink from 'next/link';
import general from '@/data/general.json';
import TimeDateLocation from './TimeDateLocation';
import Logo from './Logo';
import Link from './Link';

const Header = function () {
	return (
		<header className="w-full py-5">
			<div className="mx-auto">
				<div className="flex w-full flex-row justify-center items-center py-5">
					<h1 className="sr-only">{general.siteTitle}</h1>
					<NextLink href="/">
						<a className="fixed left-20">
							<Logo />
						</a>
					</NextLink>
					<div className="text-center">
						<TimeDateLocation />
					</div>
					<Link href="#" label="Start a Project" className="fixed right-20" />
				</div>
			</div>
		</header>
	);
};

export default Header;
