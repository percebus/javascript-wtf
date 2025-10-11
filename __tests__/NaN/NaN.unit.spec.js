describe('NaN', () => {
  'use strict'

  describe('Number', () => {
    it('isNaN', () => {
      expect(isNaN(NaN)).toBe(true) // [N]ot[a][N]umber >is< NOT-a-number
    })

    // except
    it("is typeof 'number'", () => {
      expect(typeof (NaN)).toBe('number') // [N]ot[a][N]umber >is< ALSO a number o.0
    })
  })

  describe('lodash', () => {
    it('_.isNaN', () => {
      expect(_.isNaN(NaN)).toBe(true)
    })

    it('_.isNumber', () => {
      expect(_.isNumber(NaN)).toBe(true)
    })
  })

  describe('jasmine', () => {
    describe('.toBeFalsy()', () => {
      it('is', () => {
        expect(NaN).toBeFalsy()
      })
    })
  })
})
