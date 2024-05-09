describe("Homework 13", () => {
  it("Register User", () => {
    //1. Launch browser
    //2. Navigate to url 'http://automationexercise.com'
    cy.visit("http://automationexercise.com/");

    //4. Click on 'Signup / Login' button
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();

    // 5. Verify 'New User Signup!' is visible
    cy.contains("New User Signup!").should("be.visible");

    // 6. Enter name and email address
    // 7. Click 'Signup' button
    cy.signup();

    // 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.get(":nth-child(1) > b").should("be.visible");

    // 9. Fill details: Title, Name, Email, Password, Date of birth
    // 10. Select checkbox 'Sign up for our newsletter!'
    // 11. Select checkbox 'Receive special offers from our partners!'
    // 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    // 13. Click 'Create Account button'
    cy.signupForm();
    // 14. Verify that 'ACCOUNT CREATED!' is visible
    cy.contains("Account Created!").should("be.visible");
    // 15. Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click();
    // 16. Verify that 'Logged in as username' is visible
    cy.get(":nth-child(10) > a")
      .contains("torniketornike")
      .should("be.visible");

    // 17. Click 'Delete Account' button
    // 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
  });

  it("Login User with correct email and password", () => {
    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    cy.visit("http://automationexercise.com/");

    // 4. Click on 'Signup / Login' button
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();

    // 5. Verify 'Login to your account' is visible
    cy.contains("Login to your account").should("be.visible");

    // 6. Enter correct email address and password
    // 7. Click 'login' button
    cy.login();

    // 8. Verify that 'Logged in as username' is visible
    cy.get(":nth-child(10) > a")
      .contains("torniketornike")
      .should("be.visible");
    // 9. Click 'Delete Account' button
    cy.get(".shop-menu > .nav > :nth-child(5) > a").click();
    // 10. Verify that 'ACCOUNT DELETED!' is visible
    cy.contains("Account Deleted!").should("be.visible");
  });

  it("Login User with incorrect email and password", () => {
    //   1. Launch browser
    //   2. Navigate to url 'http://automationexercise.com'
    //   3. Verify that home page is visible successfully
    cy.visit("http://automationexercise.com/");

    //   4. Click on 'Signup / Login' button
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();

    //   5. Verify 'Login to your account' is visible
    cy.contains("Login to your account").should("be.visible");

    //   6. Enter incorrect email address and password
    //   7. Click 'login' button
    cy.loginFake();
    //   8. Verify error 'Your email or password is incorrect!' is visible
    cy.contains("Your email or password is incorrect!").should("be.visible");
  });
});
