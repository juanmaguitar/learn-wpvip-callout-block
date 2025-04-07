const { test, expect } = require("@wordpress/e2e-test-utils-playwright");
const { setupPostWithCallout } = require("./utils");

test.describe("Editor Test Suite", () => {
	test.beforeEach(async ({ admin, editor, page }) => {
		await setupPostWithCallout({ admin, editor, page });
	});

	test("should insert a callout block and verify it's visible", async ({
		page,
	}) => {
		await expect(
			page.locator('div[data-type="learn-wpvip/callout"]'),
		).toBeVisible({ timeout: 30000 });
	});

	test("should add content to the callout block and verify it's saved", async ({
		editor,
		page,
	}) => {
		await expect(page.locator(".components-snackbar")).toContainText(
			"Draft saved",
			{ message: "Post should be saved successfully" },
		);

		const postContent = await editor.getEditedPostContent();
		expect(postContent).toContain(
			"<!-- wp:learn-wpvip/callout",
			"Post content should contain the callout block opening comment",
		);
		expect(postContent).toContain(
			"This is a test paragraph created by our E2E test!",
			"Post content should contain the text entered in the callout block",
		);
	});
});
