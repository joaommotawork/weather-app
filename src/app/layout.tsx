import './globals.css'
import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: 'Weather App',
		default: 'Weather App',
	},
	description: 'Weather App',
	generator: 'Next.js',
	applicationName: 'Weather App',
	referrer: 'origin-when-cross-origin',
	keywords: ['Weather', 'App', 'Weather App'],
	openGraph: {
		title: 'Weather App',
		description: 'Weather App',
		siteName: 'Weather App',
		locale: 'pt',
		type: 'website',
	},
	manifest: '/manifest.json',
	viewport: {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='pt'>
			<body className={montserrat.className}>{children}</body>
		</html>
	);
}
