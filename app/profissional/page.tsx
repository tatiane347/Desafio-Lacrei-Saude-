'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, UserPlus, BookOpen, Award } from 'lucide-react'

export default function ProfissionalPage() {
  const handleJoinPlatform = () => {
    // Simulate professional registration
    alert('Cadastro de profissionais será implementado em breve!')
  }

  const handleViewTraining = () => {
    // Simulate training access
    alert('Área de treinamentos será implementada em breve!')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button 
            asChild
            variant="ghost" 
            className="text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
            aria-label="Voltar para página inicial"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Voltar
            </Link>
          </Button>
        </div>
      </div>

      {/* Header Section */}
      <section className="bg-white py-16 px-4" aria-labelledby="professional-title">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="professional-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Profissional
              </h1>
              <div className="border-l-4 border-emerald-600 pl-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Buscamos recrutar pessoas profissionais da saúde que entendam as 
                  necessidades e se comprometam com o bem-estar da comunidade 
                  LGBTQIAPN+.
                </p>
              </div>
              
              {/* Interactive Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleJoinPlatform}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
                  aria-label="Cadastrar-se como profissional na plataforma"
                >
                  <UserPlus className="w-5 h-5" aria-hidden="true" />
                  Fazer Parte
                </Button>
                
                <Button 
                  onClick={handleViewTraining}
                  variant="outline"
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
                  aria-label="Acessar treinamentos e capacitações"
                >
                  <BookOpen className="w-5 h-5" aria-hidden="true" />
                  Treinamentos
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/diverse-healthcare-cartoon-team.png"
                alt="Ilustração de equipe diversa de profissionais de saúde capacitados para atender a comunidade LGBTQIAPN+"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4" aria-labelledby="requirements-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="requirements-title" className="text-3xl font-bold text-center text-gray-900 mb-12">
            O que buscamos em você
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualificação Profissional</h3>
              <p className="text-gray-600">
                Registro ativo no conselho profissional e experiência comprovada na área da saúde.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Capacitação Específica</h3>
              <p className="text-gray-600">
                Conhecimento sobre questões de saúde específicas da comunidade LGBTQIAPN+.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <UserPlus className="w-6 h-6 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compromisso Social</h3>
              <p className="text-gray-600">
                Dedicação ao atendimento humanizado e livre de preconceitos.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-16 px-4" aria-labelledby="benefits-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="benefits-title" className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefícios de fazer parte
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Impacto Social</h3>
                    <p className="text-gray-600">Contribua para um sistema de saúde mais inclusivo e acolhedor.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Desenvolvimento Profissional</h3>
                    <p className="text-gray-600">Acesso a treinamentos especializados e certificações.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Rede de Profissionais</h3>
                    <p className="text-gray-600">Conecte-se com outros profissionais comprometidos com a causa.</p>
                  </div>
                </li>
                
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Flexibilidade</h3>
                    <p className="text-gray-600">Atendimentos presenciais e online, com horários flexíveis.</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pronto para fazer a diferença?</h3>
              <p className="text-gray-600 mb-6">
                Junte-se a nós e ajude a construir um futuro mais inclusivo na área da saúde.
              </p>
              <Button 
                onClick={handleJoinPlatform}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 w-full sm:w-auto"
                aria-label="Iniciar processo de cadastro como profissional"
              >
                Começar Cadastro
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
