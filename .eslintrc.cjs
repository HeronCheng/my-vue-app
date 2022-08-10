// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential"
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "eqeqeq": [
            "error",
            "always"
        ],
        "no-var": "error",
        "no-use-before-define": "error",
        "curly": "error",
        "arrow-spacing": [
            "error", 
            { 
                "before": true, 
                "after": true 
            }
        ],
        "block-spacing": "error",
        "brace-style": [
            "error", 
            "stroustrup"
        ]
    }
};
