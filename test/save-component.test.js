import { render } from "@testing-library/react";
import Save from "../src/learn-wpvip-callout-block/save";

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
		const calloutElement = container.querySelector(
			".wp-block-learn-wpvip-callout",
		);
		expect(calloutElement.classList.contains("is-alert-callout")).toBe(true);
	});
});
