Feature: validation of car search page
  In order to validate car search
  as a buyer
  I navigate http://www.carsguide.com.au

  Scenario: Searching for a new car
    Given I am on the home page http://www.carsguide.com.au of carsguide website
    When I move to buy + sell menu
    Then I click on Search Cars
    And I select Make as "BMW"
    And I select Model as "1 Series"
    And I select Location as "ACT - All"
    And I select Price as "$10,000"
    And I click on Find My Next Car button
    Then I should see list of searched cars from "BMW"
    And the page title should be "Bmw 1 Series Under 10000 for Sale ACT | carsguide"
