/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { content, type } = attributes;
	const className = `is-${type}-callout`;

	return (
		<div {...useBlockProps.save({ className })}>
			<div className="wp-block-learn-wpvip-callout__icon" />
			<div className="wp-block-learn-wpvip-callout__content">
				<RichText.Content multiline="p" value={content} />
			</div>
		</div>
	);
}
