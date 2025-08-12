"use client"

import Link from "next/link"
import styled from "styled-components"
import { Container, Grid } from "@/styles/GlobalStyles"

const FooterContainer = styled.footer`
  background-color: #111827;
  color: var(--white);
  padding: 3rem 0 2rem;
`

const FooterSection = styled.div`
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

const FooterTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--white);
`

const FooterLink = styled(Link)`
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.15s ease-in-out;
  display: block;
  margin-bottom: 0.5rem;
  padding: 0.25rem 0;
  min-height: 32px;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--white);
  }

  &:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 2px;
    border-radius: 4px;
  }
`

const FooterText = styled.p`
  color: #9ca3af;
  margin-bottom: 0.5rem;
  line-height: 1.5;
`

const Logo = styled(Link)`
  font-size: 1.875rem;
  font-weight: 700;
  color: #10b981;
  text-decoration: none;
  transition: color 0.15s ease-in-out;

  &:hover {
    color: #059669;
  }

  &:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 2px;
    border-radius: 4px;
  }
`

const BottomSection = styled.div`
  border-top: 1px solid #374151;
  margin-top: 2rem;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`

const BottomLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 768px) {
    justify-content: flex-end;
  }
`

export function Footer() {
  return (
    <FooterContainer role="contentinfo">
      <Container>
        <Grid columns={4}>
          <FooterSection>
            <Logo href="/" aria-label="Lacrei Saúde - Ir para página inicial">
              Lacrei
            </Logo>
            <FooterText>
              Plataforma segura e acolhedora para comunidade LGBTQIAPN+ com profissionais capacitados e atendimento
              humanizado.
            </FooterText>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Navegação</FooterTitle>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/pessoa-usuaria">Pessoa Usuária</FooterLink>
            <FooterLink href="/profissional">Profissional</FooterLink>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Serviços</FooterTitle>
            <FooterText>Consultas Médicas Especializadas</FooterText>
            <FooterText>Suporte Psicológico LGBTQIAPN+</FooterText>
            <FooterText>Agendamento Online Seguro</FooterText>
            <FooterText>Telemedicina Inclusiva</FooterText>
          </FooterSection>

          <FooterSection>
            <FooterTitle>Contato</FooterTitle>
            <FooterLink
              href="mailto:contato@lacreisaude.com.br"
              aria-label="Enviar email para contato@lacreisaude.com.br"
            >
              contato@lacreisaude.com.br
            </FooterLink>
            <FooterLink href="tel:+5511999999999" aria-label="Ligar para (11) 99999-9999">
              (11) 99999-9999
            </FooterLink>
          </FooterSection>
        </Grid>

        <BottomSection>
          <FooterText>© 2025 Lacrei Saúde. Todos os direitos reservados.</FooterText>
          <BottomLinks>
            <FooterLink href="/privacidade">Política de Privacidade</FooterLink>
            <FooterLink href="/termos">Termos de Uso</FooterLink>
          </BottomLinks>
        </BottomSection>
      </Container>
    </FooterContainer>
  )
}
