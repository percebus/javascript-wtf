describe('Object', () => {
  'use strict'

  describe('{}', () => {
    /* eslint-disable no-new-object */
    const tests = {
      brackets: {},
      instance: new Object()
    }
    /* eslint-enable no-new-object */

    _.forEach(tests, (emptyObject, testName) => {
      it('is typeof object', () => {
        expect(typeof (emptyObject)).toEqual('object')
      })

      it('is instanceof Object', () => {
        expect(emptyObject instanceof Object).toBe(true)
      })

      describe('lodash', () => {
        describe('_.isObject', () => {
          it('is', () => {
            expect(_.isObject(emptyObject)).toBe(true)
          })
        })

        describe('_.isArray', () => {
          it('is not', () => {
            expect(_.isArray(emptyObject)).toBe(false)
          })
        })
      })
    })
  })
})
