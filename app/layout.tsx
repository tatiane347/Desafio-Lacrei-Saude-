import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lacrei Saúde - Plataforma Inclusiva de Saúde',
  description: 'Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+',
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <main role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
