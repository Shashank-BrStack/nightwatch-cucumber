const { Given, Then, When } = require("cucumber");
const { client } = require("nightwatch-api");

// // Given('I open Bing search page {string}', function (string) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return client.url(string).waitForElementVisible('body', 1000);
// // });

// // Then('the title is {string}', function (string) {
// //     // Write code here that turns the phrase above into concrete actions
// //     return client.assert.title(string);
// // });


// // Working code from here..................................
Given('I open Flipkart homepage {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return client.url(string).waitForElementVisible('img[title="Flipkart"]',5000);
});

When('I search for a product {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    client.setValue('input[name="q"]',string).click('button[type="submit"]');
    return client.url(string).waitForElementVisible('img[title="Flipkart"]',5000);
});

Then('I should see search results containing {string}', function (string) {
    // Write code here that turns the phrase above into concrete actions
    return client.expect.element('div[class="KzDlHZ"]').text.to.contain(string);
    // assert.textContains('div[class="KzDlHZ"]', string)
});


// module.exports = function() {

//     Given(/^I open Flipkart homepage$/, function(browser) {
//       // Navigate to Flipkart homepage
//       browser
//         .url('https://www.flipkart.com')
//         .waitForElementVisible('body', 10000)  // Wait for the body element to be visible
//         .assert.titleContains('Flipkart');     // Assert the page title contains 'Flipkart'
//     });
  
//     this.When(/^I search for a product "([^"]*)"$/, function(product, browser) {
//       // Handle the login popup if it appears
//       browser
//         .waitForElementVisible('body', 5000)
//         .execute(function() {
//           const closeButton = document.querySelector('button._2KpZ6l._2doB4z');
//           if (closeButton) {
//             closeButton.click();
//           }
//         });
  
//       // Enter the product name in the search bar and submit the search
//       browser
//         .setValue('input[name="q"]', product)  // Enter the product in the search input field
//         .keys(browser.Keys.ENTER)             // Press the Enter key to submit the search
//         .pause(3000);                         // Wait for the results to load
//     });
  
//     this.Then(/^I should see search results containing "([^"]*)"$/, function(product, browser) {
//       // Check if the search results page contains the product name in the results
//       browser
//         .assert.containsText('div._1YokD2', product)  // Assert that product name is in the search results section
//         .end();  // Close the browser at the end of the test
//     });
  
//   };
  