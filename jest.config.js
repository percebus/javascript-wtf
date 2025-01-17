module.exports = () => {
  return {
    verbose: true,
    setupFiles: ['<rootDir>/__tests__/global.js'],
    globals: {
      _: require('lodash') // we inject here, so we can use testem to test browsers
    },
    transform: {
      '^.+\\.es6\\.js$': 'babel-jest'
    },
    transformIgnorePatterns: [
      '<rootDir>/node_modules/',
      '<rootDir>/node_modules/util-deprecate'
    ],
    reporters: [
      'default',
      // 'github-actions', // FIXME
      'jest-junit'
    ]
  }
}
