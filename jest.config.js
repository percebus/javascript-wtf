module.exports = () => {
  return {
    verbose: true,
    globals: {
      _: require('lodash') // we inject here, so we can use testem to test browsers
    },
    transformIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/node_modules/util-deprecate'
    ]
  }
}
