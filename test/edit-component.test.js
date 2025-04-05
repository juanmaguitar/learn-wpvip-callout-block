import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Edit } from "../src/learn-wpvip-callout-block/edit";

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
