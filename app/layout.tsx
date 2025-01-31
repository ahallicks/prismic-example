import { Inter, Space_Grotesk } from 'next/font/google';
import '@/styles/tailwind.css';

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const space_grotesk = Space_Grotesk({
	weight: ['600'],
	subsets: ['latin'],
	variable: '--font-space-grotesk',
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="bg-slate-900 font-inter tracking-tight text-slate-100 antialiased">
				<div className={`${inter.variable} ${space_grotesk.variable}`}>
					{children}
				</div>
			</body>
		</html>
	);
}
