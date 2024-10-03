const { Before, After } = require("@cucumber/cucumber");
const { createSession, closeSession, client} = require("nightwatch-api");

// setDefaultTimeout(50000);

// Increase timeout for setup and teardown
Before({ timeout: 30 * 1000 }, async function () {
    await createSession(); // Ensure session is created
});

After({ timeout: 30 * 1000 }, async function () {
    // if (client) {
    //   await client.end(); // Ensure session is closed properly
    // }
    await closeSession();
});