module.exports = {
	__: (text) => text,
	sprintf: (text, ...args) => text.replace("%s", args[0]),
};
