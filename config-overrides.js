// config-overrides.js
const path = require('path');

module.exports = function override(config, env) {
    // Add the image-webpack-loader to the existing rule for images
    const imageRule = config.module.rules.find((rule) =>
        rule.test && rule.test.toString().includes('svg|png|jpg|jpeg|gif|webp')
    );

    imageRule.use = [
        {
            loader: require.resolve('file-loader'),
            options: {
                outputPath: 'images', // Output folder for optimized images
            },
        },
        {
            loader: require.resolve('image-webpack-loader'),
            options: {
                mozjpeg: {
                    progressive: true,
                    quality: 65,
                },
                optipng: {
                    enabled: false,
                },
                pngquant: {
                    quality: '65-90',
                    speed: 4,
                },
                gifsicle: {
                    interlaced: false,
                },
                webp: {
                    quality: 75,
                },
            },
        },
    ];

    return config;
};
