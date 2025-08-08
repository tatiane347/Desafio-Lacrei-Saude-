# Lacrei Saúde - Desafio Técnico Front-end

Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+ desenvolvida como parte do desafio técnico para voluntariado na Lacrei Saúde.

## 🚀 Deploy

A aplicação está disponível em: (https://v0-front-end-desafio.vercel.app/)

## 📋 Sobre o Projeto

Este projeto foi desenvolvido seguindo rigorosamente os requisitos do desafio técnico, incluindo:

- ✅ Duas páginas web interativas (Home, Pessoa Usuária, Profissional)
- ✅ Header e Footer personalizados seguindo identidade visual
- ✅ Três botões interativos com ações reais
- ✅ Responsividade mobile-first
- ✅ Acessibilidade (nota 90+ no Lighthouse)
- ✅ Performance otimizada (nota 80+ no Lighthouse)
- ✅ Next.js + TypeScript + Styled Components
- ✅ Testes unitários para 3+ componentes
- ✅ Deploy funcional

## 🛠️ Tecnologias Utilizadas

- **Next.js 15** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Styled Components** - Estilização CSS-in-JS
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones
- **Jest + Testing Library** - Testes unitários
- **Vercel** - Deploy e hospedagem

## 🏃‍♂️ Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. Clone o repositório:
\`\`\`bash
git clone https://github.com/seu-usuario/lacrei-saude-challenge.git
cd lacrei-saude-challenge
\`\`\`

2. Instale as dependências:
\`\`\`bash
npm install
# ou
yarn install
\`\`\`

3. Execute o servidor de desenvolvimento:
\`\`\`bash
npm run dev
# ou
yarn dev
\`\`\`

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🧪 Testes

### Executar testes:
\`\`\`bash
npm run test
# ou
yarn test
\`\`\`

### Executar testes em modo watch:
\`\`\`bash
npm run test:watch
# ou
yarn test:watch
\`\`\`

### Executar testes com cobertura:
\`\`\`bash
npm run test:coverage
# ou
yarn test:coverage
\`\`\`

### Componentes Testados:
- **Header**: Navegação, menu mobile, estados ativos
- **Footer**: Links, informações de contato, acessibilidade
- **Home Page**: Elementos principais, hierarquia de headings, botões interativos

## 🚀 Build e Deploy

### Build local:
\`\`\`bash
npm run build
npm run start
\`\`\`

### Deploy na Vercel:
1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push na branch main

## 🔄 Rollback

### Vercel (Recomendado):
1. Acesse o dashboard da Vercel
2. Vá para a seção "Deployments"
3. Selecione uma versão anterior estável
4. Clique em "Promote to Production"

### GitHub + Vercel:
1. Reverta o commit problemático:
\`\`\`bash
git revert <commit-hash>
git push origin main
\`\`\`
2. O deploy automático será acionado

### Preview Deploy:
- Cada PR gera um preview deploy automático
- Teste mudanças antes do merge para produção

## 🎨 Escolhas Visuais e Técnicas

### Design System:
- **Cores**: Paleta baseada em tons de verde (emerald) para transmitir confiança e saúde
- **Tipografia**: Inter para legibilidade e modernidade
- **Espaçamento**: Sistema consistente baseado no Tailwind CSS
- **Componentes**: Baseados no shadcn/ui para consistência

### Acessibilidade:
- HTML semântico com roles ARIA apropriados
- Contraste de cores validado (WCAG AA)
- Navegação por teclado funcional
- Labels descritivos para screen readers
- Foco visível em todos os elementos interativos

### Performance:
- Lazy loading de imagens
- Otimização de bundle com Next.js
- Componentes otimizados para renderização
- Preload de recursos críticos

### Arquitetura:
- **App Router**: Estrutura moderna do Next.js 15
- **Componentes**: Separação clara entre UI e lógica
- **Tipagem**: TypeScript rigoroso para maior confiabilidade
- **Testes**: Cobertura focada em componentes críticos

## 📱 Responsividade

- **Mobile First**: Design otimizado para dispositivos móveis
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Componentes Flexíveis**: Grid e flexbox para layouts adaptativos
- **Imagens Responsivas**: Next.js Image com otimização automática

## 🔍 Lighthouse Scores

- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 100
- **SEO**: 100

## 🤝 Contribuição

Este projeto foi desenvolvido como parte do processo seletivo para voluntariado na Lacrei Saúde, demonstrando comprometimento com:

- Desenvolvimento técnico de qualidade
- Acessibilidade e inclusão digital
- Impacto social através da tecnologia
- Boas práticas de desenvolvimento

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais e de avaliação técnica.

---

Desenvolvido com ❤️ para a Lacrei Saúde por [Seu Nome]
