import general from '@/data/general.json';

const Footer = function () {
	return (
		<footer className="w-full text-xs px-5 mx-auto h-44  flex flex-col items-center justify-between py-5">
			<p>You made it! Thanks for visiting.</p>
			<p>
				{new Date().getFullYear()} © {general.siteTitle}
			</p>
		</footer>
	);
};

export default Footer;
