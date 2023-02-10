module.exports = {
    plugins: [
        require('postcss-preset-env')(
            {
                importFrom: './src/assets/style/common',
                features: {
                    'color-mod-function': true,
                }
            }
        ),
    ]
};