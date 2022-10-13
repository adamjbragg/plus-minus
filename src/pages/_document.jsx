/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html lang="en">
				<Head>
					<link
						rel="preload"
						href="/fonts/space-grotesk-v13-latin-300.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/space-grotesk-v13-latin-regular.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/space-grotesk-v13-latin-500.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/space-grotesk-v13-latin-600.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<link
						rel="preload"
						href="/fonts/space-grotesk-v13-latin-700.woff2"
						as="font"
						type="font/woff2"
						crossOrigin="anonymous"
					/>
					<script
						dangerouslySetInnerHTML={{
							__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
						}}
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
