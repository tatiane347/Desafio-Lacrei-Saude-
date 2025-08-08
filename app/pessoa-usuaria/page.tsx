'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Calendar, MessageCircle, User } from 'lucide-react'

export default function PessoaUsuariaPage() {
  const handleScheduleAppointment = () => {
    // Simulate appointment scheduling
    alert('Funcionalidade de agendamento será implementada em breve!')
  }

  const handleStartChat = () => {
    // Simulate chat functionality
    alert('Chat com profissionais será implementado em breve!')
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
      <section className="bg-white py-16 px-4" aria-labelledby="user-title">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="user-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Pessoa Usuária
              </h1>
              <div className="border-l-4 border-emerald-600 pl-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  A Lacrei garante que pessoas LGBTQIAPN+ recebam atendimento 
                  realizado por profissionais de qualidade e que atendam às suas 
                  necessidades de forma segura e acolhedora.
                </p>
              </div>
              
              {/* Interactive Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleScheduleAppointment}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
                  aria-label="Agendar consulta médica"
                >
                  <Calendar className="w-5 h-5" aria-hidden="true" />
                  Agendar Consulta
                </Button>
                
                <Button 
                  onClick={handleStartChat}
                  variant="outline"
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2"
                  aria-label="Iniciar conversa com profissional"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  Conversar
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/cartoon-healthcare-lgbtq.png"
                alt="Ilustração de profissional de saúde utilizando tablet para atender paciente da comunidade LGBTQIAPN+"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4" aria-labelledby="services-title">
        <div className="max-w-6xl mx-auto">
          <h2 id="services-title" className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nossos Serviços
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <User className="w-6 h-6 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Consultas Médicas</h3>
              <p className="text-gray-600 mb-4">
                Acesso a profissionais especializados em saúde LGBTQIAPN+ para consultas presenciais e online.
              </p>
              <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0">
                Saiba mais →
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Suporte Psicológico</h3>
              <p className="text-gray-600 mb-4">
                Acompanhamento psicológico especializado com profissionais capacitados.
              </p>
              <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0">
                Saiba mais →
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-200">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-emerald-600" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Agendamento Fácil</h3>
              <p className="text-gray-600 mb-4">
                Sistema intuitivo para agendar consultas de forma rápida e segura.
              </p>
              <Button variant="ghost" className="text-emerald-600 hover:text-emerald-700 p-0">
                Saiba mais →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 px-4" aria-labelledby="testimonials-title">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="testimonials-title" className="text-3xl font-bold text-gray-900 mb-12">
            O que dizem sobre nós
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6 text-left">
              <p className="text-gray-600 mb-4 italic">
                "Finalmente encontrei um lugar onde me sinto segura e acolhida. 
                Os profissionais são incríveis e realmente entendem nossas necessidades."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Maria Silva</p>
                  <p className="text-sm text-gray-500">Usuária da plataforma</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 text-left">
              <p className="text-gray-600 mb-4 italic">
                "A Lacrei mudou minha vida. Ter acesso a profissionais capacitados 
                fez toda a diferença no meu processo de transição."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <User className="w-5 h-5 text-emerald-600" aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">João Santos</p>
                  <p className="text-sm text-gray-500">Usuário da plataforma</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
