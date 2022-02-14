describe('Number', () => {
  describe('parse', () => {
    let result
    describe('objects', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU
      describe('Number({})', () => {
        beforeEach(() => {
          result = Number({}) // Number of an empty object
        })

        it("is typeof 'number'", () => { // it is a 'number'
          expect(typeof (result)).toEqual('number')
        })

        it('is NaN', () => { // but also it is [N]ot[a][N]umber
          expect(isNaN(result)).toBe(true)
        })
      })

      describe('Number([])', () => {
        beforeEach(() => {
          result = Number([]) // Number of an empty array object
        })

        it("is typeof 'number'", () => { // it is a 'number'
          expect(typeof (result)).toEqual('number')
          expect(_.isNumber(result)).toBe(true)
        })

        it('is NOT a NaN', () => { // but also it is [N]ot[a][N]umber
          expect(isNaN(result)).toBe(false)
        })
      })
    })
  })
})
