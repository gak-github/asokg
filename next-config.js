const withSass = require('@zeit/next-sass');
const webpack = require('webpack');

module.exports = withSass({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    });
    return config;
  },
  // Enable Sass/SCSS processing
  sassOptions: {
    includePaths: ['./src/styles'],
  },
});
