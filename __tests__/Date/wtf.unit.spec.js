// SRC: https://jsdate.wtf/
describe('Date', () => {
  let oDate, dateString, dateValue, milliseconds

  // 1 of 28
  describe('new Date("0")', () => {
    beforeEach(() => {
      oDate = new Date('0')
      dateString = oDate.toISOString()
    })

    it('does NOT equal "1970-01-01T00:00:00.000Z"', () => {
      expect(dateString).not.toEqual('1970-01-01T00:00:00.000Z')
    })

    // FIXME? it matches in CI, but not in my local.
    // Is it because I am on GMT-6?
    // The string "0" is interpreted as the year 2000, not as a timestamp!
    xit('interprets "0" as the year 2000, not as a timestamp!', () => {
      expect(dateString).not.toEqual('2000-01-01T00:00:00.000Z') // According to https://jsdate.wtf
      expect(dateString).toEqual('2000-01-01T06:00:00.000Z')
    })
  })

  // 2 of 28
  describe('new Date(0)', () => {
    beforeEach(() => {
      oDate = new Date(0)
      dateString = oDate.toISOString()
    })

    it('does NOT equal "2000-01-01T00:00:00.000Z"', () => {
      expect(dateString).not.toEqual('2000-01-01T00:00:00.000Z')
    })

    // The number 0, as opposed to the string "0",
    // is interpreted as milliseconds since the Unix epoch (Jan 1, 1970).
    it('interprets 0 as a timestamp', () => {
      expect(dateString).toEqual('1970-01-01T00:00:00.000Z')
    })
  })

  // 3 of 28
  describe('Date.parse(0) === Date.parse("0")', () => {
    // Both parse to 946684800000 milliseconds!
    // Date.parse only operates on strings,
    // so 0 is coerced to the string "0".
    it('is true', () => {
      const firstDate = Date.parse(0)
      const secondDate = Date.parse('0')

      expect(firstDate === secondDate).not.toBe(false)
      expect(firstDate === secondDate).toBe(true)
    })
  })

  // 4 of 28
  describe('new Date("not a date")', () => {
    beforeEach(() => {
      oDate = new Date('not a date')
      dateValue = oDate.valueOf()
    })

    it('is NOT null', () => {
      expect(oDate).not.toBe(null)
    })

    it('is NOT undefined', () => {
      expect(oDate).not.toBe(undefined)
    })

    // Invalid Date is still a Date object!
    // It's not null or an error.
    it('is Invalid Date', () => {
      expect(Number.isNaN(dateValue)).not.toBe(false)
      expect(Number.isNaN(dateValue)).toBe(true)
      expect(dateValue).toBeNaN()
    })

    // 5 of 28
    describe('.getTime()', () => {
      beforeEach(() => {
        milliseconds = oDate.getTime()
      })

      it('is NOT null', () => {
        expect(milliseconds).not.toBe(null)
      })

      it('is NOT 0', () => {
        expect(milliseconds).not.toBe(0)
      })

      // Invalid Date objects return NaN for getTime().
      // This function returns the number of milliseconds since the Unix epoch for valid dates.
      it('is NaN', () => {
        expect(Number.isNaN(milliseconds)).not.toBe(false)
        expect(Number.isNaN(milliseconds)).toBe(true)
        expect(milliseconds).toBeNaN()
      })
    })

    // 6 of 28
    describe('.toISOString()', () => {
      // toISOString() throws a RangeError on Invalid Date objects.
      it('throws an error', () => {
        expect(() => oDate.toISOString()).toThrow()
      })
    })

    // 7 of 28
    describe('.toTimeString()', () => {
      beforeEach(() => {
        dateString = oDate.toTimeString()
      })

      it('does NOT equal ""', () => {
        expect(dateString).not.toEqual('')
      })

      it('is NOT null', () => {
        expect(dateString).not.toBe(null)
      })

      // toTimeString() returns the string "Invalid Date" for invalid dates. 🫠
      it('equals "Invalid Date"', () => {
        expect(dateString).toEqual('Invalid Date')
      })
    })
  })
})
