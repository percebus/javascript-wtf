describe('null', () => {
  'use strict'
  describe('Object', () => {
    it("is typeof 'object'", () => {
      expect(typeof (null)).toEqual('object') // null is an Object
    })

    it('is NOT instanceof Object', () => {
      expect(null instanceof Object).toBe(false) // but not really
    })
  })
})
