describe('Number', () => {
  'use strict'
  describe('MAX_VALUE', () => {
    it('is > 0', () => {
      expect(Number.MAX_VALUE > 0).toBe(true)
      expect(Number.MAX_VALUE).toBe(1.7976931348623157e+308) // XXX? is this browser specific?
    })
  })

  describe('MIN_VALUE', () => {
    it('is close to 0', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU&t=383s
      expect(Number.MIN_VALUE < 0).toBe(false) // MIN -POSITIVE- VALUE
      expect(Number.MIN_VALUE).not.toBe(0) // "Closest to 0" (but not 0)
      expect(Number.MIN_VALUE > 0).toBe(true)
      expect(Number.MIN_VALUE).toBe(5e-324) // XXX? is this browser specific?
    })
  })
})
