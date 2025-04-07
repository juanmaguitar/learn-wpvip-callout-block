const { test, expect } = require("@wordpress/e2e-test-utils-playwright");
const { setupPostWithCallout, setupPostWithAlertCallout } = require("./utils");

test.describe("Frontend Test Suite", () => {
	test("should display the callout block correctly on the frontend", async ({
		admin,
		editor,
		page,
	}) => {
		// Setup post with callout block
		await setupPostWithCallout({ admin, editor, page });

		// Publish the post
		await editor.publishPost();

		// Get the post URL
		const postUrl = page.url();

		// Visit the frontend
		await page.goto(postUrl);

		// Verify the callout block is displayed
		await expect(page.locator(".wp-block-learn-wpvip-callout")).toBeVisible();

		// Verify the content is correct
		await expect(
			page.locator(".wp-block-learn-wpvip-callout__content"),
		).toContainText("This is a test paragraph created by our E2E test!");

		// Verify the block type is correct
		await expect(
			page.locator('[data-type="learn-wpvip/callout"]'),
		).toBeVisible();
	});

	test("should have the correct default type class", async ({
		admin,
		editor,
		page,
	}) => {
		// Setup post with callout block
		await setupPostWithCallout({ admin, editor, page });

		// Publish the post
		await editor.publishPost();

		// Get the post URL
		const postUrl = page.url();

		// Visit the frontend
		await page.goto(postUrl);

		// Get the callout block element
		const calloutBlock = page.locator(".wp-block-learn-wpvip-callout");

		// Verify the block has the correct type classes
		await expect(calloutBlock).toHaveClass(/is-tip-callout/);
	});

	test("should change callout type to alert and display correctly on frontend", async ({
		admin,
		editor,
		page,
	}) => {
		await setupPostWithAlertCallout({ admin, editor, page });

		await editor.publishPost();

		const postUrl = page.url();
		await page.goto(postUrl);

		const calloutBlock = page.locator(".wp-block-learn-wpvip-callout");

		// Final assertion
		await expect(calloutBlock).toHaveClass(/is-alert-callout/);
	});
});
