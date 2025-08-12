import { render, screen, fireEvent } from "@testing-library/react"
import { usePathname } from "next/navigation"
import { Header } from "@/components/Header"
import jest from "jest" // Import jest to fix the undeclared variable error

// Mock Next.js navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}))

// Mock styled-components
jest.mock("styled-components", () => ({
  __esModule: true,
  default: (component: any) => component,
  createGlobalStyle: () => () => null,
}))

const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>

describe("Header Component", () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue("/")
  })

  it("renders the logo and navigation links", () => {
    render(<Header />)

    expect(screen.getByLabelText("Lacrei Saúde - Página inicial")).toBeInTheDocument()
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Pessoa Usuária")).toBeInTheDocument()
    expect(screen.getByText("Profissional")).toBeInTheDocument()
  })

  it("highlights the active page", () => {
    mockUsePathname.mockReturnValue("/pessoa-usuaria")
    render(<Header />)

    const activeLink = screen.getByText("Pessoa Usuária")
    expect(activeLink).toHaveAttribute("aria-current", "page")
  })

  it("toggles mobile menu when menu button is clicked", () => {
    render(<Header />)

    const menuButton = screen.getByLabelText("Abrir menu")
    fireEvent.click(menuButton)

    expect(screen.getByLabelText("Fechar menu")).toBeInTheDocument()

    fireEvent.click(screen.getByLabelText("Fechar menu"))
    expect(screen.getByLabelText("Abrir menu")).toBeInTheDocument()
  })

  it("has proper accessibility attributes", () => {
    render(<Header />)

    expect(screen.getByRole("banner")).toBeInTheDocument()
    expect(screen.getByLabelText("Navegação principal")).toBeInTheDocument()

    const menuButton = screen.getByLabelText("Abrir menu")
    expect(menuButton).toHaveAttribute("aria-expanded", "false")
  })

  it("closes mobile menu when navigation link is clicked", () => {
    render(<Header />)

    const menuButton = screen.getByLabelText("Abrir menu")
    fireEvent.click(menuButton)

    const mobileNavLink = screen.getAllByText("Home")[1] // Second instance is in mobile menu
    fireEvent.click(mobileNavLink)

    expect(screen.getByLabelText("Abrir menu")).toBeInTheDocument()
  })
})
