import { render, screen } from "@testing-library/react";
import Button from "../components/Search";

describe("Button Component", () => {
  it("should be able to render an Button", () => {
    render(<Button onClick={() => {}} />);

    expect(screen.getByRole("button")).toBeTruthy();
  });
});
