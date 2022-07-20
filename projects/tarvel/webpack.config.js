const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  // remotes: {
  //   "shell": "http://localhost:4200/remoteEntry.js",    
  // },

  name: 'tarvel',
 // './Module': './projects/tarvel/src/app/flights/flights.module.ts'
   exposes: {
     './Module': './projects/tarvel/src/app/flights/flights.module.ts',
   },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
