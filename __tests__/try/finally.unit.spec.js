describe('try { something }', () => {
  'use strict'

  describe('finally { return x }', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU
    function yoda () { // Do, or Do not. There is no try
      /* eslint-disable no-unreachable */
      /* eslint-disable no-unsafe-finally */
      try {
        return 1
      } catch { // unreachable
        return -1
      } finally { // unsafe-finally
        return 0 // "WARNING 'return' inside 'finally' block"
      }
      /* eslint-enable no-unsafe-finally */
      /* eslint-enable no-unreachable */
    }

    it('always runs last', () => {
      expect(yoda()).toBe(0)
    })
  })
})
