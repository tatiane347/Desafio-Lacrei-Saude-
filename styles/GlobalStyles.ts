"use client"

import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  /* Reset otimizado para performance */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    /* Otimização de scroll */
    scroll-padding-top: 80px;
  }

  body {
    font-family: var(--font-inter), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif;
    line-height: 1.6;
    color: #111827;
    background-color: #ffffff;
    font-display: swap;
    overflow-x: hidden;
    /* Otimização de rendering */
    -webkit-overflow-scrolling: touch;
    text-size-adjust: 100%;
  }

  /* Marsha Design System - Cores otimizadas para contraste AAA */
  :root {
    --font-inter: 'Inter', system-ui, sans-serif;
    --primary-green: #047857;
    --primary-green-hover: #065f46;
    --primary-green-light: #d1fae5;
    --secondary-gray: #374151;
    --text-dark: #111827;
    --text-light: #374151;
    --background-light: #f9fafb;
    --white: #ffffff;
    --border-light: #d1d5db;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --transition-fast: 0.15s ease-in-out;
    --transition-normal: 0.2s ease-in-out;
    --border-radius: 0.5rem;
    --border-radius-lg: 0.75rem;
  }

  /* Typography otimizada com clamp para responsividade */
  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: var(--text-dark);
    letter-spacing: -0.025em;
    /* Otimização de rendering */
    text-wrap: balance;
  }

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1.25rem;
    color: var(--text-dark);
    letter-spacing: -0.025em;
    text-wrap: balance;
  }

  h3 {
    font-size: clamp(1.25rem, 3vw, 1.5rem);
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: var(--text-dark);
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1rem;
    color: var(--text-dark);
    text-wrap: pretty;
  }

  /* Otimizações de performance para imagens */
  img {
    max-width: 100%;
    height: auto;
    display: block;
    /* Lazy loading nativo */
    loading: lazy;
    /* Otimização de decode */
    decoding: async;
  }

  /* Otimizações para links */
  a {
    color: inherit;
    text-decoration: none;
    /* Otimização de touch */
    touch-action: manipulation;
  }

  /* Otimizações para botões */
  button {
    /* Otimização de touch */
    touch-action: manipulation;
    /* Remove tap highlight no mobile */
    -webkit-tap-highlight-color: transparent;
  }

  /* Accessibility melhorada */
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }
    
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Focus otimizado para acessibilidade */
  *:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 2px;
    border-radius: 2px;
  }

  /* Skip link otimizado */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--primary-green);
    color: white;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: var(--border-radius);
    z-index: 1000;
    font-weight: 600;
    transition: top var(--transition-fast);
  }

  .skip-link:focus {
    top: 6px;
  }

  /* Otimizações para print */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
    
    a, a:visited {
      text-decoration: underline;
    }
    
    img {
      max-width: 100% !important;
    }
  }

  /* Otimizações mobile */
  @media (max-width: 768px) {
    body {
      font-size: 16px;
      /* Previne zoom no iOS */
      -webkit-text-size-adjust: 100%;
    }
  }

  /* Otimização de scroll para iOS */
  @supports (-webkit-overflow-scrolling: touch) {
    body {
      -webkit-overflow-scrolling: touch;
    }
  }
`

// Styled Components otimizados
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`

export const Button = styled.button<{
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 600;
  border-radius: var(--border-radius);
  transition: all var(--transition-fast);
  cursor: pointer;
  border: none;
  text-decoration: none;
  font-family: inherit;
  position: relative;
  overflow: hidden;
  /* Otimizações de performance */
  will-change: transform;
  backface-visibility: hidden;
  /* Touch otimizado */
  touch-action: manipulation;
  -webkit-tap-highlight-color: transparent;

  ${(props) => {
    switch (props.size) {
      case "sm":
        return `
          padding: 0.5rem 1rem;
          font-size: 0.875rem;
          min-height: 36px;
        `
      case "lg":
        return `
          padding: 1rem 2rem;
          font-size: 1.125rem;
          min-height: 48px;
        `
      default:
        return `
          padding: 0.75rem 1.5rem;
          font-size: 1rem;
          min-height: 44px;
        `
    }
  }}

  ${(props) => {
    switch (props.variant) {
      case "secondary":
        return `
          background-color: var(--background-light);
          color: var(--text-dark);
          border: 2px solid var(--border-light);
          
          &:hover:not(:disabled) {
            background-color: var(--primary-green-light);
            color: var(--primary-green);
            border-color: var(--primary-green);
            transform: translateY(-1px);
          }
        `
      case "outline":
        return `
          background-color: transparent;
          color: var(--primary-green);
          border: 2px solid var(--primary-green);
          
          &:hover:not(:disabled) {
            background-color: var(--primary-green);
            color: var(--white);
            transform: translateY(-1px);
          }
        `
      default:
        return `
          background-color: var(--primary-green);
          color: var(--white);
          border: 2px solid var(--primary-green);
          
          &:hover:not(:disabled) {
            background-color: var(--primary-green-hover);
            border-color: var(--primary-green-hover);
            transform: translateY(-1px);
          }
        `
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }

  &:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  /* Micro-interação para feedback tátil */
  @media (hover: hover) {
    &:hover:not(:disabled) {
      box-shadow: var(--shadow-md);
    }
  }
`

export const Card = styled.div`
  background-color: var(--white);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-normal);
  border: 1px solid var(--border-light);
  /* Otimizações de performance */
  will-change: transform;
  backface-visibility: hidden;

  &:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-2px);
  }
`

export const Section = styled.section`
  padding: 4rem 0;
  position: relative;

  @media (max-width: 768px) {
    padding: 2.5rem 0;
  }
`

export const Grid = styled.div<{ columns?: number }>`
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: repeat(${(props) => Math.min(props.columns || 2, 2)}, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(${(props) => props.columns || 3}, 1fr);
  }
`

export const FlexContainer = styled.div<{
  direction?: "row" | "column"
  align?: "start" | "center" | "end"
  justify?: "start" | "center" | "end" | "between"
  gap?: string
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => {
    switch (props.align) {
      case "start":
        return "flex-start"
      case "end":
        return "flex-end"
      default:
        return "center"
    }
  }};
  justify-content: ${(props) => {
    switch (props.justify) {
      case "start":
        return "flex-start"
      case "end":
        return "flex-end"
      case "between":
        return "space-between"
      default:
        return "center"
    }
  }};
  gap: ${(props) => props.gap || "1rem"};

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`
