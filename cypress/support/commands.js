import userData from "../fixtures/profile.json";
import regData from "../fixtures/signup-form.json";

Cypress.Commands.add("login", () => {
  cy.get('[data-qa="login-email"]').type(regData.email);
  cy.get('[data-qa="login-password"]').type(regData.password);
  cy.get('[data-qa="login-button"]').click();
});
Cypress.Commands.add("loginFake", () => {
  cy.get('[data-qa="login-email"]').type("testdgijsg@gmail.com");
  cy.get('[data-qa="login-password"]').type("agkjadg");
  cy.get('[data-qa="login-button"]').click();
});
Cypress.Commands.add("signup", () => {
  cy.get('[data-qa="signup-name"]').type(userData.name);
  cy.get('[data-qa="signup-email"]').type(userData.email);
  cy.get('[data-qa="signup-button"]').click();
});
Cypress.Commands.add("signupForm", () => {
  cy.get(":nth-child(3) > .top").type(regData.title).click();
  cy.get('[data-qa="name"]').type(regData.name);
  cy.get('[data-qa="password"]').type(regData.password);
  cy.get('[data-qa="days"]');
  cy.get('[data-qa="months"]');
  cy.get('[data-qa="years"]');
  cy.get("#newsletter").click();
  cy.get("#optin").click();
  cy.get('[data-qa="first_name"]').type(regData.firstname);
  cy.get('[data-qa="last_name"]').type(regData.lastname);
  cy.get('[data-qa="company"]').type(regData.company);
  cy.get('[data-qa="address"]').type(regData.address);
  cy.get('[data-qa="address2"]').type(regData.address2);
  cy.get('[data-qa="country"]').select(regData.country);
  cy.get('[data-qa="state"]').type(regData.state);
  cy.get('[data-qa="city"]').type(regData.city);
  cy.get('[data-qa="zipcode"]').type(regData.zipcode);
  cy.get('[data-qa="mobile_number"]').type(regData.mobilenumber);
  cy.get('[data-qa="create-account"]').click();
});
