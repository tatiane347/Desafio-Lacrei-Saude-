'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4" aria-labelledby="hero-title">
        <div className="max-w-4xl mx-auto text-center">
          <h1 id="hero-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Boas vindas a Lacrei Saúde
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
          </p>
          
          {/* Interactive Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 min-w-[200px]"
              aria-label="Acessar área da pessoa usuária"
            >
              <Link href="/pessoa-usuaria">
                Pessoa Usuária
              </Link>
            </Button>
            
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200 min-w-[200px]"
              aria-label="Acessar área do profissional"
            >
              <Link href="/profissional">
                Profissional
              </Link>
            </Button>
          </div>

          {/* Hero Image */}
          <div className="relative w-full max-w-2xl mx-auto">
            <Image
              src="/welcoming-healthcare.png"
              alt="Ilustração de profissionais de saúde diversos acolhendo pacientes da comunidade LGBTQIAPN+"
              width={800}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4" aria-labelledby="features-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="features-title" className="text-3xl font-bold text-center text-gray-900 mb-12">
            Por que escolher a Lacrei Saúde?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Segurança</h3>
              <p className="text-gray-600">Ambiente seguro e livre de discriminação para toda comunidade LGBTQIAPN+</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Acolhimento</h3>
              <p className="text-gray-600">Profissionais capacitados e sensibilizados para atendimento humanizado</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapidez</h3>
              <p className="text-gray-600">Conecte-se rapidamente com profissionais qualificados e disponíveis</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-600 py-16 px-4" aria-labelledby="cta-title">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="cta-title" className="text-3xl font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Junte-se à nossa comunidade e tenha acesso a cuidados de saúde inclusivos
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-200"
            aria-label="Começar jornada na Lacrei Saúde"
          >
            <Link href="/pessoa-usuaria">
              Começar Agora
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
