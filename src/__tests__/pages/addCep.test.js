import { render, fireEvent, waitFor, screen } from "@testing-library/react";

import Search from "../../components/Search";

describe("Search CEP", () => {
  it("should be able to search a CEP", async () => {
    render(<Search />);
    const cepField = screen.getByPlaceholderText("Insira o CEP");
    const buttonElement = screen.getByText("Buscar pelo CEP");

    fireEvent.change(cepField, { target: { value: "66055260" } });
    fireEvent.click(buttonElement);
    expect(cepField).toHaveValue("66055260");
  });
});
