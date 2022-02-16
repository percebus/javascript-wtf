describe('String', () => {
  'use strict'

  describe('parse', () => {
    let result
    describe('nothing', () => {
      describe('String(undefined)', () => {
        beforeEach(() => {
          result = String(undefined)
        })

        it("returns 'undefined'", () => {
          expect(result).not.toEqual('')
          expect(result).toEqual('undefined')
        })

        it('is typeof string', () => {
          expect(typeof (result)).toEqual('string')
        })
      })

      describe('String(null)', () => {
        beforeEach(() => {
          result = String(null)
        })

        it("returns 'undefined'", () => {
          expect(result).not.toEqual('')
          expect(result).toEqual('null')
        })

        it('is typeof string', () => {
          expect(typeof (result)).toEqual('string')
        })
      })
    })

    describe('Object', () => {
      describe('String({})', () => {
        beforeEach(() => {
          result = String({})
        })

        it("returns '[object Object]' string", () => {
          expect(result).toEqual('[object Object]')
        })

        it('is typeof string', () => {
          expect(typeof (result)).toEqual('string')
        })
      })

      describe('Array', () => {
        describe('String([])', () => {
          const tests = {
            'String([])': String([]),
            'String([undefined])': String([undefined]), // this makes sense
            'String([null])': String([null]) // null would be something, no?
          }

          _.forEach(tests, (result, testName) => {
            describe(testName, () => {
              it("returns ''", () => {
                expect(result).not.toEqual('object Object')
                expect(result).toEqual('')
              })

              it('is typeof string', () => {
                expect(typeof (result)).toEqual('string')
              })
            })
          })
        })
      })
    })
  })
})
