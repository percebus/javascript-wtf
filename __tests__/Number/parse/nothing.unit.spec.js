describe('Number', () => {
  'use strict'

  describe('parse', () => {
    let result
    describe('null-sy', () => {
      describe('Number(null)', () => {
        beforeEach(() => {
          result = Number(null)
        })

        it('returns 0', () => {
          expect(result).toBe(0)
        })
      })

      describe('Number(undefined)', () => {
        beforeEach(() => {
          result = Number(undefined)
        })

        it("is typeof 'number'", () => {
          expect(typeof (result)).toEqual('number') // its a number
        })

        it('isNaN', () => {
          expect(isNaN(result)).toBe(true) // but also [N]ot[a][N]umber
          expect(typeof (NaN)).toBe('number') // [N]ot[a][N]umber is a number o.0
        })

        it('is not 0', () => {
          expect(result).not.toBe(0) // which definitely is not 0
        })
      })
    })
  })
})
