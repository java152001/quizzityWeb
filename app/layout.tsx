import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import TanStackProvider from './components/providers/TanStackProvider';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import Logout from './components/logout';
import Navbar from './components/navbar/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const session = await getServerSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackProvider>
          <Navbar />
            {children}
        </TanStackProvider>
      </body>
    </html>
  )
}
