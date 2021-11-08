import React from "react";
<reference types="cypress" />;

context("getCEP", () => {
  it("visits the home page", () => {
    cy.visit("http://localhost:3000");
    cy.viewport(1440, 900);
  });

  it("tries to add a new CEP", () => {
    cy.viewport(1440, 900);

    cy.get("input[name=CEP]").type("66055260");
    cy.get("button[name=submit]").click();
  });
});
