describe('Number', () => {
  'use strict'

  // const _ = require('lodash') // injected to test browsers
  const functions = {
    "parseInt('bananas')": parseInt,
    "_.parseInt('bananas')": _.parseInt
  }

  _.forEach(functions, (fn, name) => {
    describe(name, () => {
      let bananas, type
      beforeEach(() => {
        bananas = fn('bananas') // This should blow up!
        type = typeof (bananas)
      })

      describe('_.isNumber', () => {
        it('is true', () => {
          expect(_.isNumber(bananas)).toBe(true)
        })
      })

      it("is typeof 'number'", () => {
        expect(type).toEqual('number')
        expect(type).not.toEqual('NaN')
      })


      describe('NaN', () => {
        it('is true', () => {
          expect(isNaN(bananas)).toBe(true)
          expect(type).not.toEqual('NaN')
        })

        /* eslint-disable no-self-compare */
        describe('reflectiveness', () => { // NaN are not reflective
          /* eslint-disable eqeqeq */
          describe('bananas == bananas', () => {
            it('is false', () => {
              expect(bananas == bananas).toBe(false)
            })
          })
          /* eslint-enable eqeqeq */

          describe('bananas === bananas', () => { // so they cannot compare with themselves
            it('is false', () => {

              /* This horrible result could be avoided, i
               * if JS simply threw an error
               */
              expect(bananas === bananas).toBe(false)
            })
          })
        })
        /* eslint-enable no-self-compare */
      })
    })
  })
})
