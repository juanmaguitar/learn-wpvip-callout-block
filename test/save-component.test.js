import { render } from "@testing-library/react";
import Save from "../src/learn-wpvip-callout-block/save";

describe("Save Component", () => {
	it("matches snapshot with empty content", () => {
		expect(
			render(
				<Save
					attributes={{
						type: "tip",
						content: "",
					}}
				/>,
			),
		).toMatchSnapshot();
	});

	it("matches snapshot with content", () => {
		expect(
			render(
				<Save
					attributes={{
						type: "tip",
						content: "<p>Test content</p>",
					}}
				/>,
			),
		).toMatchSnapshot();
	});

	it("renders with correct type class", () => {
		const { container } = render(
			<Save
				attributes={{
					type: "alert",
					content: "",
				}}
			/>,
		);
		const calloutElement = container.querySelector("div");
		expect(calloutElement).toBeTruthy();
		expect(calloutElement.className).toBe(
			"wp-block-learn-wpvip-callout is-alert-callout",
		);
	});
});
