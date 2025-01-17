import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./Form";

describe("testing default render Form component", () => {
  it("should render name input", () => {
    render(<Form />);
    const textInput = screen.getByRole("textbox");
    expect(textInput).toBeInTheDocument();
    expect(textInput.textContent).toBe("");
  });
  it("should render password input", () => {
    render(<Form />);
    const passwordInput = screen.getByPlaceholderText(/your password/i);
    expect(passwordInput).toBeInTheDocument();
  });
  it("should render button", () => {
    render(<Form />);
    const button = screen.getByText(/submit/i);
    expect(button).toBeInTheDocument();
  });
});

describe("testing Form inputs events", () => {
  it("should render name input", () => {
    render(<Form />);
    const nameInput = screen.getByTestId("nameinput");
    expect(nameInput).toBeInTheDocument();

    const testNameText = "React";
    fireEvent.change(nameInput, { target: { value: testNameText } });
    expect(nameInput.value).not.toBe("");
    expect(nameInput.value).toBe(testNameText);
  });

  // it("should render name input and allow typing", () => {
  //     render(<Form />);
  //     const nameInput = screen.getByTestId('nameinput');
  //     expect(nameInput).toBeInTheDocument();

  //     const testNameText = 'React';

  //     userEvent.type(nameInput, testNameText);
  //     expect(nameInput.value).toBe(testNameText);
  //     expect(nameInput.value).not.toBe('');
  // });
});

describe("testing Form button events", () => {
  it("should render name input", () => {
    render(<Form />);
    const nameInputEl = screen.getByPlaceholderText(/your name/i);
    const passwordInputEl = screen.getByPlaceholderText(/your password/i);
    const button = screen.getByRole("button", { name: /submit/i });
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(nameInputEl.value).toBe("");
    expect(passwordInputEl.value).toBe("");
  });
});
