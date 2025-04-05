import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { Edit } from "../src/learn-wpvip-callout-block/edit";

const mockEditProps = {
	attributes: {
		type: "tip",
		content: "<p>Test content</p>",
	},
	setAttributes: jest.fn(),
	clientId: "test-id",
	className: "wp-block-learn-wpvip-callout",
};

beforeEach(() => {
	mockEditProps.setAttributes.mockClear();
	jest.clearAllMocks();
});

describe("Edit Component", () => {
	it("matches snapshot", () => {
		const { container: renderedEditComponent } = render(
			<Edit {...mockEditProps} />,
		);
		expect(renderedEditComponent).toMatchSnapshot();
	});

	describe("Type Selection", () => {
		it("updates type when changed", async () => {
			// Setup
			const { setAttributes } = mockEditProps;
			const user = userEvent.setup();

			// Render
			render(<Edit {...mockEditProps} />);

			// Verify initial state
			expect(screen.getByTestId("block-controls")).toBeInTheDocument();
			expect(screen.getByTestId("toolbar-dropdown")).toBeInTheDocument();
			expect(screen.getByTestId("rich-text")).toBeInTheDocument();

			// Action
			const alertButton = screen.getByTestId("control-Alert");
			await user.click(alertButton);

			// Assertion
			expect(setAttributes).toHaveBeenCalledTimes(1);
			expect(setAttributes).toHaveBeenCalledWith({
				type: "alert",
			});
		});
	});
});
