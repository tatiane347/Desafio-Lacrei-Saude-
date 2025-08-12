import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, UserPlus, BookOpen, Award } from "lucide-react"

export default function ProfissionalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Button asChild variant="ghost" className="text-emerald-600 hover:text-emerald-700">
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Voltar
            </Link>
          </Button>
        </div>
      </div>

      {/* Header Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Profissional</h1>
              <div className="border-l-4 border-emerald-600 pl-6 mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o
                  bem-estar da comunidade LGBTQIAPN+.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-emerald-600 hover:bg-emerald-700 flex items-center gap-2">
                  <UserPlus className="w-5 h-5" />
                  Fazer Parte
                </Button>

                <Button
                  variant="outline"
                  className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 flex items-center gap-2 bg-transparent"
                >
                  <BookOpen className="w-5 h-5" />
                  Treinamentos
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/diverse-healthcare-cartoon-team.png"
                alt="Ilustração de equipe diversa de profissionais de saúde"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">O que buscamos em você</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Qualificação Profissional</h3>
              <p className="text-gray-600">
                Registro ativo no conselho profissional e experiência comprovada na área da saúde.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Capacitação Específica</h3>
              <p className="text-gray-600">
                Conhecimento sobre questões de saúde específicas da comunidade LGBTQIAPN+.
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                <UserPlus className="w-6 h-6 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compromisso Social</h3>
              <p className="text-gray-600">Dedicação ao atendimento humanizado e livre de preconceitos.</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
