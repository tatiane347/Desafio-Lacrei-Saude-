import { render, screen } from "@testing-library/react"
import HomePage from "@/app/page"
import jest from "jest"

// Mock Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

// Mock styled-components
jest.mock("styled-components", () => ({
  __esModule: true,
  default: (component: any) => component,
}))

describe("Home Page", () => {
  it("renders the main heading", () => {
    render(<HomePage />)

    expect(screen.getByText("Boas vindas a Lacrei Saúde")).toBeInTheDocument()
  })

  it("renders the main action buttons", () => {
    render(<HomePage />)

    const userButton = screen.getByLabelText("Acessar área da pessoa usuária")
    const professionalButton = screen.getByLabelText("Acessar área do profissional")

    expect(userButton).toBeInTheDocument()
    expect(professionalButton).toBeInTheDocument()
  })

  it("renders the features section", () => {
    render(<HomePage />)

    expect(screen.getByText("Por que escolher a Lacrei Saúde?")).toBeInTheDocument()
    expect(screen.getByText("Segurança")).toBeInTheDocument()
    expect(screen.getByText("Acolhimento")).toBeInTheDocument()
    expect(screen.getByText("Rapidez")).toBeInTheDocument()
  })

  it("renders the CTA section", () => {
    render(<HomePage />)

    expect(screen.getByText("Pronto para começar?")).toBeInTheDocument()
    expect(screen.getByLabelText("Começar jornada na Lacrei Saúde")).toBeInTheDocument()
  })

  it("has proper heading hierarchy", () => {
    render(<HomePage />)

    const h1 = screen.getByRole("heading", { level: 1 })
    expect(h1).toHaveTextContent("Boas vindas a Lacrei Saúde")

    const h2Elements = screen.getAllByRole("heading", { level: 2 })
    expect(h2Elements).toHaveLength(2)
  })

  it("renders hero image with proper alt text", () => {
    render(<HomePage />)

    const heroImage = screen.getByAltText(
      "Ilustração de profissionais de saúde diversos acolhendo pacientes da comunidade LGBTQIAPN+",
    )
    expect(heroImage).toBeInTheDocument()
  })

  it("renders feature descriptions", () => {
    render(<HomePage />)

    expect(
      screen.getByText("Ambiente seguro e livre de discriminação para toda comunidade LGBTQIAPN+"),
    ).toBeInTheDocument()
    expect(
      screen.getByText("Profissionais capacitados e sensibilizados para atendimento humanizado"),
    ).toBeInTheDocument()
    expect(screen.getByText("Conecte-se rapidamente com profissionais qualificados e disponíveis")).toBeInTheDocument()
  })
})
