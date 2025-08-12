"use client"

import { render, screen, fireEvent } from "@testing-library/react"
import { InteractiveButton } from "@/components/InteractiveButton"
import jest from "jest"

// Mock styled-components
jest.mock("styled-components", () => ({
  __esModule: true,
  default: (component: any) => component,
}))

describe("InteractiveButton Component", () => {
  it("renders button with correct text", () => {
    const mockOnClick = jest.fn()
    render(<InteractiveButton onClick={mockOnClick}>Test Button</InteractiveButton>)

    expect(screen.getByText("Test Button")).toBeInTheDocument()
  })

  it("calls onClick handler when clicked", () => {
    const mockOnClick = jest.fn()
    render(<InteractiveButton onClick={mockOnClick}>Click Me</InteractiveButton>)

    const button = screen.getByText("Click Me")
    fireEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it("is disabled when disabled prop is true", () => {
    const mockOnClick = jest.fn()
    render(
      <InteractiveButton onClick={mockOnClick} disabled>
        Disabled Button
      </InteractiveButton>,
    )

    const button = screen.getByText("Disabled Button")
    expect(button).toBeDisabled()

    fireEvent.click(button)
    expect(mockOnClick).not.toHaveBeenCalled()
  })

  it("has proper accessibility attributes", () => {
    const mockOnClick = jest.fn()
    render(
      <InteractiveButton onClick={mockOnClick} aria-label="Test button for accessibility">
        Accessible Button
      </InteractiveButton>,
    )

    const button = screen.getByLabelText("Test button for accessibility")
    expect(button).toBeInTheDocument()
  })

  it("supports keyboard navigation", () => {
    const mockOnClick = jest.fn()
    render(<InteractiveButton onClick={mockOnClick}>Keyboard Button</InteractiveButton>)

    const button = screen.getByText("Keyboard Button")
    button.focus()

    fireEvent.keyDown(button, { key: "Enter", code: "Enter" })
    expect(mockOnClick).toHaveBeenCalledTimes(1)

    fireEvent.keyDown(button, { key: " ", code: "Space" })
    expect(mockOnClick).toHaveBeenCalledTimes(2)
  })
})
