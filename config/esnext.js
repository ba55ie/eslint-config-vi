module.exports = {
	extends: [
		'./defaults.js',
	].map(require.resolve),
	env: {
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	rules: {
		// ECMAScript >= 6
		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed', {
			requireForBlockBody: true,
		}],
		'arrow-spacing': ['error', {
			before: true,
			after: true,
		}],
		'constructor-super': 'error',
		'generator-star-spacing': ['error', 'after'],
		'no-class-assign': 'error',
		'no-confusing-arrow': ['error', {
			allowParens: true,
		}],
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': ['error', {
			includeExports: true,
		}],
		'no-new-symbol': 'error',
		'no-restricted-imports': 'off',
		'no-template-curly-in-string': 'error',
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': ['error', {
			ignoreDestructuring: false,
			ignoreImport: false,
			ignoreExport: false,
		}],
		'no-var': 'error',
		'object-shorthand': ['error', 'always'],
		'prefer-arrow-callback': 'error',
		'prefer-const': ['error', {
			destructuring: 'any',
			ignoreReadBeforeAssign: false,
		}],
		'prefer-destructuring': ['warn', {
			array: true,
			object: true,
		}, {
			enforceForRenamedProperties: false,
		}],
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': ['error', 'never'],
		'sort-imports': 'off',
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': ['error', 'after'],
	},
};
