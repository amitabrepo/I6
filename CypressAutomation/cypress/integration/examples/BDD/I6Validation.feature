Feature: End to End I6
    @E2E
    Scenario: Validating the I6 Contact us page
        Given I open ECommerce Page
        Then I click on Accept cookies button
        Then I click on AboutUs link
        Then I select ContactUs button
        When I fill the contact details
            | firstname | lastname | email     | enquiry_type |
            | Test      | Quality  | aaaa88888 | Careers      |
        Then I click on Email-opt in
        When I click on SubmitNow button
        Then I will validate error message