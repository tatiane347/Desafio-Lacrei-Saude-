"use client"

import Image from "next/image"
import { useState } from "react"
import styled from "styled-components"

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
`

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

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid var(--primary-green-light);
  border-top: 3px solid var(--primary-green);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
}

export function OptimizedImage({ src, alt, width, height, priority = false, className }: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return (
      <ImageFallback className={className}>
        <div style={{ textAlign: "center" }}>
          <div>🖼️</div>
          <div style={{ marginTop: "0.5rem", fontSize: "0.875rem" }}>Imagem não disponível</div>
        </div>
      </ImageFallback>
    )
  }

  return (
    <ImageContainer className={className}>
      {isLoading && (
        <ImageFallback>
          <LoadingSpinner />
        </ImageFallback>
      )}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={75}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 800px"
        style={{
          width: "100%",
          height: "auto",
          display: isLoading ? "none" : "block",
        }}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false)
          setHasError(true)
        }}
        // Configurações válidas para Next.js 15
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </ImageContainer>
  )
}
