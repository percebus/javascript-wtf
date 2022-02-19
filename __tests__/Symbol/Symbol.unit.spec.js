describe('Symbol', () => {
  'use strict'
  describe('string', () => {
    let oSymbol

    describe("Symbol('that is cool')", () => { // https://www.youtube.com/watch?v=2pL28CcEijU
      beforeEach(() => {
        oSymbol = Symbol('that is cool')
      })

      describe('convert', () => { // it can be converted to String
        const expectedString = 'Symbol(that is cool)'
        describe('String(oSymbol)', () => {
          it("can be converted Symbol('that is cool')", () => {
            expect(String(oSymbol)).toEqual(expectedString)
            expect(oSymbol.toString()).toEqual(expectedString)
          })
        })

        describe('oSymbol.toString()', () => {
          it("can be converted Symbol('that is cool')", () => {
            expect(String(oSymbol)).toEqual(expectedString)
            expect(oSymbol.toString()).toEqual(expectedString)
          })
        })
      })

      describe('cast', () => { // it cannot be casted to String
        const tests = {
          "oSymbol + ''": function catchError () {
            return () => { return oSymbol + '' }
          },
          "'' + oSymbol": function catchError () {
            return () => { return '' + oSymbol }
          }
        }

        _.forEach(tests, (catchError, testName) => {
          describe(testName, () => {
            it('throws a TypeError', () => {
              expect(catchError()).toThrow()
            })

            xdescribe('error message', () => {
              describe('common', () => {
                it("throws a TypeError: 'Cannot convert a Symbol value to a string'", () => {
                  const oTypeError = new TypeError('Cannot convert a Symbol value to a string')
                  expect(catchError()).toThrow(oTypeError)
                })
              })

              describe('Safari', () => {
                it("throws a TypeError: 'Cannot convert a symbol to a string'", () => {
                  const oTypeError = new TypeError('Cannot convert a symbol to a string')
                  expect(catchError()).toThrow(oTypeError)
                })
              })
            })
          })
        })
      })
    })
  })
})
