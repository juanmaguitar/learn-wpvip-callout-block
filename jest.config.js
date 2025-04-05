const defaultConfig = require("@wordpress/scripts/config/jest-unit.config");

module.exports = {
	...defaultConfig,
	// Example: Add custom module name mappings
	moduleNameMapper: {
		...defaultConfig.moduleNameMapper,
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/test/__mocks__/fileMock.js",
	},
};
