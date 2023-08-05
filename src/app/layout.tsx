import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
const inter = Inter({ subsets: ['latin'] })
import AppProvider from '@/context/AppProvider'
import AuthProvider from '@/context/AuthProvider'

export const metadata: Metadata = {
  title: 'Eminataren',
  description: 'Made with Next.js and Tailwind CSS. And love. Lots of love.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <AuthProvider>
              <AppProvider>
                  <Header />
                      {children}
                  <Footer />
              </AppProvider>
          </AuthProvider>
      </body>
    </html>
  )
}
