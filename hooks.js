const { startWebDriver, createSession, closeSession, stopWebDriver } = require("nightwatch-api");
const { setDefaultTimeout, BeforeAll, AfterAll } = require("cucumber");

setDefaultTimeout(50000);

BeforeAll(async () => {
    await startWebDriver();
    await createSession();
});

AfterAll(async () => {
    await closeSession();
    await stopWebDriver();
});