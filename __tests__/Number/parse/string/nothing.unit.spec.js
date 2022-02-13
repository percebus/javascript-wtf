describe('Number', () => {'use strict'
  describe('parse', () => {
    let result
    describe('null-sy', () => {
      describe('Number(null)', () => {
        it('returns 0', () => {
          result = Number(null)
          expect(result).toBe(0)
          expect(typeof(result)).toEqual('number')
        })
      })

      describe('Number(undefined)', () => {
        it('returns NaN', () => {
          expect(typeof(NaN)).toBe('number') // [N]ot[a][N]umber is a number o.0

          result = Number(NaN) // convert a [N]ot[a][N]umber to a Number
          expect(typeof(result)).toEqual('number') // its a number
          expect(isNaN(result)).toBe(true) // but also [N]ot[a][N]umber
          expect(result).not.toBe(0) // which definitely is not 0
        })
      })
    })
  })
})
