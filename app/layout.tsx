import './globals.css';
import { Nunito } from 'next/font/google';

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb application',
};

const font = Nunito({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
