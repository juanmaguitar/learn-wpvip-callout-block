/**
 * WordPress dependencies
 */
import { __, sprintf } from "@wordpress/i18n";
import { registerBlockType } from "@wordpress/blocks";

/**
 * Internal dependencies
 */
import { Edit, typeOptions } from "./edit";
import save from "./save";
import metadata from "./block.json";

import "./style.scss";
registerBlockType(metadata.name, {
	edit: Edit,
	save: save,
	variations: typeOptions.map(({ value, label }) => ({
		name: value,
		/* translators: %s is the notice type. */
		title: sprintf(__("Callout: %s", "learn-wpvip"), label),
		isActive: (blockAttributes, variationAttributes) =>
			blockAttributes.type === variationAttributes.type,
		scope: ["transform"],
		attributes: { type: value },
	})),
});
