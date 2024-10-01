# Feature: Search for a product on Flipkart

#     Scenario Outline: Searching for a product
#         Given I open Flipkart homepage
#         When I search for a product "<product>"
#         Then I should see search results containing "<product>"
    
#     Examples:
#         | product | 
#         | iPhone  | 
#         | Macbook |

Feature: Search for a product on Flipkart

    Scenario Outline: Searching for a product
        Given I open Flipkart homepage 'https://www.flipkart.com/'
        When I search for a product "<product>"
        Then I should see search results containing "<product>"
    
    Examples:
        | product | 
        | iPhone  | 
        # | Macbook |


# Feature: Title is Bing

#     Scenario: Check if title is Bing
#         Given I open Bing search page 'https://www.bing.com'
#         Then the title is 'Bing'
