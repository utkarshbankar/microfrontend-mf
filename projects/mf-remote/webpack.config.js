
const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4300/',
    uniqueName: 'mfremote',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remoteApp',
      library: { type: 'var', name: 'remoteApp' },
      filename: 'remoteEntry.js',
      exposes: {
        remoteAppModule: './projects/mf-remote/src/app/lazy-remote/lazy-remote.module.ts',
      },
      shared: {
        '@angular/core': { singleton: true, eager: true },
        '@angular/common': { singleton: true, eager: true },
        '@angular/router': { singleton: true, eager: true }
      },
    }),
  ],
};