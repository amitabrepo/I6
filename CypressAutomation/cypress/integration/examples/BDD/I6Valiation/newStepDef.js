/// <reference types="Cypress" />
import HomePage from '../../../../support/pageObjects/HomePage'
import AboutPage from '../../../../support/pageObjects/AboutPage';
import ContactUsPage from '../../../../support/pageObjects/ContactUsPage';

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
const homePage = new HomePage()
const aboutPage = new AboutPage()
const contactUSPage = new ContactUsPage()

Given('I open ECommerce Page', () => {
    homePage.openEcommPage()
})
Then('I click on AboutUs link', () => {
    homePage.clickAboutLink()
})
Then('I click on Accept cookies button', () => {
    homePage.clickAcceptButton()
})
Then('I select ContactUs button', () => {
    aboutPage.clickContactUsButton();
})

When('I fill the contact details', function (dataTable) {
    contactUSPage.fillContactDetails(dataTable)
})

Then('I click on Email-opt in', () => {
    contactUSPage.checkEmailOptIn();
})
When('I click on SubmitNow button', () => {
    contactUSPage.clickSubmitButton();
})
Then('I will validate error message', () => {
    contactUSPage.validateErrorMessage();
})
Then('Then I add new passport', () => {
    contactUSPage.validateErrorMessage();
})       

//When I fill the form details
When('I fill the form details', function (dataTable) {
    homePage.fillFormDetails(dataTable);
})

// Then validate the forms behaviour
Then('validate the forms behaviour', function () {
    homePage.validateFormsBehaviour();
})

// And select the Shop Page
And('select the Shop Page', () => {
    homePage.selectShopPage();
})












