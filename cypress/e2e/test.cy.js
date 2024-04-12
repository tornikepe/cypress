describe("Homework1", () => {
  it("Login User with correct email and password", () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Signup / Login' button
    cy.get('[href="/login"]').click();
    // 5. Verify 'Login to your account' is visible
    cy.contains("Login to your account").should("be.visible");
    // 6. Enter correct email address and password
    cy.get('[data-qa="login-email"]').type("peitrishvili@gmail.com");
    cy.get('[data-qa="login-password"]').type("pass1234");
    // 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click();
    // 8. Verify that 'Logged in as username' is visible
    cy.get(":nth-child(10) > a").contains("tornike").should("be.visible");
    // 9. Click 'Delete Account' button
    // 10. Verify that 'ACCOUNT DELETED!' is visible
  });
  it("Login User with incorrect email and password ", () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Signup / Login' button
    cy.get('[href="/login"]').click();
    // 5. Verify 'Login to your account' is visible
    cy.contains("Login to your account").should("be.visible");
    // 6. Enter incorrect email address and password
    cy.get('[data-qa="login-email"]').type("test@gmail.com");
    cy.get('[data-qa="login-password"]').type("test");
    // 7. Click 'login' button
    cy.get('[data-qa="login-button"]').click();
    // 8. Verify error 'Your email or password is incorrect!' is visible
    cy.get(".login-form > form > p")
      .contains("Your email or password is incorrect!")
      .should("be.visible");
  });
  it("Register User with existing email", () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    cy.visit("http://automationexercise.com");
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Signup / Login' button
    cy.get('[href="/login"]').click();
    // 5. Verify 'New User Signup!' is visible
    cy.contains("New User Signup!").should("be.visible");
    // 6. Enter name and already registered email address
    cy.get('[data-qa="signup-name"]').type("tornike");
    cy.get('[data-qa="signup-email"]').type("peitrishvili@gmail.com");
    // 7. Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click();
    // 8. Verify error 'Email Address already exist!' is visible
    cy.get(".signup-form > form > p")
      .contains("Email Address already exist!")
      .should("be.visible");
  });
});
