
const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4400/',
    uniqueName: 'mfdynamicremote',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'dynamicRemoteApp',
      library: { type: 'var', name: 'dynamicRemoteApp' },
      filename: 'dynamicRemoteAppEntry.js',
      exposes: {
        dynamicRemoteAppModule: './projects/mf-dynamic-remote/src/app/lazy-dynamic-remote/lazy-dynamic-remote.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true }
      },
    }),
  ],
};