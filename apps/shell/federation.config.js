const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({
  name: 'shell',
  /**I'm doing this to expose the FooService to external apps. That's not necessary if 
   * we have all the apps in the same monorepo. */
  exposes: {
    './FooService': './libs/foo-library/src/index.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
    /** If we don't want explicit share the @nx-ws/foo-library we could use the shareAll but, in that case, we
     * have to add the library as dependency in the package.json in the root of the monorepo. 
     * */
    '@nx-ws/foo-library': { singleton: true, strictVersion: true },
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
