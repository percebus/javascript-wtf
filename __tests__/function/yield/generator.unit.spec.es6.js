/* FIXME! including this file,
 * UNINSTALLS (affects?!) node_modules/lodash!
 * Breaking a bunch of OTHER 'unit' tests
 * Hence, the '*.js.FIXME' extension
 */
describe('function', () => {
  'use strict'
  describe('iterators', () => {
    describe('1, 2, 3', () => {
      function * createIterator (i) {
        while (i++ <= 2) {
          yield i
        }
      }

      describe('iterator.next()', () => {
        it('returns 1, 2 & 3', () => {
          const iterator = createIterator(0)
          expect(iterator.next()).toEqual({ value: 1, done: false })
          expect(iterator.next()).toEqual({ value: 2, done: false })
          expect(iterator.next()).toEqual({ value: 3, done: false })
          expect(iterator.next()).toEqual({ value: undefined, done: true })
        })
      })
    })
  })
})
