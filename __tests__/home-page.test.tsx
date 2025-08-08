import { render, screen } from '@testing-library/react'
import HomePage from '@/app/page'

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<HomePage />)
    
    expect(screen.getByText('Boas vindas a Lacrei Saúde')).toBeInTheDocument()
  })

  it('renders the main action buttons', () => {
    render(<HomePage />)
    
    const userButton = screen.getByLabelText('Acessar área da pessoa usuária')
    const professionalButton = screen.getByLabelText('Acessar área do profissional')
    
    expect(userButton).toBeInTheDocument()
    expect(professionalButton).toBeInTheDocument()
  })

  it('renders the features section', () => {
    render(<HomePage />)
    
    expect(screen.getByText('Por que escolher a Lacrei Saúde?')).toBeInTheDocument()
    expect(screen.getByText('Segurança')).toBeInTheDocument()
    expect(screen.getByText('Acolhimento')).toBeInTheDocument()
    expect(screen.getByText('Rapidez')).toBeInTheDocument()
  })

  it('renders the CTA section', () => {
    render(<HomePage />)
    
    expect(screen.getByText('Pronto para começar?')).toBeInTheDocument()
    expect(screen.getByLabelText('Começar jornada na Lacrei Saúde')).toBeInTheDocument()
  })

  it('has proper heading hierarchy', () => {
    render(<HomePage />)
    
    const h1 = screen.getByRole('heading', { level: 1 })
    expect(h1).toHaveTextContent('Boas vindas a Lacrei Saúde')
    
    const h2Elements = screen.getAllByRole('heading', { level: 2 })
    expect(h2Elements).toHaveLength(2) // Features and CTA sections
  })
})
