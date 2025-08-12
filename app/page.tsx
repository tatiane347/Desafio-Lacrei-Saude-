"use client"

import type React from "react"

import Link from "next/link"
import { Suspense } from "react"
import styled from "styled-components"
import { Container, Button, Card, Section, Grid, FlexContainer } from "@/styles/GlobalStyles"
import { OptimizedImage } from "@/components/OptimizedImage"

const HeroSection = styled(Section)`
  background-color: var(--white);
  text-align: center;
  padding-top: 2rem;
  contain: layout style paint;
`

const HeroTitle = styled.h1`
  color: var(--text-dark);
  margin-bottom: 1.5rem;
`

const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  color: var(--text-light);
  margin-bottom: 3rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`

const HeroImageWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 50rem;
  margin: 0 auto;
  aspect-ratio: 2 / 1;
`

const FeaturesSection = styled(Section)`
  background-color: var(--background-light);
  contain: layout style paint;
`

const FeatureCardStyled = styled(Card)`
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  contain: layout style paint;
`

const FeatureIcon = styled.div`
  width: 4rem;
  height: 4rem;
  background-color: var(--primary-green-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  will-change: transform;

  svg {
    width: 2rem;
    height: 2rem;
    color: var(--primary-green);
  }
`

const CTASection = styled(Section)`
  background: linear-gradient(135deg, var(--primary-green) 0%, var(--primary-green-hover) 100%);
  color: var(--white);
  text-align: center;
  contain: layout style paint;

  h2 {
    color: var(--white);
  }

  p {
    color: rgba(255, 255, 255, 0.95);
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }
`

const CTAButton = styled(Button)`
  background-color: var(--white);
  color: var(--primary-green);
  border-color: var(--white);

  &:hover:not(:disabled) {
    background-color: #f9fafb;
    transform: translateY(-1px);
    box-shadow: var(--shadow-lg);
  }
`

// Componente de feature otimizado
function FeatureCardComponent({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <FeatureCardStyled>
      <FeatureIcon>{icon}</FeatureIcon>
      <h3>{title}</h3>
      <p>{description}</p>
    </FeatureCardStyled>
  )
}

const ImageFallback = styled.div`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, var(--primary-green-light) 0%, var(--background-light) 100%);
  border-radius: var(--border-radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--primary-green);
  font-weight: 600;
  font-size: 1.125rem;
`

export default function HomePage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <HeroSection aria-labelledby="hero-title">
        <Container>
          <HeroTitle id="hero-title">Boas vindas a Lacrei Saúde</HeroTitle>
          <HeroSubtitle>
            Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+ com profissionais capacitados
          </HeroSubtitle>

          <FlexContainer gap="1rem" style={{ marginBottom: "3rem" }}>
            <Button
              as={Link}
              href="/pessoa-usuaria"
              size="lg"
              aria-label="Acessar área da pessoa usuária - Encontre profissionais capacitados para suas necessidades"
            >
              Pessoa Usuária
            </Button>

            <Button
              as={Link}
              href="/profissional"
              variant="outline"
              size="lg"
              aria-label="Acessar área do profissional - Cadastre-se como profissional de saúde especializado"
            >
              Profissional
            </Button>
          </FlexContainer>

          <HeroImageWrapper>
            <Suspense fallback={<ImageFallback>Carregando imagem...</ImageFallback>}>
              <OptimizedImage
                src="/welcoming-healthcare.png"
                alt="Profissionais de saúde diversos e capacitados acolhendo pacientes da comunidade LGBTQIAPN+ em ambiente seguro, inclusivo e humanizado"
                width={800}
                height={400}
                priority
              />
            </Suspense>
          </HeroImageWrapper>
        </Container>
      </HeroSection>

      <FeaturesSection aria-labelledby="features-title">
        <Container>
          <h2 id="features-title" style={{ textAlign: "center", marginBottom: "3rem" }}>
            Por que escolher a Lacrei Saúde?
          </h2>

          <Grid columns={3}>
            <FeatureCardComponent
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              }
              title="Segurança"
              description="Ambiente seguro e livre de discriminação para toda comunidade LGBTQIAPN+ com protocolos rigorosos de privacidade"
            />

            <FeatureCardComponent
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              }
              title="Acolhimento"
              description="Profissionais capacitados e sensibilizados para atendimento humanizado e respeitoso às diversidades"
            />

            <FeatureCardComponent
              icon={
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Rapidez"
              description="Conecte-se rapidamente com profissionais qualificados e disponíveis através de nossa plataforma otimizada"
            />
          </Grid>
        </Container>
      </FeaturesSection>

      <CTASection aria-labelledby="cta-title">
        <Container>
          <h2 id="cta-title">Pronto para começar?</h2>
          <p>Junte-se à nossa comunidade e tenha acesso a cuidados de saúde inclusivos, seguros e especializados</p>
          <CTAButton
            as={Link}
            href="/pessoa-usuaria"
            size="lg"
            aria-label="Começar jornada na Lacrei Saúde - Cadastre-se agora e encontre o profissional ideal"
          >
            Começar Agora
          </CTAButton>
        </Container>
      </CTASection>
    </>
  )
}
