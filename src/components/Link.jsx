import NextLink from 'next/link';

export default function Link({ href, label, className }) {
	return (
		<NextLink href={href} passHref>
			<a className={`text-pm-green font-bold tracking-wide ${className}`}>
				{label}
			</a>
		</NextLink>
	);
}
