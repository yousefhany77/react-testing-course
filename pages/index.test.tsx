import { screen, render } from "@testing-library/react";
import Index from ".";

describe("Index", () => {
  it("Render correctly", () => {
    render(<Index />);

    const pageHeading = screen.getByRole("heading", {
      name: /job application form/i,
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();
    const input = screen.getByRole("textbox", { name: /name/i });
    expect(input).toBeInTheDocument();

    const comboBox = screen.getByRole("combobox");
    expect(comboBox).toBeInTheDocument();

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();

    const sumbitButton = screen.getByRole("button", { name: /sumbit/i });
    expect(sumbitButton).toBeInTheDocument();
  });
  it("should Render List items in Order", () => {
    render(<Index />);
    const listItems = screen.getAllByRole("listitem");
    const skills = ["html", "javascript", "React"];

    expect(listItems).toHaveLength(3);
    expect(listItems.map((item) => item.textContent)).toEqual(skills);
  });
  it("should render delayed button", async () => {
    render(<Index />);

    const dylayed = await screen.findByRole(
      "button",
      { name: "delay" },
      { timeout: 2000 }
    );
    expect(dylayed).toBeInTheDocument();
  });
});
