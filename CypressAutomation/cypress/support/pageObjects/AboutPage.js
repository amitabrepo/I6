class AboutPage {

    getConctactUsButton() {
        return cy.get('body > div.home-3-integrations-section.wf-section > div > div.home-3-integrations-left > a')
    }

    clickContactUsButton() {
        this.getConctactUsButton().click();
    }
}
export default AboutPage;
