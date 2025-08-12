import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import StyledComponentsRegistry from "@/lib/styled-components-registry"
import { GlobalStyles } from "@/styles/GlobalStyles"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import "./globals.css" // Import globals.css at the top of the file

// Font otimizada com preload e fallbacks
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Lacrei Saúde - Plataforma Inclusiva de Saúde LGBTQIAPN+",
  description: "Plataforma segura e acolhedora para comunidade LGBTQIAPN+ com profissionais capacitados",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          <main role="main" id="main-content">
            {children}
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
