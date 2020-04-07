module.exports = {
	root: true,

	env: {
		node: true
	},

	extends: [
		"plugin:vue/essential",
		"@vue/standard"
	],

	parserOptions: {
		parser: "babel-eslint"
	},

	rules: {
		"no-console": "off",
		"no-debugger": "off",
		quotes: ["error", "double", { allowTemplateLiterals: true }],
		semi: [2, "always"],
		indent: ["error", "tab"],
		"no-tabs": ["error", { allowIndentationTabs: true }],
		"no-mixed-spaces-and-tabs": "off"
	}
};
