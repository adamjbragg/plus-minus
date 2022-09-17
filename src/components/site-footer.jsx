import general from '@/data/general.json';
import InView from './in-view';

const Footer = function () {
	return (
		<footer className="w-full text-xs px-5 mx-auto h-44  flex flex-col items-center justify-between py-5">
			<InView delay=".5s">
				<p>You made it! Thanks for visiting.</p>
			</InView>
			<InView delay="1.25s">
				<p>
					{new Date().getFullYear()} © {general.siteTitle}
				</p>
			</InView>
		</footer>
	);
};

export default Footer;
