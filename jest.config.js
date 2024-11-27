module.exports = () => {
  return {
    verbose: true,
    globals: {
      _: require('lodash') // we inject here, so we can use testem to test browsers
    },
    setupFiles: ['src/globals.js'],
    transform: {
      '^.+\\.es6\\.js$': 'babel-jest'
    },
    transformIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/node_modules/util-deprecate'
    ]
  }
}
