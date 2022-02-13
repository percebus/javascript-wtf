describe('Number', () => {
  let result
  describe('parse', () => {
    describe('whitespace', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU
      describe('0', () => {
        describe("Number('0')", () => {
          it('returns 0', () => {
            expect(Number('0')).toBe(0)
          })
        })

        describe("Number('')", () => {
          it('returns 0', () => {
            expect(Number('')).toBe(0)
          })
        })

        describe("Number(' ')", () => {
          it('returns 0', () => {
            expect(Number(' ')).toBe(0)
          })
        })

        describe("Number('\r\n\t')", () => {
          it('returns 0', () => {
            expect(Number('\r\n\t')).toBe(0)
          })
        })
      })

      describe('-0', () => {
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
      })
    })
  })
})
