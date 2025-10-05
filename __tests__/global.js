function isFireFox () {
  if (!navigator) {
    return false
  }

  const userAgent = navigator
    .userAgent
    .toLowerCase()

  return userAgent.indexOf('firefox') > -1
}

global._ = require('lodash')

// A simple function to detect Firefox from the user agent
global.isFireFox = isFireFox
