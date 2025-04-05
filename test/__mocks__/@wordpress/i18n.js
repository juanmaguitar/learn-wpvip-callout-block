export const __ = (text) => text;
export const sprintf = (text, ...args) => {
	return text.replace(/%s/g, () => args.shift());
};
