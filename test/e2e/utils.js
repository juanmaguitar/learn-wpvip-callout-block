/**
 * Shared test utilities for E2E tests
 */

const { expect, test } = require("@wordpress/e2e-test-utils-playwright");

/**
 * Sets up a post with a callout block
 * @param {Object} params - Test parameters
 * @param {Object} params.admin - WordPress admin utilities
 * @param {Object} params.editor - Editor utilities
 * @param {Object} params.page - Playwright page object
 * @param {string} content - Content to add to the callout block
 */
async function setupPostWithCallout(
	{ admin, editor, page },
	content = "This is a test paragraph created by our E2E test!",
) {
	// Create new post
	await admin.createNewPost();
	await page
		.locator(".block-editor-block-list__layout")
		.waitFor({ state: "visible" });

	await editor.insertBlock({
		name: "learn-wpvip/callout",
	});

	await page.locator(".wp-block-learn-wpvip-callout__content").fill(content);

	await editor.saveDraft();
}

/**
 * Sets up a post with an alert-type callout block
 * @param {Object} params - Test parameters
 * @param {Object} params.admin - WordPress admin utilities
 * @param {Object} params.editor - Editor utilities
 * @param {Object} params.page - Playwright page object
 * @param {string} content - Content to add to the callout block
 */
async function setupPostWithAlertCallout(
	{ admin, editor, page },
	content = "This is an alert callout created by our E2E test!",
) {
	await setupPostWithCallout({ admin, editor, page }, content);

	// // Wait for the editor canvas to be ready
	// await editor.canvas.waitFor({ state: "visible" });

	// Find the callout block
	const calloutBlockEditor = await page.locator(
		'[data-type="learn-wpvip/callout"]',
	);

	// Wait for block to be available
	await expect(calloutBlockEditor).toBeVisible();

	// Select the block
	await editor.selectBlocks(calloutBlockEditor);

	// Open block toolbar
	await editor.showBlockToolbar();

	// Click the block type button
	const blockTypeButton = page.locator('button:has-text("Tip")');
	await expect(blockTypeButton).toBeVisible();
	await blockTypeButton.click();

	// Click the Alert option
	const alertButton = page.locator('button[role="menuitem"]:has-text("Alert")');
	await expect(alertButton).toBeVisible();
	await alertButton.click();

	await editor.saveDraft();
}

module.exports = {
	setupPostWithCallout,
	setupPostWithAlertCallout,
};
