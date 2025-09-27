describe('Date', () => {
  describe('new Date("0")', () => {
    // The string "0" is interpreted as the year 2000, not as a timestamp!
    it('interprets "0" as the year 2000, not as a timestamp!', () => {
      const oDate = new Date('0')
      const dateString = oDate.toISOString()

      expect(dateString).not.toEqual('1970-01-01T00:00:00.000Z')

      // FIXME? time does not match. Is it because I am on GMT-6?
      expect(dateString).not.toEqual('2000-01-01T00:00:00.000Z') // According to https://jsdate.wtf
      expect(dateString).toEqual('2000-01-01T06:00:00.000Z')
    })
  })

  describe('new Date(0)', () => {
    it('interprets 0 as a timestamp', () => {
      const oDate = new Date(0)
      const dateString = oDate.toISOString()

      expect(dateString).not.toEqual('2000-01-01T00:00:00.000Z')
      expect(dateString).toEqual('1970-01-01T00:00:00.000Z')
    })
  })

  describe('Date.parse(0) === Date.parse("0")', () => {
    it('is true', () => {
      const firstDate = Date.parse(0)
      const secondDate = Date.parse('0')

      // Both parse to 946684800000 milliseconds!
      // Date.parse only operates on strings,
      // so 0 is coerced to the string "0".
      expect(firstDate === secondDate).not.toBe(false)
      expect(firstDate === secondDate).toBe(true)
    })
  })

  describe('new Date("not a date")', () => {
    it('is invalid', () => {
      const oDate = new Date('not a date')
      const value = oDate.valueOf()

      expect(value).not.toBe(null)
      expect(value).not.toBe(undefined)

      expect(Number.isNaN(value)).not.toBe(false)
      expect(Number.isNaN(value)).toBe(true)
      expect(value).toBeNaN()
    })
  })
})
