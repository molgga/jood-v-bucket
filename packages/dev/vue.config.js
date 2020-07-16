/* eslint-disable */
const path = require('path');

const config = {
  publicPath: 'https://molgga.github.io/jood-v-bucket/dist-example',
  outputDir: 'dist-example',
  productionSourceMap: false,
  chainWebpack: config => {
    config.resolve.alias.set('~@lib', path.resolve(__dirname, '../lib/src'));
    // config.plugins.delete('friendly-errors');
    // config.plugins.delete('prefetch');
  }
};

module.exports = config;
