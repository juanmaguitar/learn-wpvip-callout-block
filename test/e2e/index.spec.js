const { test, expect } = require("@wordpress/e2e-test-utils-playwright");

test.describe("Demo Test Suite", () => {
	test("should create and save a post with content", async ({
		admin,
		editor,
		page,
	}) => {
		// Create a new post
		await admin.createNewPost();

		// Get the editor iframe
		const editorFrame = page.frameLocator(
			".block-editor-iframe__container iframe",
		);

		// Wait for the editor content to be ready
		await editorFrame
			.locator(".block-editor-block-list__layout")
			.waitFor({ state: "visible" });

		// Insert a paragraph block
		await editor.insertBlock({
			name: "core/paragraph",
		});

		// Wait for the paragraph block to be inserted and ready
		await editorFrame
			.locator('p[data-type="core/paragraph"]')
			.waitFor({ state: "visible", timeout: 30000 });

		// Type some content using the frame locator
		await editorFrame
			.locator('p[data-type="core/paragraph"]')
			.fill("This is a test paragraph created by our E2E test!");

		// Save the post
		await editor.saveDraft();

		// Verify the save was successful
		await expect(page.locator(".components-snackbar")).toContainText(
			"Draft saved",
		);
	});
});
