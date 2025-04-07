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
	outputDir: "./test/e2e/test-results",
	use: {
		// Base URL to use in actions like `await page.goto('/')`.
		baseURL: "http://localhost:8890",
		// Collect trace when retrying the test
		trace: "on-first-retry",
		// Capture screenshot only when test fails
		screenshot: "only-on-failure",
		// Record video only when test fails
		video: "retain-on-failure",
	},
});
