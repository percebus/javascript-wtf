describe('Number', () => {
  'use strict'

  const _ = require('lodash')
  const functions = {
    "parseInt('bananas')": parseInt,
    "_.parseInt('bananas')": _.parseInt
  }

  _.forEach(functions, (fn, name) => {
    describe(name, () => {
      let bananas, type
      beforeEach(() => {
        bananas = fn('bananas')
        type = typeof (bananas)
      })

      describe('_.isNumber', () => {
        it('is true', () => {
          expect(_.isNumber(bananas)).toBe(true)
        })
      })

      describe('typeof', () => {
        it("is 'number'", () => {
          expect(type).toEqual('number')
          expect(type).not.toEqual('NaN')
        })
      })

      describe('NaN', () => {
        it('is true', () => {
          expect(isNaN(bananas)).toBe(true)
          expect(type).not.toEqual('NaN')
        })

        /* eslint-disable no-self-compare */
        describe('reflectiveness', () => { // NaN are not reflective
          describe('bananas === bananas', () => { // so they cannot compare with themselves
            it('is false', () => {
              expect(bananas === bananas).toBe(false)
            })
          })

          /* eslint-disable eqeqeq */
          describe('bananas == bananas', () => {
            it('is false', () => {
              expect(bananas == bananas).toBe(false)
            })
          })
          /* eslint-enable eqeqeq */
        })
        /* eslint-enable no-self-compare */
      })
    })
  })
})
