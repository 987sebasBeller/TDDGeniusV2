describe("Crear usuario", () => {

    it("Verifica que los campos del usuario esten llenos", () => {
      cy.visit("/");
      cy.get("#menucrearusuario").click();
      cy.get("#btncrearuser").click();
      cy.on('window:alert', (str) => {
      expect(str).to.equal(`Todos los campos son obligatorios o la contraseña no es idéntica`)
      })
    });

});
