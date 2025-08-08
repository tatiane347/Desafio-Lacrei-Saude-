import { render, screen, fireEvent } from '@testing-library/react'
import { usePathname } from 'next/navigation'
import { Header } from '@/components/header'

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}))

const mockUsePathname = usePathname as jest.MockedFunction<typeof usePathname>

describe('Header Component', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/')
  })

  it('renders the logo and navigation links', () => {
    render(<Header />)
    
    // Check if logo is present
    expect(screen.getByLabelText('Lacrei Saúde - Página inicial')).toBeInTheDocument()
    
    // Check if navigation links are present
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('Pessoa Usuária')).toBeInTheDocument()
    expect(screen.getByText('Profissional')).toBeInTheDocument()
  })

  it('highlights the active page', () => {
    mockUsePathname.mockReturnValue('/pessoa-usuaria')
    render(<Header />)
    
    const activeLink = screen.getByText('Pessoa Usuária')
    expect(activeLink).toHaveClass('bg-emerald-100', 'text-emerald-700')
  })

  it('toggles mobile menu when menu button is clicked', () => {
    render(<Header />)
    
    const menuButton = screen.getByLabelText('Abrir menu')
    fireEvent.click(menuButton)
    
    // Check if mobile menu is visible
    expect(screen.getByLabelText('Fechar menu')).toBeInTheDocument()
    
    // Click again to close
    fireEvent.click(screen.getByLabelText('Fechar menu'))
    expect(screen.getByLabelText('Abrir menu')).toBeInTheDocument()
  })

  it('has proper accessibility attributes', () => {
    render(<Header />)
    
    // Check for proper ARIA labels and roles
    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByLabelText('Navegação principal')).toBeInTheDocument()
    
    const menuButton = screen.getByLabelText('Abrir menu')
    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
  })
})
