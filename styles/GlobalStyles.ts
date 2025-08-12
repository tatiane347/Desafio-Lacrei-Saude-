"use client"

import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  * {
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
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, system-ui, sans-serif;
    line-height: 1.6;
    color: #1f2937;
    background-color: #ffffff;
    font-display: swap;
    overflow-x: hidden;
  }

  /* Marsha Design System Colors - High Contrast */
  :root {
    --primary-green: #047857;
    --primary-green-hover: #065f46;
    --primary-green-light: #d1fae5;
    --secondary-gray: #4b5563;
    --text-dark: #111827;
    --text-light: #4b5563;
    --background-light: #f9fafb;
    --white: #ffffff;
    --border-light: #d1d5db;
    --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  /* Typography - Marsha Design System - Optimized */
  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 700;
    line-height: 1.1;
    margin-bottom: 1.5rem;
    color: var(--text-dark);
    letter-spacing: -0.025em;
  }

  h2 {
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    font-weight: 600;
    line-height: 1.2;
    margin-bottom: 1.25rem;
    color: var(--text-dark);
    letter-spacing: -0.025em;
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
  }

  /* Performance Optimizations */
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Accessibility Improvements */
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

  /* High Contrast Focus for Accessibility */
  *:focus-visible {
    outline: 3px solid #2563eb;
    outline-offset: 2px;
    border-radius: 2px;
  }

  /* Skip Link for Screen Readers */
  .skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--primary-green);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 1000;
  }

  .skip-link:focus {
    top: 6px;
  }

  /* Print Styles */
  @media print {
    * {
      background: transparent !important;
      color: black !important;
      box-shadow: none !important;
      text-shadow: none !important;
    }
  }

  @media (max-width: 768px) {
    body {
      font-size: 16px;
    }
  }
`

// Optimized Styled Components
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
  border-radius: 0.5rem;
  transition: all 0.15s ease-in-out;
  cursor: pointer;
  border: none;
  text-decoration: none;
  font-family: inherit;
  position: relative;
  overflow: hidden;
  will-change: transform;

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
`

export const Card = styled.div`
  background-color: var(--white);
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-sm);
  transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;
  border: 1px solid var(--border-light);
  will-change: transform;

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
