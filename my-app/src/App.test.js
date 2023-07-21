import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from "@testing-library/user-event"


  test('Class: checking checkbox functionality', () => {
  render(<App />);
  //check if box is not checked 
  userEvent.click(screen.getByTestId("checkbox"));
  expect(screen.getByTestId("checkbox")).toBeChecked()
});

  test("alone:check if 'Hello World' is on page", () => {
   // render(<App />);
    const { getByText } = render(<App />);
    const headingElement = getByText("Hello World");
    expect(headingElement.tagName).toBe("H1");
});
