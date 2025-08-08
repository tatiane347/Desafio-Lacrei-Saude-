import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link 
              href="/" 
              className="text-2xl font-bold text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
              aria-label="Lacrei Saúde - Página inicial"
            >
              Lacrei
            </Link>
            <p className="mt-4 text-gray-400 text-sm">
              Plataforma segura e acolhedora para comunidade LGBTQIAPN+
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/pessoa-usuaria" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Pessoa Usuária
                </Link>
              </li>
              <li>
                <Link 
                  href="/profissional" 
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  Profissional
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Consultas Médicas</li>
              <li>Suporte Psicológico</li>
              <li>Agendamento Online</li>
              <li>Telemedicina</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a 
                  href="mailto:contato@lacreisaude.com.br" 
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Enviar email para contato@lacreisaude.com.br"
                >
                  contato@lacreisaude.com.br
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5511999999999" 
                  className="hover:text-white transition-colors duration-200"
                  aria-label="Ligar para (11) 99999-9999"
                >
                  (11) 99999-9999
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Lacrei Saúde. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link 
              href="/privacidade" 
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Política de Privacidade
            </Link>
            <Link 
              href="/termos" 
              className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
            >
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
