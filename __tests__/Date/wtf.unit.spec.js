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
    xit('interprets "0" as the year 2000, not as a timestamp!', () => {
      // The string "0" is interpreted as the year 2000, not as a timestamp!
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

    it('is interpreted as 0 milliseconds since the Unix epoch (Jan 1, 1970).', () => {
      // The number 0, as opposed to the string "0",
      // is interpreted as milliseconds since the Unix epoch (Jan 1, 1970).
      expect(dateString).toEqual('1970-01-01T00:00:00.000Z')
    })
  })

  // 3 of 28
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

  // 4 of 28
  describe('new Date("not a date")', () => {
    beforeEach(() => {
      // Invalid Date is still a Date object!
      // It's not null or an error.
      oDate = new Date('not a date')
      dateValue = oDate.valueOf()
    })

    it('is NOT null', () => {
      expect(oDate).not.toBe(null)
    })

    it('is NOT undefined', () => {
      expect(oDate).not.toBe(undefined)
    })

    it('is Invalid Date', () => {
      expect(Number.isNaN(dateValue)).not.toBe(false)
      expect(Number.isNaN(dateValue)).toBe(true)
      expect(dateValue).toBeNaN()
    })

    // 5 of 28
    describe('.getTime()', () => {
      beforeEach(() => {
        // This function returns the number of milliseconds since the Unix epoch for valid dates.
        milliseconds = oDate.getTime()
      })

      it('is NOT null', () => {
        expect(milliseconds).not.toBe(null)
      })

      it('is NOT 0', () => {
        expect(milliseconds).not.toBe(0)
      })

      // Invalid Date objects return NaN for getTime().
      it('is NaN', () => {
        expect(Number.isNaN(milliseconds)).not.toBe(false)
        expect(Number.isNaN(milliseconds)).toBe(true)
        expect(milliseconds).toBeNaN()
      })
    })

    // 6 of 28
    describe('.toISOString()', () => {
      // toISOString() throws a RangeError on Invalid Date objects.
      it('throws a RangeError on Invalid Date objects.', () => {
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

      it('returns the string "Invalid Date" for invalid dates. 🫠', () => {
        // toTimeString() returns the string "Invalid Date" for invalid dates. 🫠
        expect(dateString).toEqual('Invalid Date')
      })
    })
  })

  // 8 of 28
  describe('new Date("1")', () => {
    beforeEach(() => {
      oDate = new Date('1')
      dateString = oDate.toISOString()
    })

    it('does NOT equal "1970-01-01T00:00:00.001Z"', () => {
      expect(dateString).not.toEqual('1970-01-01T00:00:00.001Z')
    })

    it('does NOT equal "0001-01-01T00:00:00.000Z"', () => {
      expect(dateString).not.toEqual('0001-01-01T00:00:00.000Z')
    })

    // FIXME? it matches in CI, but not in my local.
    // Is it because I am on GMT-6?
    xit('equals to "2001-01-01T00:00:00.000Z"', () => {
      // Unlike "0", "1" is interpreted as a month,
      // and the year defaults to 2001 for some reason.
      expect(dateString).toEqual('2001-01-01T00:00:00.000Z')
    })
  })

  // 9 of 28
  describe('new Date("2")', () => {
    beforeEach(() => {
      oDate = new Date('2')
      dateString = oDate.toISOString()
    })

    it('does NOT equal "2002-01-01T00:00:00.000Z"', () => {
      expect(dateString).not.toEqual('2002-01-01T00:00:00.000Z')
    })

    it('does NOT equal "2001-01-02T00:00:00.000Z"', () => {
      expect(dateString).not.toEqual('2001-01-02T00:00:00.000Z')
    })

    xit('equals "2001-02-01T00:00:00.000Z"', () => {
      expect(dateString).toEqual('2001-02-01T00:00:00.000Z')
    })
  })

  // 10 of 28
  describe('new Date("12")', () => {
    beforeEach(() => {
      oDate = new Date('12')
      dateString = oDate.toISOString()
    })

    it('does NOT equal "2012-01-01T00:00:00.000Z"', () => {
      expect(dateString).not.toEqual('2012-01-01T00:00:00.000Z')
    })

    it('does NOT equal "2001-01-12T00:00:00.000Z"', () => {
      expect(dateString).not.toEqual('2001-01-12T00:00:00.000Z')
    })

    xit('equals "2001-12-01T00:00:00.000Z"', () => {
      // Also works for December.
      expect(dateString).toEqual('2001-12-01T00:00:00.000Z')
    })
  })

  // 11 of 28
  describe('new Date("13")', () => {
    beforeEach(() => {
      oDate = new Date('13')
      dateString = oDate.toTimeString()
    })

    describe('.toISOString()', () => {
      it('throws', () => {
        expect(() => oDate.toISOString()).toThrow()
      })
    })

    describe('.toTimeString()', () => {
      it('equals "Invalid Date"', () => {
        // "13" would be month 13, which doesn't exist, so it's Invalid Date.
        expect(dateString).toEqual('Invalid Date')
      })
    })
  })

  // 12 of 28
  describe('new Date("99") > new Date("100")', () => {
    it('is true', () => {
      const firstDate = new Date('99') // 1999
      const secondDate = new Date('100') // year 0100

      // "99" is year 1999,
      // while "100" is year 0100.
      // 1999 > 0100! Date starts interpreting numbers as years starting at "32".
      expect(firstDate > secondDate).not.toBe(false)
      expect(firstDate > secondDate).toBe(true)
    })
  })

  // 13 of 28
  describe('new Date("49") > new Date("50")', () => {
    it('is true', () => {
      const firstDate = new Date('49') // 2049
      const secondDate = new Date('50') // 1950

      // And for some reason "32" to "49" is 2032-2049,
      // while "50" onwards is 1950+. So 2049 > 1950!
      expect(firstDate > secondDate).not.toBe(false)
      expect(firstDate > secondDate).toBe(true)
    })
  })

  // 14 of 28
  describe('new Date("12.1")', () => {
    beforeEach(() => {
      oDate = new Date('12.1')
      dateString = oDate.toISOString()
    })

    it('does NOT equal "2001-01-01T00:00:00.000Z"', () => {
      expect(dateString).not.toEqual('2001-01-01T00:00:00.000Z')
    })

    it('does NOT equal "2012-01-01T00:00:00.000Z"', () => {
      expect(dateString).not.toEqual('2012-01-01T00:00:00.000Z')
    })

    xit('equals "2001-12-01T00:00:00.000Z"', () => {
      // "12.1" is interpreted as the date December 1st,
      // and as before for dates with no year the default is 2001 because of course.
      expect(dateString).toEqual('2001-12-01T00:00:00.000Z')
    })
  })

  // 15 of 28
  describe('new Date("12.0")', () => {
    beforeEach(() => {
      oDate = new Date('12.0')
      dateString = oDate.toTimeString()
    })

    describe('.toTimeString()', () => {
      it('equals "Invalid Date"', () => {
        expect(dateString).toEqual('Invalid Date')
      })
    })

    describe('.toISOString()', () => {
      it('throws', () => {
        expect(() => oDate.toISOString()).toThrow()
      })
    })
  })
})
