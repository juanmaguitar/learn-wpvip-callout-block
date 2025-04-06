const defaultConfig = require("@wordpress/scripts/config/jest-unit.config");

module.exports = {
	...defaultConfig,
	moduleNameMapper: {
		...defaultConfig.moduleNameMapper,
		// Needed to mock SVGs imported like this: import { ReactComponent as Alert } from "./library/alert.svg";
		"\\.(svg)$": "<rootDir>/test/unit/__mocks__/fileMock.js",
	},
};
