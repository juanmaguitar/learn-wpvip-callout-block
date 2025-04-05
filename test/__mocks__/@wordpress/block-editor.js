const useBlockPropsMock = jest.fn(({ className = "" }) => ({
	className: `wp-block-learn-wpvip-callout ${className}`.trim(),
}));
useBlockPropsMock.save = jest.fn(useBlockPropsMock);

const BlockControlsMock = ({ children }) => (
	<div data-testid="block-controls">{children}</div>
);

const RichTextMock = ({ value, tagName: Tag = "div", className, onChange }) => {
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

RichTextMock.Content = ({ value, tagName: Tag = "div", className }) => (
	<Tag
		data-testid="rich-text-content"
		className={className}
		dangerouslySetInnerHTML={{ __html: value }}
	/>
);

export {
	useBlockPropsMock as useBlockProps,
	BlockControlsMock as BlockControls,
	RichTextMock as RichText,
};
