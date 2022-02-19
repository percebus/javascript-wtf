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

        describe('String([])', () => {
          let string
          beforeEach(() => {
            string = String(emptyArray)
          })

          it("returns ''", () => {
            expect(string).toEqual('')
          })

          it('is typeof string', () => {
            expect(typeof (string)).toEqual('string')
          })
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

  describe('[1, 2, 3]', () => {
    describe('.map(x => x * 2)', () => {
      it('returns [2, 4, 6]', () => {
        const doubledNumbers = [1, 2, 3].map((x) => { return x * 2 })
        expect(doubledNumbers).toEqual([2, 4, 6])
      })
    })
  })
})
