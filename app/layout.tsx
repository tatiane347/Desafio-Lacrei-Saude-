import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import StyledComponentsRegistry from "@/lib/styled-components-registry"
import { GlobalStyles } from "@/styles/GlobalStyles"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import "@/styles/globals.css" // Import globals.css here

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "Lacrei Saúde - Plataforma Inclusiva de Saúde LGBTQIAPN+",
  description:
    "Plataforma segura e acolhedora para comunidade LGBTQIAPN+ com profissionais capacitados, consultas online e presenciais, suporte psicológico especializado.",
  keywords:
    "saúde LGBTQIAPN+, consulta médica online, telemedicina inclusiva, profissionais capacitados, suporte psicológico, acessibilidade, diversidade, inclusão",
  authors: [{ name: "Lacrei Saúde", url: "https://lacreisaude.com.br" }],
  creator: "Lacrei Saúde",
  publisher: "Lacrei Saúde",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://lacrei-saude-challenge.vercel.app",
    title: "Lacrei Saúde - Plataforma Inclusiva de Saúde LGBTQIAPN+",
    description: "Plataforma segura e acolhedora para comunidade LGBTQIAPN+ com profissionais capacitados",
    siteName: "Lacrei Saúde",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lacrei Saúde - Plataforma Inclusiva de Saúde LGBTQIAPN+",
    description: "Plataforma segura e acolhedora para comunidade LGBTQIAPN+",
  },
  alternates: {
    canonical: "https://lacrei-saude-challenge.vercel.app",
  },
  category: "healthcare",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.app" />
        <meta name="theme-color" content="#059669" />
        <meta name="color-scheme" content="light" />
      </head>
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
