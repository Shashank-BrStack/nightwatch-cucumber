// const { Given, Then, When } = require("cucumber");
// const { client } = require("nightwatch-api");

// // // Working code from here..................................
// Given('I open Flipkart homepage {string}', async function (string) {
//     // Write code here that turns the phrase above into concrete actions
//     await client.url(string);
//     await waitForElementVisible('img[title="Flipkart"]',5000);
// });

// When('I search for a product {string}', async function (string) {
//     // Write code here that turns the phrase above into concrete actions
//     await client.setValue('input[name="q"]',string);
//     await click('button[type="submit"]');
//     await client.url(string);
//     await waitForElementVisible('img[title="Flipkart"]',5000);
// });

// Then('I should see search results containing {string}', async function (string) {
//     // Write code here that turns the phrase above into concrete actions
//     await client.assert.element('div[class="KzDlHZ"]').text.to.contain(string);
//     // assert.textContains('div[class="KzDlHZ"]', string)
// });

const { Given, When, Then } = require('@cucumber/cucumber');
const { client } = require('nightwatch-api');
const assert = require('assert');

Given('I open Flipkart homepage {string}', async function (string) {
  await client.url(string);
  await client.waitForElementVisible('body', 10000);
  console.log('step-1');
});

When('I search for a product {string}', async function (string) {
  await client.setValue('input[name="q"]', string);
  console.log('step2-1');
  await client.click('button[type="submit"]');
  console.log('step-2-2');
  console.log('step-2-3');
});

Then('I should see search results containing {string}', async function (string) {
  // await client.pause(3000);
  const searchResult = await client.getText({
    selector: '.KzDlHZ',
    timeout: 10000
  }, (result) => {
    console.log('THIS IS MY SEARCH RESULT', result.value);
    console.log(string);
    assert(result.value.toLowerCase().includes(string.toLowerCase()));
  }); // Adjust this selector as necessary
});
