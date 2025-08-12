"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useCallback } from "react"
import styled from "styled-components"
import { Menu, X } from "lucide-react"
import { Container, Button, FlexContainer } from "@/styles/GlobalStyles"

const HeaderContainer = styled.header`
  background-color: var(--white);
  box-shadow: var(--shadow-sm);
  border-bottom: 1px solid var(--border-light);
  position: sticky;
  top: 0;
  z-index: 50;
  will-change: transform;
`

const Nav = styled.nav`
  padding: 1rem 0;
`

const Logo = styled(Link)`
  font-size: 1.875rem;
  font-weight: 700;
  color: var(--primary-green);
  text-decoration: none;
  transition: color 0.15s ease-in-out;

  &:hover {
    color: var(--primary-green-hover);
  }

  &:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 2px;
    border-radius: 4px;
  }
`

const DesktopNav = styled.div`
  display: none;
  gap: 0.5rem;

  @media (min-width: 768px) {
    display: flex;
  }
`

const MobileMenuButton = styled(Button)`
  display: flex;
  
  @media (min-width: 768px) {
    display: none;
  }
`

const MobileMenu = styled.div<{ $isOpen: boolean }>`
  display: ${(props) => (props.$isOpen ? "block" : "none")};
  border-top: 1px solid var(--border-light);
  padding: 1rem 0;
  background-color: var(--white);

  @media (min-width: 768px) {
    display: none;
  }
`

const NavLink = styled(Link)<{ $isActive: boolean }>`
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.15s ease-in-out;
  display: block;
  min-height: 44px;
  display: flex;
  align-items: center;

  ${(props) =>
    props.$isActive
      ? `
    background-color: var(--primary-green-light);
    color: var(--primary-green);
    font-weight: 600;
  `
      : `
    color: var(--text-dark);
    
    &:hover {
      color: var(--primary-green);
      background-color: var(--primary-green-light);
    }
  `}

  &:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 2px;
  }

  @media (max-width: 767px) {
    margin-bottom: 0.5rem;
  }
`

export function Header() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Pessoa Usuária", href: "/pessoa-usuaria" },
    { name: "Profissional", href: "/profissional" },
  ]

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  return (
    <HeaderContainer role="banner">
      <Container>
        <Nav aria-label="Navegação principal">
          <FlexContainer justify="between" align="center">
            <Logo href="/" aria-label="Lacrei Saúde - Ir para página inicial">
              Lacrei
            </Logo>

            <DesktopNav>
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <NavLink
                    key={item.name}
                    href={item.href}
                    $isActive={isActive}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.name}
                  </NavLink>
                )
              })}
            </DesktopNav>

            <MobileMenuButton
              variant="secondary"
              size="sm"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
            >
              {isMenuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </MobileMenuButton>
          </FlexContainer>

          <MobileMenu $isOpen={isMenuOpen} id="mobile-menu">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <NavLink
                  key={item.name}
                  href={item.href}
                  $isActive={isActive}
                  aria-current={isActive ? "page" : undefined}
                  onClick={closeMenu}
                >
                  {item.name}
                </NavLink>
              )
            })}
          </MobileMenu>
        </Nav>
      </Container>
    </HeaderContainer>
  )
}
