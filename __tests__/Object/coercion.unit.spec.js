describe('Object', () => {
  describe('coercion', () => { // SRC: https://www.youtube.com/watch?v=2pL28CcEijU&t=383s
    let result
    describe('[] !== []', () => {
      it('is true', () => {
        /* eslint-disable no-self-compare */
        expect([] !== []).toBe(true)
        /* eslint-enable no-self-compare */
      })
    })

    describe('[] + {}', () => {
      it("equals '[object Object]'", () => {
        result = [] + {}
        expect(result).toEqual('[object Object]')
        expect(typeof (result)).toBe('string')
      })
    })

    describe('{} + []', () => {
      beforeEach(() => {
        result = {} + []
      })

      xit('is 0', () => { // FIXME? or XXX? // SRC: https://www.youtube.com/watch?v=2pL28CcEijU&t=383s
        expect(result).toBe(0)
      })

      it("is '[object Object]'", () => {
        const result = {} + []
        expect(result).not.toBe(0)
        expect(result).toEqual('[object Object]')
        expect(typeof (result)).toBe('string')
      })
    })
  })
})
