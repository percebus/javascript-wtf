describe('Array', () => {
  'use strict'

  describe('[]', () => {
    /* eslint-disable no-array-constructor */
    const tests = {
      brackets: [],
      instance: new Array()
    }
    /* eslint-enable no-array-constructor */

    _.forEach(tests, (emptyArray, testName) => {
      describe(testName, () => {
        it("is typeof 'object', not 'array'", () => {
          expect(typeof (emptyArray)).not.toEqual('array') // wat?
          expect(typeof (emptyArray)).toEqual('object')
        })

        it('is instanceof Array', () => {
          expect(emptyArray instanceof Array).toBe(true)
        })

        it('is instanceof Object', () => {
          expect(emptyArray instanceof Object).toBe(true)
        })

        describe('lodash', () => {
          describe('_.isObject', () => {
            it('is', () => {
              expect(_.isObject(emptyArray)).toBe(true)
            })
          })

          describe('_.isArray', () => {
            it('is', () => {
              expect(_.isArray(emptyArray)).toBe(true)
            })
          })
        })
      })
    })
  })
})
