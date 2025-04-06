import {
	createBlock,
	registerBlockType,
	unregisterBlockType,
} from "@wordpress/blocks";
import blockJson from "../../src/learn-wpvip-callout-block/block.json";

describe("Block Registration", () => {
	beforeEach(() => {
		registerBlockType("learn-wpvip/callout", blockJson);
	});

	afterEach(() => {
		unregisterBlockType("learn-wpvip/callout");
	});

	it("should create a block with default attributes", () => {
		const block = createBlock("learn-wpvip/callout");
		expect(block.name).toBe("learn-wpvip/callout");
		expect(block.attributes.type).toBe("tip");
		expect(block.attributes.content).toBeUndefined();
	});

	it("should handle content attribute with HTML", () => {
		const content = "<p>Test content</p>";
		const block = createBlock("learn-wpvip/callout", {
			content,
		});
		expect(block.attributes.content).toBe(content);
	});

	it("should accept all valid type values", () => {
		const validTypes = ["alert", "info", "warning", "tip", "success"];

		validTypes.forEach((type) => {
			const block = createBlock("learn-wpvip/callout", { type });
			expect(block.attributes.type).toBe(type);
		});
	});

	it("should have correct block supports configuration", () => {
		const block = createBlock("learn-wpvip/callout");
		const { supports } = blockJson;

		expect(supports.align).toBe(true);
		expect(supports.spacing.margin).toEqual(["top", "bottom"]);
		expect(supports.spacing.padding).toBe(true);
		expect(supports.spacing.blockGap).toBe(false);
		expect(supports.typography.fontSize).toBe(true);
		expect(supports.typography.lineHeight).toBe(true);
	});

	it("should match example configuration", () => {
		const block = createBlock(
			"learn-wpvip/callout",
			blockJson.example.attributes,
		);
		expect(block.attributes.type).toBe("alert");
		expect(block.attributes.content).toBe("<p>This is an alert callout.</p>");
	});
});
