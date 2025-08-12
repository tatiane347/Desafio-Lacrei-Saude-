"use client"

import type { ReactNode, KeyboardEvent } from "react"
import styled from "styled-components"

const StyledButton = styled.button<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  border: none;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s ease-in-out;
  background-color: var(--primary-green);
  color: var(--white);
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  &:hover:not(:disabled) {
    background-color: var(--primary-green-hover);
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid var(--primary-green);
    outline-offset: 2px;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`

interface InteractiveButtonProps {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
  "aria-label"?: string
  className?: string
}

export function InteractiveButton({
  children,
  onClick,
  disabled = false,
  "aria-label": ariaLabel,
  className,
}: InteractiveButtonProps) {
  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      if (!disabled) {
        onClick()
      }
    }
  }

  return (
    <StyledButton
      onClick={onClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-label={ariaLabel}
      className={className}
      type="button"
    >
      {children}
    </StyledButton>
  )
}
