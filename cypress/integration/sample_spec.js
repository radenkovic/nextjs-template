describe("My First Test", () => {
  it("Visits the app", () => {
    cy.visit("http://localhost:3000");
    cy.get(".text-3xl").should("have.text", "Sample");
  });
});
