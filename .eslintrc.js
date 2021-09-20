//Rules

// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "react-app"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        'semi': 2,
        'comma-dangle': [2, 'only-multiline'],
        'indent': [
            2,
            2,
            {
                SwitchCase: 1,
            },
        ],
        'no-extra-semi': 2,
        'consistent-return': 2,
        'curly': [2, 'all'],
        'default-case': 2,
        'dot-location': 2,
        'dot-notation': 2,
        'eqeqeq': 2,
        'no-alert': 2,
        'no-constructor-return': 2,
        'no-else-return': 1,
        'no-return-assign': 2
    }
};
