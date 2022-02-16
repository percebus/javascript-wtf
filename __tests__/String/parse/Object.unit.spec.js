describe('String', () => {
  'use strict'

  describe('parse', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU
    let string
    describe('nothing', () => {
      describe('String(undefined)', () => {
        beforeEach(() => {
          string = String(undefined)
        })

        it("returns 'undefined'", () => {
          expect(string).not.toEqual('')
          expect(string).toEqual('undefined')
        })

        it('is typeof string', () => {
          expect(typeof (string)).toEqual('string')
        })
      })

      describe('String(null)', () => {
        beforeEach(() => {
          string = String(null)
        })

        it("returns 'undefined'", () => {
          expect(string).not.toEqual('')
          expect(string).toEqual('null')
        })

        it('is typeof string', () => {
          expect(typeof (string)).toEqual('string')
        })
      })
    })

    describe('Object', () => {
      describe('String({})', () => {
        const tests = {
          'String({})': String({}),
          "{} + ''": {} + '', // coercion
          "'' + {}": '' + {} // coercion
        }

        _.forEach(tests, (string, testName) => {
          describe(testName, () => {
            it("returns '[object Object]' string", () => {
              expect(string).toEqual('[object Object]')
            })

            it('is typeof string', () => {
              expect(typeof (string)).toEqual('string')
            })
          })
        })
      })

      describe('Array', () => {
        describe('String([])', () => {
          const tests = {
            'String([])': String([]),
            'String([undefined])': String([undefined]), // this makes sense
            'String([null])': String([null]), // null would be something, no?
            "[] + ''": [] + '', // coercion
            "'' + []": '' + ''// coercion
          }

          _.forEach(tests, (string, testName) => {
            describe(testName, () => {
              it("returns ''", () => {
                expect(string).not.toEqual('object Object')
                expect(string).toEqual('')
              })

              it('is typeof string', () => {
                expect(typeof (string)).toEqual('string')
              })
            })
          })
        })

        describe('String([,,])', () => {
          /* eslint-disable comma-spacing */
          /* eslint-disable no-sparse-arrays */
          const tests = {
            'String([,,])': String([,,]),
            'String([undefined,undefined,])': String([undefined, undefined]),
            'String([null,null,])': String([null, null])
          }
          /* eslint-enable comma-spacing */
          /* eslint-enable no-sparse-arrays */

          _.forEach(tests, (string, testName) => {
            describe(testName, () => {
              it("returns ','", () => {
                expect(string).toEqual(',')
              })

              it('is typeof string', () => {
                expect(typeof (string)).toEqual('string')
              })
            })
          })
        })
      })
    })
  })
})
