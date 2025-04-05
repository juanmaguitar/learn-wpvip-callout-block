const defaultConfig = require("@wordpress/scripts/config/jest-unit.config");

module.exports = {
	...defaultConfig,
	// Add your customizations here
	setupFilesAfterEnv: [
		...(defaultConfig.setupFilesAfterEnv || []),
		"<rootDir>/jest.setup.js",
	],
	// Example: Add custom module name mappings
	moduleNameMapper: {
		...defaultConfig.moduleNameMapper,
		"^@components/(.*)$": "<rootDir>/test/__mocks__/components/$1",
		// Mock file and style imports.
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/test/__mocks__/fileMock.js",
		"\\.(css|scss)$": "<rootDir>/test/__mocks__/styleMock.js",
		// Mock all wordpress dependencies that actually externals.
		//"\\@wordpress/(.+)$": "<rootDir>/test/__mocks__/@wordpress/$1.js",
	},
	// Add test directory pattern
	testMatch: [
		"<rootDir>/test/**/*.test.js",
		"<rootDir>/src/**/test/**/*.test.js",
		"<rootDir>/src/**/__tests__/**/*.test.js",
	],
};
