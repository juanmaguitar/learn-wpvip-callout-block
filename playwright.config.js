// @ts-check
const path = require("path");
const { defineConfig } = require("@playwright/test");
const wpScriptsPlaywrightConfig = require("@wordpress/scripts/config/playwright.config.js");

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
	...wpScriptsPlaywrightConfig,
	testDir: "./test/e2e",
});
