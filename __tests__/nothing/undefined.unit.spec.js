describe('undefined', () => {
  'use strict'

  it("is typeof 'undefined", () => {
    expect(typeof (undefined)).toEqual('undefined')
  })

  describe('Number', () => {
    it('isNaN', () => {
      expect(isNaN(undefined)).toBe(true)
    })
  })

  describe('null', () => {
    it('is not identical to null', () => {
      expect(undefined === null).toBe(false)
    })

    it('equals null', () => {
      expect(undefined == null).toBe(true) // undefined equals null
      expect(undefined).not.toEqual(null) // FIXME? but not really o.0
    })
  })

  describe('lodash', () => {
    describe('_.isUndefined(undefined)', () => {
      it('is', () => {
        expect(_.isUndefined(undefined)).toBe(true)
      })
    })
  })

  describe('jasmine', () => {
    describe('.toBeFalsy()', () => {
      it('is', () => {
        expect(undefined).toBeFalsy()
      })
    })

    describe('.toEqual(null)', () => {
      it('is not', () => {
        expect(undefined).not.toEqual(null)
      })
    })
  })
})
