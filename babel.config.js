
module.exports = {
    "presets": [
        "mobx",
        "@babel/preset-react",
        ["@babel/preset-env", {
            "modules": false,
            "useBuiltIns": "usage",
            "corejs": 2
        }]
    ],
    "plugins": [
        "@babel/plugin-transform-modules-commonjs",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-proposal-nullish-coalescing-operator",
        ["@babel/plugin-transform-runtime", {
            "corejs": 2
        }],
        [
            "import",
            {
                "libraryName":"antd",
                "libraryDirectory":"es"
                // "style":"css"
            }
        ]
    ]
}
