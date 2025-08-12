"use client"

import type React from "react"

import styled from "styled-components"
import { Card } from "@/styles/GlobalStyles"

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

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <FeatureCardStyled>
      <FeatureIcon>{icon}</FeatureIcon>
      <h3>{title}</h3>
      <p>{description}</p>
    </FeatureCardStyled>
  )
}
