describe('undefined', () => {
  'use strict'

  it("is typeof 'undefined'", () => {
    expect(typeof (undefined)).toEqual('undefined')
  })

  describe('Number', () => {
    describe('isNaN(undefined)', () => {
      it('is', () => {
        expect(isNaN(undefined)).toBe(true)
      })
    })
  })

  describe('null', () => {
    it('is not identical to null', () => {
      expect(undefined === null).toBe(false)
    })

    it('equals null', () => {
      expect(undefined == null).toBe(true) // undefined equals null
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
      it('is NOT!', () => {
        expect(undefined).not.toEqual(null) // WARNING FIXME?
        expect(undefined == null).toBe(true) // undefined equals null
      })
    })
  })
})
