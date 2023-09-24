
const webpack = require('webpack');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
  output: {
    publicPath: 'http://localhost:4200/',
    uniqueName: 'shell',
    scriptType: 'text/javascript',
  },
  optimization: {
    runtimeChunk: false,
  },
  plugins: [
    new ModuleFederationPlugin({
      remotes: {
        remoteApp: 'remote@http://localhost:4300/remoteEntry.js}',
        dynamicRemoteApp:'remote@http://localhost:4400/dynamicRemoteAppEntry.js}'
      },
      shared: {
        '@angular/core': { eager: true, singleton: true },
        '@angular/common': { eager: true, singleton: true },
        '@angular/router': { eager: true, singleton: true }
      },
    }),
  ],
};