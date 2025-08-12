import { render, screen } from "@testing-library/react"
import { Footer } from "@/components/Footer"
import jest from "jest"

// Mock styled-components
jest.mock("styled-components", () => ({
  __esModule: true,
  default: (component: any) => component,
}))

describe("Footer Component", () => {
  it("renders all footer sections", () => {
    render(<Footer />)

    expect(screen.getByText("Navegação")).toBeInTheDocument()
    expect(screen.getByText("Serviços")).toBeInTheDocument()
    expect(screen.getByText("Contato")).toBeInTheDocument()
  })

  it("renders navigation links", () => {
    render(<Footer />)

    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Pessoa Usuária")).toBeInTheDocument()
    expect(screen.getByText("Profissional")).toBeInTheDocument()
  })

  it("renders contact information with proper links", () => {
    render(<Footer />)

    const emailLink = screen.getByLabelText("Enviar email para contato@lacreisaude.com.br")
    expect(emailLink).toHaveAttribute("href", "mailto:contato@lacreisaude.com.br")

    const phoneLink = screen.getByLabelText("Ligar para (11) 99999-9999")
    expect(phoneLink).toHaveAttribute("href", "tel:+5511999999999")
  })

  it("has proper accessibility attributes", () => {
    render(<Footer />)

    expect(screen.getByRole("contentinfo")).toBeInTheDocument()
  })

  it("renders copyright information", () => {
    render(<Footer />)

    expect(screen.getByText("© 2025 Lacrei Saúde. Todos os direitos reservados.")).toBeInTheDocument()
  })

  it("renders brand logo with proper link", () => {
    render(<Footer />)

    const logo = screen.getByLabelText("Lacrei Saúde - Página inicial")
    expect(logo).toHaveAttribute("href", "/")
    expect(logo).toHaveTextContent("Lacrei")
  })

  it("renders all service items", () => {
    render(<Footer />)

    expect(screen.getByText("Consultas Médicas")).toBeInTheDocument()
    expect(screen.getByText("Suporte Psicológico")).toBeInTheDocument()
    expect(screen.getByText("Agendamento Online")).toBeInTheDocument()
    expect(screen.getByText("Telemedicina")).toBeInTheDocument()
  })
})
