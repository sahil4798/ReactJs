import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Greeting components", () => {
  test("renders Hello World! as a text", () => {
    //#AAA-Rule

    //Arrange
    render(<Greeting />);
    //Act
    //...noting
    //Assert
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();
  });
  test("render Greeting! if button was NOT clicked", () => {
    render(<Greeting />);
    const greetingElement = screen.getByText("Greeting", { exact: false });
    expect(greetingElement).toBeInTheDocument();
  });
  test("render Changed if buttomn was clicked", () => {
    render(<Greeting />);
    //Arange
    const button = screen.getByRole("button");
    userEvent.click(button);
    //Assert
    const greeetingElement = screen.getByText("Clicked");
    expect(greeetingElement).toBeInTheDocument();
  });

  test("if button was clicked do not render Greeting", () => {
    render(<Greeting />);
    const button = screen.getByRole("button");
    userEvent.click(button);
    const greetingElement = screen.queryByText("Greeting", { exact: false });
    expect(greetingElement).toBeNull();
  });
});
