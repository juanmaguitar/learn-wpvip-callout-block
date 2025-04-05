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

const useBlockProps = jest.fn(mockUseBlockProps);
useBlockProps.save = jest.fn(mockUseBlockPropsSave);

const BlockControls = ({ children }) => (
	<div data-testid="block-controls">{children}</div>
);

const RichText = ({
	value,
	tagName: Tag = "div",
	multiline,
	className,
	onChange,
}) => {
	if (onChange) {
		return (
			<Tag
				data-testid="rich-text"
				className={className}
				onChange={(e) => onChange(e.target.innerHTML)}
				dangerouslySetInnerHTML={{ __html: value }}
			/>
		);
	}
	return (
		<Tag
			data-testid="rich-text-content"
			className={className}
			dangerouslySetInnerHTML={{ __html: value }}
		/>
	);
};

RichText.Content = ({ value, tagName: Tag = "div", className }) => (
	<Tag
		data-testid="rich-text-content"
		className={className}
		dangerouslySetInnerHTML={{ __html: value }}
	/>
);

export { useBlockProps, BlockControls, RichText };
