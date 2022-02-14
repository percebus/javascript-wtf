describe('Number', () => {
  'use strict'
  describe('NaN', () => {
    it('isNaN', () => {
      expect(isNaN(NaN)).toBe(true) // [N]ot[a][N]umber is NOT a number
    })

    it("is typeof 'number", () => {
      expect(typeof (NaN)).toBe('number') // [N]ot[a][N]umber is a number o.0
      expect(_.isNumber(NaN)).toBe(true)
    })
  })
})
