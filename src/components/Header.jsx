import NextLink from 'next/link';
import general from '@/data/general.json';
import Logo from './Logo';
import Link from './Link';

const Header = function () {
	return (
		<header className="fixed w-full py-5 z-50">
			<div className="mx-auto">
				<div className="flex w-full flex-row justify-center items-center py-5">
					<h1 className="sr-only">{general.siteTitle}</h1>
					<NextLink href="/">
						<a className="fixed left-5 md:left-20 z-50">
							<Logo />
						</a>
					</NextLink>
					<Link
						href="mailto:hello@plusminus.dev"
						label="Start a Project"
						className="fixed right-5 md:right-20 z-50"
					/>
				</div>
			</div>
		</header>
	);
};

export default Header;
