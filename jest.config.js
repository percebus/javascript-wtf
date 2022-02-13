module.exports = () => {
  return {
    verbose: true,
    globals: {
      _: require('lodash') // we inject here, so we can use testem to test browsers
    }
  }
}
