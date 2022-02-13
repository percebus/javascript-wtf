describe('Number', () => {
  let result
  describe('parse from string', () => {
    describe('-0', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU
      describe("Number('-0')", () => {
        beforeEach(() => {
          result = Number('-0')
        })

        it('is -0', () => {
          expect(result).toBe(-0)
          expect(result).toEqual(-0) // o.0

          /* eslint-disable no-compare-neg-zero */
          expect(result === -0).toBe(true) //  "Do not use the '===' operator to compare against -0"
          expect(result === 0).toBe(true) // wat
          /* eslint-enable no-compare-neg-zero */
        })

        xit('does not equal 0', () => { // FIXME chrome fails
          expect(result).not.toBe(0)
          expect(result).not.toEqual(0) // o.0
          expect(result === 0).toBe(true) // wat

          /* eslint-disable eqeqeq */
          expect(result == 0).toBe(true)
          /* eslint-enable eqeqeq */
        })
      })

      describe("JSON.parse('-0)", () => {
        it('is -0', () => {
          expect(JSON.parse('-0')).toBe(-0)
        })
      })

      describe('- 0', () => {
        it('is -0', () => {
          /* FIXME find eslint rule that changes
           * from: - 0
           * to  : -0
           */
          expect(-0).toBe(-0)
        })

        describe("Number('- 0')", () => {
          it('returns NaN', () => {
            expect(isNaN(Number('- 0'))).toBe(true)
          })
        })
      })
    })
  })
})
