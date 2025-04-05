const mockUseBlockProps = (props) => {
	const { className = "" } = props;
	const baseClassName = `wp-block-learn-wpvip-callout ${className}`.trim();

	return {
		className: baseClassName,
	};
};

const mockUseBlockPropsSave = (props) => {
	const { className = "" } = props;
	const baseClassName = `wp-block-learn-wpvip-callout ${className}`.trim();

	return {
		className: baseClassName,
	};
};

export const useBlockProps = jest.fn(mockUseBlockProps);
useBlockProps.save = jest.fn(mockUseBlockPropsSave);

export const RichText = {
	Content: ({ value }) => <div dangerouslySetInnerHTML={{ __html: value }} />,
};

export const BlockControls = ({ children }) => <div>{children}</div>;
export const ToolbarGroup = ({ children }) => <div>{children}</div>;
export const ToolbarButton = ({ children, ...props }) => (
	<button {...props}>{children}</button>
);
