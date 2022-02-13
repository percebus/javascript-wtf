describe('undefined', () => {
  'use strict'

  it("is typeof 'undefined", () => {
    expect(typeof (undefined)).toEqual('undefined')
  })

  it('equals null', () => {
    expect(undefined == null).toBe(true) // undefined equals null
    expect(undefined).not.toEqual(null) // FIXME? but not really o.0
  })
})
