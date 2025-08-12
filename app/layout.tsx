import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import StyledComponentsRegistry from "@/lib/styled-components-registry"
import { GlobalStyles } from "@/styles/GlobalStyles"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import "@/styles/globals.css" // Import globals.css at the top of the file

// Font otimizada com preload e fallbacks
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Arial", "sans-serif"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Lacrei Saúde - Plataforma Inclusiva de Saúde LGBTQIAPN+",
  description:
    "Plataforma segura e acolhedora para comunidade LGBTQIAPN+ com profissionais capacitados, consultas online e presenciais, suporte psicológico especializado. Agende sua consulta hoje mesmo.",
  keywords:
    "saúde LGBTQIAPN+, consulta médica online, telemedicina inclusiva, profissionais capacitados, suporte psicológico, acessibilidade, diversidade, inclusão, saúde trans, consulta psicológica",
  authors: [{ name: "Lacrei Saúde", url: "https://lacreisaude.com.br" }],
  creator: "Lacrei Saúde",
  publisher: "Lacrei Saúde",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
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
    description:
      "Plataforma segura e acolhedora para comunidade LGBTQIAPN+ com profissionais capacitados e atendimento humanizado.",
    siteName: "Lacrei Saúde",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Lacrei Saúde - Plataforma Inclusiva",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lacrei Saúde - Plataforma Inclusiva de Saúde LGBTQIAPN+",
    description: "Plataforma segura e acolhedora para comunidade LGBTQIAPN+ com profissionais capacitados",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://lacrei-saude-challenge.vercel.app",
  },
  category: "healthcare",
  // Structured data para SEO
  other: {
    "application-name": "Lacrei Saúde",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Lacrei Saúde",
    "format-detection": "telephone=no",
    "mobile-web-app-capable": "yes",
    "msapplication-config": "/browserconfig.xml",
    "msapplication-TileColor": "#047857",
    "msapplication-tap-highlight": "no",
    "theme-color": "#047857",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <head>
        {/* Preconnect para performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vercel.app" />

        {/* PWA e mobile optimization */}
        <meta name="theme-color" content="#047857" />
        <meta name="color-scheme" content="light" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Lacrei Saúde" />
        <meta name="application-name" content="Lacrei Saúde" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#047857" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Favicons otimizados */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Preload critical resources */}
        <link rel="preload" href="/welcoming-healthcare.png" as="image" type="image/png" />
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
