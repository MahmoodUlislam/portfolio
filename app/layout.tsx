import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap', // Prevents FOIT (Flash of Invisible Text)
  preload: true,
})

const roboto = Roboto({
  weight: ['400', '700'], // Reduced from 4 weights to 2 for faster loading
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Mahmood - Portfolio',
    template: '%s | Mahmood'
  },
  description: 'Senior Software Developer and Cloud & AI Specialist at Virtual Health Hub. Specializing in AI-powered healthcare applications, AWS cloud infrastructure, and modern web technologies.',
  keywords: ['Mahmood ul Islam', 'Senior Software Developer', 'Cloud & AI Specialist', 'Healthcare Technology', 'AWS', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Mahmood ul Islam' }],
  creator: 'Mahmood ul Islam',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://portfolio-mahmoodulislam.vercel.app/',
    title: 'Mahmood ul Islam - Senior Software Developer | Cloud & AI Specialist',
    description: 'Senior Software Developer and Cloud & AI Specialist at Virtual Health Hub. Specializing in AI-powered healthcare applications, AWS cloud infrastructure, and modern web technologies.',
    siteName: 'Mahmood ul Islam Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mahmood ul Islam - Senior Software Developer | Cloud & AI Specialist',
    description: 'Senior Software Developer and Cloud & AI Specialist at Virtual Health Hub. Specializing in AI-powered healthcare applications, AWS cloud infrastructure, and modern web technologies.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/Mi-logo.svg',
    shortcut: '/Mi-logo.svg',
    apple: '/Mi-logo.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${roboto.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
