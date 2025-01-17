import { render, screen } from "@testing-library/react";
import { HomePage } from "./HomePage";
import { Header } from "../../components/layout/Header/Header";

describe("testing Page", () => {
  test("renders learn react link", () => {
    render(<HomePage />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders image', () => {
    render(<HomePage />);
    const image = screen.getByTestId('image')
    expect(image).toBeInTheDocument();
  })
});

describe("testing Header", () => {
  test('renders 3 li items', () => {
    render(<Header />);
    const liItems = screen.getAllByRole('listitem')
    expect(liItems).toHaveLength(3);
    expect(liItems.length).toBe(3);
  })
})
