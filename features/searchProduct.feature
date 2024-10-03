# Feature: Search for a product on Flipkart

#     Scenario: Searching for a product
#         Given I open Flipkart homepage 'https://www.flipkart.com/'
#         When I search for a product 'iPhone'
#         Then I should see search results containing 'iPhone'
        
Feature: Search for a product on Flipkart

    Scenario Outline: Searching for a product
        Given I open Flipkart homepage 'https://www.flipkart.com/'
        When I search for a product "<product>"
        Then I should see search results containing "<product>"
    
    Examples:
        | product | 
        | iPhone  | 
        | Macbook |
