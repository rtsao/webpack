var DefinePlugin = require("../../../../").DefinePlugin;
/** @type {import("../../../../").Configuration} */
module.exports = {
	plugins: [
		new DefinePlugin({
			"process.env.DEFINED_NESTED_KEY": 5
		})
	]
};
