import { render, screen } from "@testing-library/react";
import Home from ".";
import "@testing-library/jest-dom";
it("renders a heading", () => {
  render(<Home />);
  const myComponent = screen.getByText("Hello");
  expect(myComponent).toBeInTheDocument();
});
 