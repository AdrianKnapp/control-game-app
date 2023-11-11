import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../styles/globals.scss'
import { getMetaData } from '@/utils/getMetaData'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = getMetaData({
  title: 'Control Game App | Basketball',
  image: '/website/common/logo.png',
  description:
    'Gerencie campeonatos, gere estatísticas em tempo real e agregue valor ao seu evento.',
  url: '/'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
