import { Inter } from 'next/font/google'
import { SpreadsheetProvider } from '@/components/SpreadsheetContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <SpreadsheetProvider>
        <Component {...pageProps} />
      </SpreadsheetProvider>
    </main>
  )
}