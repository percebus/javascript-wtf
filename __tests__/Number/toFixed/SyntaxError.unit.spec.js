describe('Number', () => {
  'use strict'
  describe('.toFixed(x)', () => {
    describe('42.toFixed(2)', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU&t=383s
      const expected = '42.00'

      describe('variable', () => {
        it('parses', () => {
          const number = 42
          expect(number.toFixed(2)).toEqual(expected)
        })
      })

      describe('42 .toFixed(2)', () => {
        it("returns '42.00'", () => {
          /* eslint-disable no-whitespace-before-property */
          expect(42 .toFixed(2)).toEqual(expected)
          /* eslint-enable no-whitespace-before-property */
        })
      })

      describe('42.0.toFixed(2)', () => {
        it("returns '42.00'", () => {
          expect(42.0.toFixed(2)).toEqual(expected)
        })
      })

      describe('42..toFixed(2)', () => {
        it("returns '42.00'", () => {
          expect(42.0.toFixed(2)).toEqual(expected)
        })
      })

      /* FIXME? "Parsing error: Identifier directly after number (null)"
      // describe('42.toFixed(2)', () => {
      //   it('throws Syntax Error', () => {
      //     function test() {
      //       42.toFixed(2)
      //     }
      //
      //     expect(test()).toThrow()
      //   })
      // })
       */

      /* FIXME? "Parsing error: Unexpected token toFixed (null)"
      // describe('42. toFixed(2)', () => {
      //   it('throws Syntax Error', () => {
      //     function test() {
      //       42. toFixed(2)
      //     }
      //
      //     expect(test()).toThrow()
      //   })
      // })
       */
    })
  })
})
