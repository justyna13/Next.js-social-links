import './globals.css';

import { Inter } from 'next/font/google';
import { cn } from '@/utils/lib/tailwind';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	weight: ['300', '400', '500', '700'],
});
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					'font--poppins min-h-screen antialiased',
					inter.variable,
				)}
			>
				{children}
			</body>
		</html>
	);
}
