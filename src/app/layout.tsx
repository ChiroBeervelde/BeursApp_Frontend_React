import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import App from '../components/App'
import StoreProvider from '../redux/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BeursApp',
  description: 'An application for the BeursAvond of Chiro Beervelde',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <App>
            {children}
          </App>
        </StoreProvider>
      </body>
    </html>
  )
}
