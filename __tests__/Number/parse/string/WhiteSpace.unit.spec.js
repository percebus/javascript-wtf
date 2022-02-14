describe('Number', () => {'use strict'
  describe('parse from string', () => {
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
    })
  })
})
