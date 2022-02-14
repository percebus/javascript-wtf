describe('null', () => {
  'use strict'

  describe('Object', () => {
    it("is typeof 'object'", () => {
      expect(typeof (null)).toEqual('object') // null is an Object
    })

    // but
    it('is NOT instanceof Object', () => {
      expect(null instanceof Object).toBe(false) // but not really
    })
  })

  describe('Number', () => {
    describe('isNaN(null)', () => {
      it('is false', () => {
        expect(isNaN(null)).toBe(false)
      })
    })
  })

  describe('lodash', () => {
    describe('_.isNull(null)', () => {
      it('is', () => {
        expect(_.isNull(null)).toBe(true)
      })
    })
  })

  describe('jasmine', () => {
    describe('.toBeNull()', () => {
      it('is', () => {
        expect(null).toBeNull()
      })
    })

    describe('.toBeFalsy()', () => {
      it('is', () => {
        expect(undefined).toBeFalsy()
      })
    })
  })
})
