import "cypress-real-events/support";
class ContactUsPage {

    getFirstName() {
        return cy.get('#First-Name')
    }
    getLastName() {
        return cy.get('#Last-Name')
    }
    getEmail() {
        return cy.get('#Email')
    }
    getEnquiryType() {
        return cy.get('#Enquiry-2')
    }
    getEmailOptIn() {
        return cy.get('#Subscribe-to-Email')
    }

    getConctactUsButton() {
        return cy.get('body > div.home-3-integrations-section.wf-section > div > div.home-3-integrations-left > a')
    }

    getSubmitButton() {
        return cy.get('#email-form > input')
    }

    getCompany() {
        return cy.get('#Company-2')
    }

    clickContactUsButton() {
        this.getConctactUsButton().click();
    }

    fillContactDetails(dataTable) {
        this.getFirstName().type(dataTable.rawTable[1][0])
        this.getLastName().type(dataTable.rawTable[1][1])
        this.getEmail().type(dataTable.rawTable[1][2])
        this.getEnquiryType().select(dataTable.rawTable[1][3])
    }
    checkEmailOptIn() {
        this.getEmailOptIn().click()
    }
    clickSubmitButton() {
        this.getSubmitButton().click()
    }
    validateErrorMessage() {
        cy.screenshot();
        this.getCompany().invoke('prop', 'validationMessage').should('equal', 'Please fill in this field.')
    }
}
export default ContactUsPage;
