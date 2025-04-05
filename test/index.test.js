import {
	createBlock,
	registerBlockType,
	unregisterBlockType,
} from "@wordpress/blocks";
import { render, cleanup, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import blockJson from "../src/learn-wpvip-callout-block/block.json";
import { Edit } from "../src/learn-wpvip-callout-block/edit";
import Save from "../src/learn-wpvip-callout-block/save";

describe("Callout Block", () => {
	beforeEach(() => {
		registerBlockType("learn-wpvip/callout", blockJson);
	});

	afterEach(() => {
		unregisterBlockType("learn-wpvip/callout");
		cleanup();
	});

	describe("Block Registration", () => {
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

	describe("Save Component", () => {
		it("matches snapshot with empty content", () => {
			const attributes = { type: "tip", content: "" };
			expect(
				render(
					<Save
						{...{
							attributes,
							className: "wp-block-learn-wpvip-callout",
						}}
					/>,
				),
			).toMatchSnapshot();
		});

		it("matches snapshot with content", () => {
			const attributes = {
				type: "tip",
				content: "<p>Test content</p>",
			};
			expect(
				render(
					<Save
						{...{
							attributes,
							className: "wp-block-learn-wpvip-callout",
						}}
					/>,
				),
			).toMatchSnapshot();
		});

		it("renders with correct type class", () => {
			const attributes = {
				type: "alert",
				content: "<p>Alert content</p>",
			};
			const { container } = render(
				<Save
					{...{
						attributes,
						className: "wp-block-learn-wpvip-callout",
					}}
				/>,
			);
			debugger;
			const calloutElement = container.querySelector(
				".wp-block-learn-wpvip-callout",
			);
			expect(calloutElement.classList.contains("is-alert-callout")).toBe(true);
		});
	});

	xdescribe("Edit Component", () => {
		it("matches snapshot", () => {
			const attributes = {
				type: "tip",
				content: "<p>Test content</p>",
			};
			const setAttributes = jest.fn();
			expect(
				render(
					<Edit
						{...{
							attributes,
							setAttributes,
							clientId: "test-id",
							className: "wp-block-learn-wpvip-callout",
						}}
					/>,
				),
			).toMatchSnapshot();
		});

		describe("Type Selection", () => {
			it("updates type when changed", async () => {
				// Setup
				const attributes = {
					type: "tip",
					content: "<p>Test content</p>",
				};
				const setAttributes = jest.fn();
				const user = userEvent.setup();

				// Render
				const { getByTestId } = render(
					<Edit
						{...{
							attributes,
							setAttributes,
							clientId: "test-id",
							className: "wp-block-learn-wpvip-callout",
						}}
					/>,
				);

				// Action
				const alertButton = getByTestId("control-Alert");
				await user.click(alertButton);

				// Assertion
				expect(setAttributes).toHaveBeenCalledTimes(1);
				expect(setAttributes).toHaveBeenCalledWith({
					type: "alert",
				});
			});
		});
	});
});
