import Link from 'next/link';
import general from '@/data/general.json';
import TimeDateLocation from './time-date-location';
import Logo from './logo';

const Header = function () {
	return (
		<header className="w-full py-5">
			<div className="px-5 mx-auto">
				<div className="flex w-full flex-row justify-center items-center py-5">
					<h1 className="sr-only">{general.siteTitle}</h1>
					<Link href="/">
						<a className="fixed left-5">
							<Logo />
						</a>
					</Link>
					<div className="text-center">
						<TimeDateLocation />
					</div>
					<p className="fixed right-5">Start a Project</p>
				</div>
			</div>
		</header>
	);
};

export default Header;
