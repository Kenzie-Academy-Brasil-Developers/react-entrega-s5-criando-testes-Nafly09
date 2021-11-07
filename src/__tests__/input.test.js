import { render, screen } from "@testing-library/react";
import Input from "../components/Search";

describe("Input Component", () => {
  it("should be able to render an Input", () => {
    render(
      <Input type="number" placeholder="Insira o CEP" onChange={() => {}} />
    );

    expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy();
  });
});
